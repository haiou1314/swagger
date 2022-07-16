import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import layout from '@/views/layout'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  {
    path: '/',
    component: layout,
    redirect: '/ ',
    children: [
      { path: '/ ', component: () => import('@/views/home') },
      { path: '/findaroom', component: () => import('@/views/FindAroom') },
      { path: '/profile', component: () => import('@/views/my') },
      { path: '/service', component: () => import('@/views/service') }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
