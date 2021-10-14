<template>
  <div>
    <props1 :b="a" c="123" @myselect="fn1" />
  </div>
</template>

<script>
import props1 from "./props1.vue";
export default {
  components: {
    props1
  },
  data(){
    return{
      a:[]
    }
  },
  methods:{
    fn1(){
      console.log('this.a',this.a,this)
    }
  }
};
</script>

<style>
</style>