import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import ArticleView from '../views/ArticleView.vue'
import LoginOrRegisterView from '../views/LoginOrRegisterView.vue'
import UserHomeView from "../views/UserHomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexView,
      children: []
    },
    {
      path: '/login',
      component: LoginOrRegisterView
    },
    {
      path: '/article',
      component: ArticleView
    },
    {
      path: '/user-home',
      component: UserHomeView
    }
  ]
})

export default router
