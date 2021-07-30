import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/about',
    name : 'about',
    component:()=>import('@/views/About')
  },
  {
    path : '/blog',
    name : 'blog',
    component : ()=>import('@/views/Blog')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
