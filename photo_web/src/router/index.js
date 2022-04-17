import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../components/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'standard',
    redirect:'/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: HomeView,
    children: [
      {
      path: '/',
      name: 'Home',
      component: HomeView
      },{
        path: '/ershouche',
        name: 'ershouche',
        component:"",
      }
      ,{
        path: '/jiaju',
        name: 'jiaju',
        component:"",
      }
      ,{
        path: '/huazhuangpin',
        name: 'huazhuangpin',
        component:"",
      }
      ,{
        path: '/dianziqijian',
        name: 'dianziqijian',
        component:"",
      }
    ]
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
