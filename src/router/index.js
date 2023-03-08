import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/joke/:id',
      alias:"/joke",
       component:()=> import("../views/JokeView.vue")
    },
   
  ]
})

export default router
