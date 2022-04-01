import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Jobs from '../views/jobs/jobs.vue'
import NotFound from '../views/NotFound.vue'
import JobDetail from '../views/jobs/JobDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/jobDetail/:id',
    name: 'jobDetail',
    component: JobDetail,
    props: true
  },
  // redirect
  {
    path:'/all-jobs',
    redirect:'/jobs'
  },
  // 404 page
  {
    path:'/:catchAll(.*)',
    name: 'NotFound',
    component:NotFound
 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
