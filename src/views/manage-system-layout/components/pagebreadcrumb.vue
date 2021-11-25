<template>
  <div>
    <el-breadcrumb separator="/">
      <!-- <el-breadcrumb-item
        v-for="(item,index) in routePathArr"
        :key="index"
        :to="item.meta.noJump ? {path: $route.path} : { path: item.path }"
      >{{item.meta.title}}</el-breadcrumb-item>-->
      <template v-if="$route.meta.title == '首页'">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
      </template>

      <template v-else>
        <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="index">
          <span v-if="item.meta.noJump">{{item.meta.title}}</span>
          <router-link v-else :to="item.path">{{item.meta.title}}</router-link>
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.el-breadcrumb {
  margin: 10px 0 20px;
}
</style>