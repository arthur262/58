import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/components/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'standard',
    redirect:'/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('@/components/HomePage.vue'),
  },
  {
    path: '/Home/Card',
    name: 'Card',
    component: () => import('@/components/Buy&Sell/seond_levelPage/B&S_Card.vue'),
  },

  {
    path: '/School',
    name: 'School',
    component: HomeView
  },
  {
    path: '/Rental',
    name: 'Rental',
    component: HomeView
  },
  {
    path: '/Back&Covid',
    name: 'Back&Covid',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
