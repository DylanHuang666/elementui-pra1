import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/iconfont.css'

require('@/utils/svg.js')
// import '@/utils/svg.js'

//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//echarts
// import * as echarts from 'echarts';
// Vue.prototype.$echarts = echarts

//vue-moment
Vue.use(require('vue-moment'));

//monent.js引入 
//是可以全局引入的，之前报错是因为前面已经引入的vue-moment的影响（Vue已经有$moment了），所以再设置$moment就会报错
//可以重新设置新key或者前面就不用引入vue-moment了
// import moment from 'moment'
// Vue.prototype.$moment = moment //或
// Object.defineProperty(Vue.prototype, '$moment', { value: moment })
require('@/utils/moment-zh.js') //monent.js显示中文格式

//velocity-animate
// import Velocity from 'velocity-animate'
// Vue.prototype.$velocity = Velocity

//gsap
import gsap from "gsap";
Vue.prototype.$gsap = gsap

//自己实现的message提示弹框
import TMessage from '@/components/TMessage/TMessage.js';
Vue.prototype.$message = TMessage;

//svg
import '@/icons'

//v-calendar
import VCalendar from 'v-calendar';
Vue.use(VCalendar);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
