import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/Activity.vue'
import InfoPage from '@/views/Info.vue'
import ProfilePage from '@/views/Profile.vue'
import FundSearch from '@/views/FundSearch.vue'
import DoctorSearch from '@/views/DoctorSearch.vue'
import FundList from '@/views/FundList.vue'
import FundDetail from '@/views/FundDetail.vue'
import RaiseHelp from '@/views/RaiseHelp.vue'
import ApplyHelp from '@/views/ApplyHelp.vue'
import DoctorList from '@/views/DoctorList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/info',
    name: 'Info',
    component: InfoPage
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage
  },
  {
    path: '/fund',
    name: 'FundSearch',
    component: FundSearch,
  },
  {
    path: '/fund/:disease',
    name: 'FundList',
    component: FundList
  },
  {
    path: '/fund/:disease/:fund',
    name: 'FundDetail',
    component: FundDetail
  },
  {
    path: '/raise-help',
    name: 'RaiseHelp',
    component: RaiseHelp
  },
  {
    path: '/apply-help',
    name: 'ApplyHelp',
    component: ApplyHelp
  },
  {
    path: '/doctor',
    name: 'DoctorSearch',
    component: DoctorSearch
  },
  {
    path: '/doctor/:section',
    name: 'DoctorList',
    component: DoctorList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
