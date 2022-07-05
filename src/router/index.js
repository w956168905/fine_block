import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views/index.vue'

const routes = [

  {
    path: '/',
    name: '主页',
    component: index
  },
  {
    path: '/login',
    name: '登录页',
    component: () => import('@/views/logIn.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
