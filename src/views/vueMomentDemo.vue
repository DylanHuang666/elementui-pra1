<template>
  <div>
    <!-- vue-moment只能在模板当过滤器用 -->
    <span>vue-moment: {{date1|moment("YYYY-MM-DD HH:mm:ss")}}</span>
    <div>moment.js: {{d1}}</div>
  </div>
</template>

<script>

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
    console.log('this',this)
    // console.log('this.$moment',this.$moment)
    this.d1 = moment(this.date1).format("YYYY-MMMM-DD dddd HH:mm:ss a")
    console.log('moment',this.d1)
    console.log('123',moment('20220809').format("YYYY-MM-DD"))
  }
}
</script>

<style>

</style>