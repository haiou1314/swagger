import Vue from 'vue'
import VueRouter from 'vue-router'
// 登录
import Login from '@/views/login'
import layout from '@/views/layout'

Vue.use(VueRouter)

const routes = [
  // 登录路由
  { path: '/login', component: Login },
  {
    path: '/',
    component: layout,
    redirect: '/ ',
    // 二级路由
    children: [
      { path: '/ ', component: () => import('@/views/home') },
      { path: '/findaroom', component: () => import('@/views/FindAroom') },
      { path: '/profile', component: () => import('@/views/my') },
      { path: '/service', component: () => import('@/views/service') }
    ]
  },
  // 我的收藏
  { path: '/detailsList', component: () => import('@/views/my/componente/MyList.vue') },
  // 我的出租
  { path: '/userLease', component: () => import('@/views/my/componente/Mylease.vue') }
]

const router = new VueRouter({
  routes
})

export default router
