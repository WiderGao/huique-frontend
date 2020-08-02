import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'
import api from '@/api'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '活动',
      requireAuth: false
    },
    component: ()=> import("../views/Home")
  },
  {
    path: '/info',
    name: 'Info',
    meta: {
      title: '信息查询',
      requireAuth: false
    },
    component: ()=> import("../views/Info")
  },
  {
    path: '/fund/:disease',
    name: 'FundList',
    meta: {
      title: '相关基金列表',
      requireAuth: false
    },
    children:[
    {
      path:':fundid',
      name: 'FundDetail',
      component: ()=>import("../views/FundDetail")
    },
    ],
    component: ()=> import("../views/FundList")
  },
  {
    path: '/doctor/:section',
    name: 'DoctorList',
    meta: {
      title: '医生列表',
      requireAuth: false
    },
    component: ()=> import("../views/DoctorList")
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      title: '我的',
      requireAuth: false
    },
    component: ()=> import("../views/Profile")
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=>import("../views/Login"),
    meta: {
      title: '登录',
      requireAuth: false
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: ()=>import("../views/Register"),
    meta: {
      title: '注册',
      requireAuth: false
    }
  },
  {
    path: '/profile/myinfo',
    name: 'Myinfo',
    component: ()=>import("../views/Myinfo"),
    meta: {
      title: '我的信息',
      requireAuth: true
    }
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: ()=>import("../views/FAQ"),
    meta: {
      title: '帮助与反馈',
      requireAuth: false
    }
  },
  {
    path: '/about',
    name: 'About',
    component: ()=>import("../views/About"),
    meta: {
      title: '关于我们',
      requireAuth: false
    }
  },
  {
    path: '/activity/:activityid',
    name: 'ActivityDetail',
    component: ()=>import("../views/ActivityDetail"),
    meta: {
      title: '活动详情',
      requireAuth: false
    }
  },
  {
    path: '/raise-help',
    name: '代写轻松筹/水滴筹',
    component: () => import('../views/RaiseHelp'),
    meta: {
      title: '活动',
      requireAuth: true
    }
  },
  {
    path: '/apply-help',
    name: 'ApplyHelp',
    component: () => import('../views/ApplyHelp'),
    meta: {
      title: '帮助申请基金',
      requireAuth: true
    }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../views/Logout'),
    meta: {
      title: '登出',
      requireAuth: true
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // 路由发生变化修改页面title
  if (to.meta.title) {
    document.title = "灰雀 · " + to.meta.title;
  }
  // 针对登录才能访问的页面
  if (to.meta.requireAuth && store.state.phone == null) {
    alert('请先登录');
    next({
      // Toast.fail('请先登录');

      name: 'Login'
    })
  }
  //用保存的cookie判断是否已经登录
  //这个要在判断登录逻辑之前
  if (Vue.$cookies.get("logged") == "true" && store.state.phone == null) {
    api.User.getUserInfo();
    api.Activity.getJoinedActivity();
    api.Fund.getStoredFund();
    next();
  }
  // 针对已登录且缓存到本地
  else if (to.name == 'Login' && store.state.phone != null) {
    next({
      name: 'Home'
    })
  }
  else next();
})
export default router
