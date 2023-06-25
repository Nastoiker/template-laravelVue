import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/Pages/Home.vue')
    },
    {
      path: '/home',
      name: 'main',
      component: () => import('@/Pages/Home.vue')
    }
  ]
})
export default router
