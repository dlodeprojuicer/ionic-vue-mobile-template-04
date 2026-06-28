import { createRouter, createWebHistory } from '@ionic/vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Tabs from '../components/Tabs.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Tabs,
    children: [
      {
        path: '',
        component: () => import('@/views/Home.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
