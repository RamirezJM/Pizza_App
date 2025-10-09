import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Admin from '../views/Admin.vue'
import Menu from '../views/Menu.vue'
import History from '../components/History.vue'
import Delivery from '../components/Delivery.vue'
import Locations from '../components/Locations.vue'

const routes = [
  {
    path: '/', name: 'home', components: {
      default: Home,
      delivery: Delivery,
      history: History 
    }
  },
  {
    path: '/about', name: 'about', component: About, children: [
      { path: 'history', name: 'history', component: History },
      { path: 'delivery', name: 'delivery', component: Delivery },
      { path: 'locations', name: 'locations', component: Locations }
    ]
  },
  { path: '/admin', name: 'admin', component: Admin },
  { path: '/menu', name: 'menu', component: Menu }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
