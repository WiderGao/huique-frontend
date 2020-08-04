import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import api from '@/api'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'Activity' }
  },
  {
    path: '/activity',
    name: 'Activity',
    meta: {
      title: '活动',
      requireAuth: false
    },
    component: () => import("../views/Activity")
  },
  {
    path: '/info',
    name: 'Info',
    meta: {
      title: '信息查询',
      requireAuth: false
    },
    component: () => import("../views/Info")
  },
  {
    path: '/fund',
    redirect: { name: 'Info' }
  },
  {
    path: '/fund/:disease',
    name: 'FundList',
    meta: {
      title: '相关基金列表',
      requireAuth: false
    },
    children: [
      {
        path: ':fundid',
        name: 'FundDetail',
        component: () => import("../views/FundDetail")
      },
    ],
    component: () => import("../views/FundList")
  },
  {
    path: '/doctor',
    redirect: { name: 'Info' }
  },
  {
    path: '/doctor/:section',
    name: 'DoctorList',
    meta: {
      title: '医生列表',
      requireAuth: false
    },
    component: () => import("../views/DoctorList")
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      title: '我的',
      requireAuth: false
    },
    component: () => import("../views/Profile")
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("../views/Login"),
    meta: {
      title: '登录',
      requireAuth: false
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import("../views/Register"),
    meta: {
      title: '注册',
      requireAuth: false
    }
  },
  {
    path: '/profile/myinfo',
    name: 'Myinfo',
    component: () => import("../views/Myinfo"),
    meta: {
      title: '我的信息',
      requireAuth: true
    }
  },
  {
    path: '/profile/myactivity',
    name: 'MyActivity',
    component: () => import("../views/MyActivity"),
    meta: {
      title: '已报名活动',
      requireAuth: true
    }
  },
  {
    path: '/profile/myfund',
    name: 'MyFund',
    component: () => import("../views/MyFund"),
    meta: {
      title: '已收藏基金',
      requireAuth: true
    }
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: () => import("../views/FAQ"),
    meta: {
      title: '帮助与反馈',
      requireAuth: false
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import("../views/About"),
    meta: {
      title: '关于我们',
      requireAuth: false
    }
  },
  {
    path: '/activity/:activityid',
    name: 'ActivityDetail',
    component: () => import("../views/ActivityDetail"),
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
  {
    path: '*',
    component: () =>import('../views/404'),
    meta: {
      title: '页面未找到',
      requireAuth: false
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
import { MessageBox } from 'element-ui';

router.beforeEach((to, from, next) => {
  // 路由发生变化修改页面title
  if (to.meta.title) {
    document.title = "灰雀 · " + to.meta.title;
  }

  //用保存的cookie判断是否已经登录
  //这个要在判断页面访问权限之前
  if (Vue.$cookies.get("logged") == "true" && store.state.phone == null) {
    Promise.all(
      [
        api.User.getUserInfo(),
        api.Activity.getJoinedActivity(),
        api.Fund.getStoredFund()
      ]).catch(error => {
        //获取用户信息失败就清除旧信息
        store.dispatch("clearLogin");
        Vue.$cookies.remove("logged");
        console.log(error);
      })
  }
  // console.log(to.name)

  // 针对已登录且访问登录页面
  if (Vue.$cookies.get("logged") == "true" && to.name == 'Login') {
    next({
      name: 'Activity'
    })
  }
  // 针对登录才能访问的页面
  else if (Vue.$cookies.get("logged") != "true" && to.meta.requireAuth) {
    MessageBox.confirm('请先登录', '提示', {
      confirmButtonText: '确定',
      showCancelButton: false,
      type: 'warning'
    })
    next({
      name: 'Login'
    })
  }
  else {
    next();
  }
})
export default router
