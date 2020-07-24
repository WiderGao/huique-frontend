import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import HomePage from '@/views/Activity.vue'
import ActivityDetail from '@/views/ActivityDetail.vue'
import InfoPage from '@/views/Info.vue'
import ProfilePage from '@/views/Profile.vue'
import FundSearch from '@/views/FundSearch.vue'
import DoctorSearch from '@/views/DoctorSearch.vue'
import FundType from '@/views/FundType.vue'
import FundDetail from '@/views/FundDetail.vue'
import RaiseHelp from '@/views/RaiseHelp.vue'
import ApplyHelp from '@/views/ApplyHelp.vue'
import DoctorList from '@/views/DoctorList.vue'
import Login from '@/views/Login.vue'
import Logout from '@/views/Logout.vue'
import Register from '@/views/Register.vue'
import Myinfo from '@/views/Myinfo.vue'
import MyActivity from '@/views/MyActivity.vue'
import MyFund from '@/views/MyFund.vue'
import FAQ from '@/views/FAQ.vue'
import About from '@/views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'Home' }
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
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
  // 针对登录才能访问的页面
  if (to.meta.requireAuth && store.state.phone == null) {
    Toast.fail('请先登录');
    next({
      name: 'Login'
    })
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
