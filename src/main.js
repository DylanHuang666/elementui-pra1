import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//echarts
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts

//vue-moment
Vue.use(require('vue-moment'));

require('@/utils/moment-zh.js')

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
