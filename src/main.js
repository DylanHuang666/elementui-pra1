import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/iconfont.css'

//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//echarts
// import * as echarts from 'echarts';
// Vue.prototype.$echarts = echarts

//vue-moment
Vue.use(require('vue-moment'));

//monent.js显示中文格式
require('@/utils/moment-zh.js')

//velocity-animate
// import Velocity from 'velocity-animate' //不能全局引用
// Vue.prototype.$velocity = Velocity

//gsap
import gsap from "gsap";
Vue.prototype.$gsap = gsap

//自己实现的message提示弹框
import TMessage from '@/components/TMessage/TMessage.js';
Vue.prototype.$message = TMessage;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
