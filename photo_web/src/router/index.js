import { createRouter, createWebHashHistory } from 'vue-router'

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
    path: '/Post_detail',
    name: 'Post',
    component: () => import('@/components/One_Post.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
