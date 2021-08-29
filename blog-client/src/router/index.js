import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Blog from '../views/Blog'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About')
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
  },
  {
    name: "categoryBlog",
    path: "/blog/cate/:categoryId",
    component: Blog
  },
  {
    name : 'detail',
    path : '/blog/:blogid',
    component : ()=>import('@/views/Blog/Detail')
  },
  {
    name :'project',
    path : '/project',
    component : ()=>import('@/views/Project')
  },
  {
    name :'message',
    path : '/message',
    component : ()=>import('@/views/Message')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})



const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router
