import Vue from 'vue'
import VueRouter from 'vue-router'
import Table from '../views/elementui/table/index.vue'
//nprogress
import NProgress from 'nprogress'

Vue.use(VueRouter)

/*
路由重复指定会有红色报错。虽然对项目无影响，但是看到有红的不舒服！
解决方法：
*/
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  // console.log('this',this) //
  return originalPush.call(this, location).catch(err => err)
}

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
      title: '首页', //为了面包屑第一级显示也取首页
      // icon: 'config',
      // keepAlive: true
    },
    redirect:"/manage-system-layout/home",
    children: [{
        path: 'home',
        name: 'home',
        component: () => import('../views/manage-system-layout/pages/home.vue'),
        meta: {
          title: '首页',
          // icon: 'config',
          // keepAlive: true
        }
      },
      {
        path: 'elementui',
        name: 'elementui',
        component: () => import('../views/manage-system-layout/pages/elementui/elementui.vue'),
        meta: {
          title: 'elementui',
          noJump: true
          // icon: 'config',
          // keepAlive: true
        },
        children: [{
            path: 'table',
            name: 'manage-system-table',
            component: () => import('../views/manage-system-layout/pages/elementui/table.vue'),
            meta: {
              title: '表格',
              // icon: 'config',
              // keepAlive: true
            }
          }, {
            path: 'carousel',
            name: 'manage-system-carousel',
            component: () => import('../views/manage-system-layout/pages/elementui/carousel.vue'),
            meta: {
              title: '轮播图',
              // icon: 'config',
              // keepAlive: true
            }
          },
          {
            path: 'rate',
            name: 'rate',
            component: () => import('../views/manage-system-layout/pages/elementui/rate.vue'),
            meta: {
              title: '评分'
            }
          },
          {
            path: 'card',
            name: 'card',
            component: () => import('../views/manage-system-layout/pages/elementui/card.vue'),
            meta: {
              title: '卡片'
            }
          },
          {
            path: 'calendar',
            name: 'calendar',
            component: () => import('../views/manage-system-layout/pages/elementui/calendar.vue'),
            meta: {
              title: '日历'
            }
          },
          {
            path: 'infiniteScroll',
            name: 'infiniteScroll',
            component: () => import('../views/manage-system-layout/pages/elementui/infiniteScroll.vue'),
            meta: {
              title: '无限滚动'
            }
          },
          {
            path: 'divider',
            name: 'divider',
            component: () => import('../views/manage-system-layout/pages/elementui/divider.vue'),
            meta: {
              title: '分割线'
            }
          },
          {
            path: 'drawer',
            name: 'drawer',
            component: () => import('../views/manage-system-layout/pages/elementui/drawer.vue'),
            meta: {
              title: '抽屉'
            }
          },
          {
            path: 'dialog',
            name: 'dialog',
            component: () => import('../views/manage-system-layout/pages/elementui/dialog.vue'),
            meta: {
              title: '对话框'
            }
          },
          {
            path: 'tag',
            name: 'tag',
            component: () => import('../views/manage-system-layout/pages/elementui/tag.vue'),
            meta: {
              title: '标签'
            }
          },
          {
            path: 'badge',
            name: 'badge',
            component: () => import('../views/manage-system-layout/pages/elementui/badge.vue'),
            meta: {
              title: '标记'
            }
          },
          {
            path: 'avatar',
            name: 'avatar',
            component: () => import('../views/manage-system-layout/pages/elementui/avatar.vue'),
            meta: {
              title: '头像'
            }
          },
          {
            path: 'alert',
            name: 'alert',
            component: () => import('../views/manage-system-layout/pages/elementui/alert.vue'),
            meta: {
              title: '警告'
            }
          },
          {
            path: 'message',
            name: 'message',
            component: () => import('../views/manage-system-layout/pages/elementui/message.vue'),
            meta: {
              title: '消息提示'
            }
          },
          {
            path: 'messageBox',
            name: 'messageBox',
            component: () => import('../views/manage-system-layout/pages/elementui/messageBox.vue'),
            meta: {
              title: '消息确认弹框'
            }
          },
          {
            path: 'notification',
            name: 'notification',
            component: () => import('../views/manage-system-layout/pages/elementui/notification.vue'),
            meta: {
              title: '通知'
            }
          },
          {
            path: 'image',
            name: 'image',
            component: () => import('../views/manage-system-layout/pages/elementui/image.vue'),
            meta: {
              title: '图片'
            }
          },
          {
            path: 'tabs',
            name: 'tabs',
            component: () => import('../views/manage-system-layout/pages/elementui/tabs.vue'),
            meta: {
              title: '标签页'
            }
          }
        ]
      },
      {
        path: 'manage',
        name: 'manage',
        component: () => import('../views/manage-system-layout/pages/manage/manage.vue'),
        meta: {
          title: '管理',
          noJump: true
          // icon: 'config',
          // keepAlive: true
        },
        children: [
          {
            path: 'canvasBoard',
            name: 'canvasBoard',
            component: () => import('../views/manage-system-layout/pages/manage/canvasBoard.vue'),
            meta: {
              title: 'canvas看板',
              // icon: 'config',
              // keepAlive: true
            }
          },
          {
            path: 'resume',
            name: 'resume',
            component: () => import('../views/manage-system-layout/pages/manage/resume.vue'),
            meta: {
              title: '个人简历',
              // icon: 'config',
              // keepAlive: true
            }
          },
          {
            path: 'userManage',
            name: 'userManage',
            component: () => import('../views/manage-system-layout/pages/manage/userManage/userManage.vue'),
            meta: {
              title: '用户管理',
              noJump: true
              // icon: 'config',
              // keepAlive: true
            },
            // redirect:{
            //   path: ''
            // },
            children: [{
              path: 'personal',
              name: 'personal',
              component: () => import('../views/manage-system-layout/pages/manage/userManage/personal.vue'),
              meta: {
                title: '个人主页',
                // icon: 'config',
                // keepAlive: true
              },
            }]
          }
        ]
      },
    ]

  },
  {
    path: '*',
    name: 'notFound',
    component: () => import('../views/manage-system-layout/pages/notFound.vue')
  }

]

const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router