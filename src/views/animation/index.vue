<template>
  <div>
    <animation3 v-bind:options="options" v-if="show" ref="spritespin"/>
  </div>
</template>

<script>
import animation3 from './animation3.vue'
export default {
  components:{
    animation3
  },
  data(){
    return{
      show: true,
      options: {
        // source: '/images/bike6x6_big.jpg',
        width: 480,
        height: 327,
        frames: 34,
        framesX: 6,
        sense: -1
      },
    }
  }
}
</script>

<style>

</style>