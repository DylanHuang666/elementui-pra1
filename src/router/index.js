import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/Form.vue')
  },
  {
    path: '/input',
    name: 'Input',
    component: () => import('../views/Input.vue')
  },
  {
    path: '/timePicker',
    name: 'TimePicker',
    component: () => import('../views/TimePicker.vue')
  },
  {
    path: '/datePicker',
    name: 'DatePicker',
    component: () => import('../views/DatePicker.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
