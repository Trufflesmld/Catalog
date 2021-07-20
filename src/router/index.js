import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '@/views/Home.vue')
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import( '@/views/Catalog.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import( '@/views/Register.vue')
  },
  {
    path: '/tree',
    name: 'Tree',
    component: () => import( '@/views/Tree.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
