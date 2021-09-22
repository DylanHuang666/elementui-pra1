import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
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
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/radioAndCheckbox',
    name: 'RadioAndCheckbox',
    component: () => import('../views/RadioAndCheckbox.vue')
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
  },
  {
    path: '/select',
    name: 'Select',
    component: () => import('../views/Select.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/Form.vue')
  },
  {
    path: '/form2',
    name: 'Form2',
    component: () => import('../views/Form2.vue')
  },
  {
    path: '/component1',
    name: 'Component1',
    component: () => import('../views/Component1.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router