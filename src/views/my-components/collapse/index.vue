<template>
  <div>
    <!-- <collapse2 /> -->
    <collapse3 :menuData="menuData" accordion :speed="0.3" />
  </div>
</template>

<script>
import collapse1 from './collapse1'
import collapse2 from './collapse2'
import collapse3 from './collapse3'

export default {
  components:{
    collapse1,
    collapse2,
    collapse3
  },
  data(){
    return{
      menuData:[
        {
          title:'标题1',
          content:'内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1'
        },
        {
          title:'标题2',
          content:'内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2',
          defaultOpen: true //是否默认展开
        },
        {
          title:'标题3',
          content:'内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3'
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>

</style>