<template>
  <div class="main-container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item,index) in routePathArr" :key="index" :to="{ path: item.path }">{{item.meta.title}}</el-breadcrumb-item>
      <!-- <el-breadcrumb-item>
        <a href="/">活动管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      -->
    </el-breadcrumb>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routePathArr: []
    };
  },
  watch: {
    $route: {
      handler(newRoute) {
        console.log("newRoute", newRoute);
        this.routePathArr = newRoute.matched;
      },
      immediate: true
    }
  },
  created() {
    console.log("this.$route", this.$route);
  }
  // methods:{
  //   routePath(val){
  //     val.matched.map((item,index)=>{

  //     })
  //   }
  // }
};
</script>

<style lang="scss" scoped>
// .main-container {
// }
.el-breadcrumb {
  margin: 10px 0 20px;
}
</style>