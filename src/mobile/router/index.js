import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import axios from 'axios'

const ActivityPage   = () => import('../views/Activity.vue')
const ActivityDetail = () => import('../views/ActivityDetail.vue')
const InfoPage       = () => import('../views/Info.vue')
const ProfilePage    = () => import('../views/Profile.vue')
const FundSearch     = () => import('../views/FundSearch.vue')
const DoctorSearch   = () => import('../views/DoctorSearch.vue')
const FundType       = () => import('../views/FundType.vue')
const FundDetail     = () => import('../views/FundDetail.vue')
const RaiseHelp      = () => import('../views/RaiseHelp.vue')
const ApplyHelp      = () => import('../views/ApplyHelp.vue')
const DoctorList     = () => import('../views/DoctorList.vue')
const Login          = () => import('../views/Login.vue')
const Logout         = () => import('../views/Logout.vue')
const Register       = () => import('../views/Register.vue')
const Myinfo         = () => import('../views/Myinfo.vue')
const MyActivity     = () => import('../views/MyActivity.vue')
const MyFund         = () => import('../views/MyFund.vue')
const FAQ            = () => import('../views/FAQ.vue')
const About          = () => import('../views/About.vue')
const Page404        = () => import('../views/404.vue')


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
    component: ActivityPage,
    meta: {
      title: '活动',
      requireAuth: false
    }
  },
  {
    path: '/info',
    name: 'Info',
    component: InfoPage,
    meta: {
      title: '信息查询',
      requireAuth: false
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage,
    meta: {
      title: '我的',
      requireAuth: false
    }
  },
  {
    path: '/fund',
    name: 'FundSearch',
    component: FundSearch,
    meta: {
      title: '基金类型',
      requireAuth: false
    }
  },
  {
    path: '/fundtype/:disease',
    name: 'FundType',
    component: FundType,
    meta: {
      title: '相关基金列表',
      requireAuth: false
    }
  },
  {
    path: '/fund/:fundid',
    name: 'FundDetail',
    component: FundDetail,
    meta: {
      title: '基金详情',
      requireAuth: false
    }
  },
  {
    path: '/raise-help',
    name: '代写轻松筹/水滴筹',
    component: RaiseHelp,
    meta: {
      title: '活动',
      requireAuth: true
    }
  },
  {
    path: '/apply-help',
    name: 'ApplyHelp',
    component: ApplyHelp,
    meta: {
      title: '帮助申请基金',
      requireAuth: true
    }
  },
  {
    path: '/doctor',
    name: 'DoctorSearch',
    component: DoctorSearch,
    meta: {
      title: '医生专业分类',
      requireAuth: false
    }
  },
  {
    path: '/doctor/:section',
    name: 'DoctorList',
    component: DoctorList,
    meta: {
      title: '医生列表',
      requireAuth: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录',
      requireAuth: false
    }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
    meta: {
      title: '登出',
      requireAuth: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: '注册',
      requireAuth: false
    }
  },
  {
    path: '/activity/:activityid',
    name: 'ActivityDetail',
    component: ActivityDetail,
    meta: {
      title: '活动详情',
      requireAuth: false
    }
  },
  {
    path: '/profile/myinfo',
    name: 'Myinfo',
    component: Myinfo,
    meta: {
      title: '我的信息',
      requireAuth: true
    }
  },
  {
    path: '/profile/myactivity',
    name: 'MyActivity',
    component: MyActivity,
    meta: {
      title: '已报名活动',
      requireAuth: true
    }
  },
  {
    path: '/profile/myfund',
    name: 'MyFund',
    component: MyFund,
    meta: {
      title: '已收藏基金',
      requireAuth: true
    }
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FAQ,
    meta: {
      title: '帮助与反馈',
      requireAuth: false
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: '关于我们',
      requireAuth: false
    }
  },
  {
    path: '*',
    component: Page404,
    meta: {
      title: '页面未找到',
      requireAuth: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


import { Toast } from 'vant';
Vue.use(Toast);

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
    Toast.fail('请先登录');
    next({
      name: 'Login'
    })
  }
  else {
    next();
  }
})

router.onError((error) => {
  console.log(error)
})
export default router
