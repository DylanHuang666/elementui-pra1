<template>
  <div>
    <el-menu
      :router="true"
      default-active="1-1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-eleme"></i>
          <span slot="title">ElementUI</span>
        </template>
        <el-menu-item index="/manage-system-layout/table">表格</el-menu-item>
        <el-menu-item index="/manage-system-layout/carousel">轮播图</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">管理</span>
        </template>
        <el-menu-item index="2-1">echarts看板</el-menu-item>
        <el-menu-item index="2-2">个人简历</el-menu-item>
        <el-submenu index="2-3">
          <span slot="title">用户管理</span>
          <el-menu-item index="2-3-1">个人主页</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-house"></i>
        <span slot="title">首页</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  created() {
    this.$bus.$on("changeCollapse", this.changeCollapseFn);
  },
  methods: {
    changeCollapseFn(v) {
      this.isCollapse = v;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px; //定个宽度才会有收起的动画
}
</style>