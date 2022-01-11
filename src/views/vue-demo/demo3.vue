<template>
  <div>
    999
    <div>{{arr[0]}}</div>
    <div v-for="(item,index) in arr" :key="index">{{item}}</div>
    <el-button @click="clickHandle">点击</el-button>

    <div>{{obj}}</div>
  </div>
</template>

<script>
//1.对数组某一项更改，html有用到该项时才重新渲染一次，只是用到该数组那不会重新渲染；this.$set()为数组添加新项，则
//只要用到该数组就会重新渲染

//2.对象无论是更改某项还是添加新项，只要用到该对象都会重新渲染一次

  export default {
    data(){
      return {
        arr:[0],
        obj:{a:1}
      }
    },
    mounted(){
      console.log('this.arr前',this.arr)
      console.log('this.obj前',this.obj)
      // this.arr = [1]
      // this.arr[0] = 1
      this.$set(this.arr,0,1)
      console.log('set',this.arr)
   
      this.arr[0] = 2 //同步紧接着赋值，$set触发的重渲染会拿该值，(草，忘了数组直接赋值是不会有响应式的)
     
      // setTimeout(()=>{
      //   this.arr[0] = 3
      // },2000)
      console.log('this.arr后',this.arr)
      


      // this.obj.a = 2
      // this.obj.b = 3
      console.log('this.obj后',this.obj)
    },
    methods:{
      clickHandle(){
        // this.arr[0] = 1
        // this.obj.b = 3
        // this.arr[0] = 3
        // this.$set(this.arr,0,5)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>