import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '',
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
    component: () => import('@/components/System_Component/One_Post.vue'),
  },
  {
    path: '/Submit',
    name: 'Submit',
    component: () => import('@/components/System_Component/Sub_Post.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
