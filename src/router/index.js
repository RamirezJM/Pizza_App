import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Admin from '../views/Admin.vue'
import Menu from '../views/Menu.vue'

const routes = [
  {path:'/', name:'home', component: Home},
  {path:'/about', name:'about', component: About},
  {path:'/admin', name:'admin', component: Admin},
  {path: '/menu', name: 'menu', component: Menu}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
