import Vue from 'vue'
import VueRouter from 'vue-router'
import Table from '../views/elementui/table/index.vue'
//nprogress
import NProgress from 'nprogress'

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
    component: () => import('../views/elementui/RadioAndCheckbox.vue')
  },
  {
    path: '/input',
    name: 'Input',
    component: () => import('../views/elementui/Input.vue')
  },
  {
    path: '/timePicker',
    name: 'TimePicker',
    component: () => import('../views/elementui/TimePicker.vue')
  },
  {
    path: '/datePicker',
    name: 'DatePicker',
    component: () => import('../views/elementui/DatePicker.vue')
  },
  {
    path: '/select',
    name: 'Select',
    component: () => import('../views/elementui/Select.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/elementui/Form.vue')
  },
  {
    path: '/form2',
    name: 'Form2',
    component: () => import('../views/elementui/Form2.vue')
  },
  {
    path: '/tagTime', //标记选择组件
    name: 'TagTime',
    component: () => import('../views/work/TagTime.vue')
  },
  {
    path: '/upload',
    name: 'Upload',
    component: () => import('../views/elementui/upload/index.vue')
  },
  {
    path: '/progress',
    name: 'Progress',
    component: () => import('../views/elementui/Progress.vue')
  },
  {
    path: '/Tree',
    name: 'Tree',
    component: () => import('../views/elementui/tree/index.vue')
  },
  {
    path: '/Dialog',
    name: 'Dialog',
    component: () => import('../views/elementui/dialog/index.vue')
  },
  {
    path: '/Carousel',
    name: 'Carousel',
    component: () => import('../views/elementui/carousel/index.vue')
  },
  {
    path: '/Timeline',
    name: 'Timeline',
    component: () => import('../views/elementui/timeline/index.vue')
  },
  {
    path: '/Image',
    name: 'Image',
    component: () => import('../views/elementui/image/index.vue')
  },
  {
    path: '/Notice',
    name: 'Notice',
    component: () => import('../views/elementui/Notice.vue')
  },
  {
    path: '/NavMenu',
    name: 'NavMenu',
    component: () => import('../views/elementui/navMenu/index.vue')
  },
  {
    path: '/Tabs',
    name: 'Tabs',
    component: () => import('../views/elementui/tabs/index.vue')
  },
  {
    path: '/Steps',
    name: 'Steps',
    component: () => import('../views/elementui/steps/index.vue')
  },
  {
    path: '/Pagination',
    name: 'Pagination',
    component: () => import('../views/elementui/pagination/index.vue')
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
  },
  {
    path: '/iconali',
    name: 'iconali',
    component: () => import('../views/iconali.vue')
  },
  {
    path: '/vueAnimation',
    name: 'vueAnimation',
    component: () => import('../views/vue-animation/index.vue')
  },
  {
    path: '/layout-demo', //布局
    name: 'layoutDemo',
    component: () => import('../views/layout-demo/index.vue')
  },
  {
    path: '/vue-demo',
    name: 'vueDemo',
    component: () => import('../views/vue-demo/index.vue')
  },
  {
    path: '/v-calendar', //v-calendar
    name: 'vCalendar',
    component: () => import('../views/vue-plugin/v-calendar/index.vue')
  },
  {
    path: '/sass-demo', //sass
    name: 'sass-demo',
    component: () => import('../views/sass-demo/sass1.vue')
  },
  {
    path: '/my-components',
    name: 'my-components',
    component: () => import('../views/my-components/collapse/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/manage-system-layout/pages/login.vue')
  },
  {
    path: '/manage-system-layout',
    name: 'manage-system-layout',
    component: () => import('../views/manage-system-layout/index.vue'),
    meta: {
      title: '首页',
      // icon: 'config',
      // keepAlive: true
    },
    children: [{
      path: 'table',
      name: 'manage-system-table',
      component: () => import('../views/manage-system-layout/pages/table.vue'),
      meta: {
				title: '表格',
				// icon: 'config',
				// keepAlive: true
			}
    },{
      path: 'carousel',
      name: 'manage-system-carousel',
      component: () => import('../views/manage-system-layout/pages/carousel.vue'),
      meta: {
				title: '轮播图',
				// icon: 'config',
				// keepAlive: true
			}
    }]

  }

]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  NProgress.start()
  next()
})

router.afterEach((to,from)=>{
  NProgress.done()
})

export default router