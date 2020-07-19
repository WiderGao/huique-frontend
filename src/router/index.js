import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/Activity.vue'
import InfoPage from '@/views/Info.vue'
import ProfilePage from '@/views/Profile.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
