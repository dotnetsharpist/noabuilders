// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/qurilishmateriallari',
    name: 'QurilishMateriallari', 
    component: () => import('@/views/QurilishMateriallari.vue')
  },
  {
    path: "/texnikuskunalar",
    name: "Texnikuskunalar",
    component: () => import('@/views/Texnikauskunalar.vue')
  },
  {
    path: '/konsalting',
    name: 'Konsalting',
    component: () => import('@/views/Konsalting.vue')
  }
  // boshqa routelarni shu yerga qo‘shasiz
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
