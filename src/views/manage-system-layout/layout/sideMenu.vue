<template>
  <div>
    <el-menu
      :router="true"
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-platform-eleme"></i>
          <span slot="title">ElementUI</span>
        </template>
        <el-menu-item index="/manage-system-layout/elementui/table"><i class="el-icon-s-grid"></i>表格</el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/carousel"><i class="el-icon-picture"></i>轮播图</el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/rate"><i class="el-icon-star-on"></i>评分</el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/card"><i class="el-icon-postcard"></i>卡片</el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/calendar"><i class="el-icon-date"></i>日历</el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/infiniteScroll"><i class="el-icon-tickets"></i>无限滚动</el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/divider"><i class="el-icon-minus"></i>分割线</el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/drawer"><i class="el-icon-d-arrow-left"></i>抽屉</el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/dialog"><i class="el-icon-chat-square"></i>对话框</el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/tag"><i class="el-icon-collection-tag"></i>标签</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">管理</span>
        </template>
        <el-menu-item index="/manage-system-layout/manage/canvasBoard"><i class="el-icon-s-data"></i>echarts看板</el-menu-item>
        <el-menu-item index="/manage-system-layout/manage/resume"><i class="el-icon-reading"></i>个人简历</el-menu-item>
        <el-submenu index="2-3">
          <span slot="title"><i class="el-icon-s-custom"></i>用户管理</span>
          <el-menu-item index="/manage-system-layout/manage/userManage/personal"><i class="el-icon-user"></i>个人主页</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="/manage-system-layout/home">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      defaultActive: '/manage-system-layout'
    };
  },
  created() {
    this.$bus.$on("changeCollapse", this.changeCollapseFn);
  },
  watch: {
    $route: {
      handler(newRoute) {
        // console.log("newRoute", newRoute);
        // this.routePathArr = newRoute.matched;
        this.defaultActive = newRoute.path
      },
      immediate: true
    }
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