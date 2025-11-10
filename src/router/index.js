import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/Layout.vue'
import Resume from '../views/Resume.vue'
import Portfolio from '../views/Portfolio.vue'
import PortfolioDetail from '../views/PortfolioDetail.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Resume',
        component: Resume
      },
      {
        path: 'portfolio',
        name: 'Portfolio',
        component: Portfolio
      },
      {
        path: 'portfolio/:id',
        name: 'PortfolioDetail',
        component: PortfolioDetail
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router




