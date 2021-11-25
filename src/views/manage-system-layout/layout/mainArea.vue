<template>
  <div class="main-container">
    <!-- <el-breadcrumb separator="/">
      <template v-if="$route.meta.title == '首页'">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
      </template>

      <template v-else>
        <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="index">
          <span v-if="item.meta.noJump">{{item.meta.title}}</span>
          <router-link v-else :to="item.path">{{item.meta.title}}</router-link>
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb> -->
    <pagebreadcrumb />
    <router-view></router-view>
  </div>
</template>

<script>
import pagebreadcrumb from '../components/pagebreadcrumb'
export default {
  components:{
    pagebreadcrumb
  },
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
    // console.log("this.$route", this.$route);
  }
};
</script>

<style lang="scss" scoped>
// .main-container {
// }
// .el-breadcrumb {
//   margin: 10px 0 20px;
// }
</style>