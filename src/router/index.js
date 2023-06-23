import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const IndexView = () => import('@/pagers/IndexView')
const MainView = () => import('@/pagers/MainView')

const routes = [
  {
    path: '/',
    name: 'IndexView',
    component: IndexView,
    redirec:'/main',
    children:[
      {
        path:'/main',
        name:'main',
        component: MainView
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
