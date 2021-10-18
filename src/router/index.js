import Vue from 'vue'
import VueRouter from 'vue-router'
import Table from '../views/table/index.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Table',
    component: Table
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
    path: '/tagTime', //标记选择组件
    name: 'TagTime',
    component: () => import('../views/work/TagTime.vue')
  },
  {
    path: '/upload',
    name: 'Upload',
    component: () => import('../views/upload/index.vue')
  },
  {
    path: '/progress',
    name: 'Progress',
    component: () => import('../views/Progress.vue')
  },
  {
    path: '/Tree',
    name: 'Tree',
    component: () => import('../views/tree/index.vue')
  },
  {
    path: '/Dialog',
    name: 'Dialog',
    component: () => import('../views/dialog/index.vue')
  },
  {
    path: '/Carousel',
    name: 'Carousel',
    component: () => import('../views/carousel/index.vue')
  },
  {
    path: '/Timeline',
    name: 'Timeline',
    component: () => import('../views/timeline/index.vue')
  },
  {
    path: '/Image',
    name: 'Image',
    component: () => import('../views/image/index.vue')
  },
  {
    path: '/Notice',
    name: 'Notice',
    component: () => import('../views/Notice.vue')
  },
  {
    path: '/NavMenu',
    name: 'NavMenu',
    component: () => import('../views/navMenu/index.vue')
  },
  {
    path: '/Tabs',
    name: 'Tabs',
    component: () => import('../views/tabs/index.vue')
  },
  {
    path: '/Steps',
    name: 'Steps',
    component: () => import('../views/steps/index.vue')
  },
  {
    path: '/Pagination',
    name: 'Pagination',
    component: () => import('../views/pagination/index.vue')
  },
  {
    path: '/Echarts',
    name: 'Echarts',
    component: () => import('../views/echarts/index.vue')
  },
  {
    path: '/animation',
    name: 'animation',
    component: () => import('../views/animation.vue')
  },
  {
    path: '/animation2',
    name: 'animation2',
    component: () => import('../views/animation2.vue')
  },
  {
    path: '/animation3',
    name: 'animation3',
    component: () => import('../views/animation/animation3.vue')
  },
  {
    path: '/props',
    name: 'props',
    component: () => import('../views/props/index.vue')
  },
  {
    path: '/work',
    name: 'work',
    component: () => import('../views/work/index.vue')
  },
  {
    path: '/vueMomentDemo',
    name: 'vueMomentDemo',
    component: () => import('../views/vueMomentDemo.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router