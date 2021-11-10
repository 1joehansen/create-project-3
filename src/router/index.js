import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HeadToHead from '../views/HeadToHead.vue'
import Featured from '../views/Featured.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/head-to-head',
    name: 'HeadToHead',
    component: HeadToHead
  },
  {
    path: '/featured-player',
    name: 'Featured',
    component: Featured
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
