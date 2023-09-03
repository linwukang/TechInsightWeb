import { createRouter, createWebHistory, type RouteLocationNormalized, type RouteLocationNormalizedLoaded } from 'vue-router'
// @ts-ignore
import IndexView from '@/views/IndexView.vue'
// @ts-ignore
import ArticleView from '@/views/ArticleView.vue'
// @ts-ignore
import LoginOrRegisterView from '@/views/LoginOrRegisterView.vue'
// @ts-ignore
import UserHomeView from "@/views/UserHomeView.vue"
// @ts-ignore
import ArticleEditView from '@/views/ArticleEditView.vue'

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
    },
    {
      path: '/article-edit',
      component: ArticleEditView
    }
  ],
  scrollBehavior(to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded) {
    return { top: 0 }   // 跳转时滚动条移动到顶端
  }
})

export default router
