<template>
  <div>
    <!-- 只能在模板当过滤器用 -->
    <span>{{date1|moment("YYYY-MM-DD HH:mm:ss")}}</span>
    <div>{{d1}}</div>
  </div>
</template>

<script>
//moment.js  只能局部引用；  全局import moment from 'moment'; Vue.prototype.$moment = moment;vue会报错！！！
import moment from 'moment'
export default {
  data(){
    return{
      date1: null,
      d1: ''
    }   
  },
  created(){
    this.date1 = new Date()
    this.d1 = moment(this.date1).format("YYYY-MMMM-DD dddd HH:mm:ss a")
    console.log('moment',this.d1)
  }
}
</script>

<style>

</style>