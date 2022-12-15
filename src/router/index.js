import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import AddHotel from '../views/AddHotel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/addhotel',
      name: 'Add hotel',
      component: AddHotel
    }
  ]
})

export default router
