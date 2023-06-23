import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

 const ChatView = () => import('@/pagers/ChatView')
const MainView = () => import('@/pagers/MainView')

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatView
  },
]

const router = new VueRouter({
  routes
})

export default router
