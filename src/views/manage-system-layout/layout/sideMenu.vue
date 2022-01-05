<template>
  <div>
    <el-menu
      :router="true"
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      :unique-opened="true"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-platform-eleme"></i>
          <span slot="title">ElementUI</span>
        </template>
        <el-menu-item index="/manage-system-layout/elementui/table">
          <i class="el-icon-s-grid"></i>表格
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/carousel">
          <i class="el-icon-picture"></i>轮播图
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/rate">
          <i class="el-icon-star-on"></i>评分
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/card">
          <i class="el-icon-postcard"></i>卡片
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/calendar">
          <i class="el-icon-date"></i>日历
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/infiniteScroll">
          <i class="el-icon-tickets"></i>无限滚动
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/divider">
          <i class="el-icon-minus"></i>分割线
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/drawer">
          <i class="el-icon-d-arrow-left"></i>抽屉
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/dialog">
          <i class="el-icon-chat-square"></i>对话框
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/tag">
          <i class="el-icon-collection-tag"></i>标签
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/badge">
          <i class="el-icon-news"></i>标记
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/avatar">
          <i class="el-icon-picture-outline-round"></i>头像
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/alert">
          <i class="el-icon-warning-outline"></i>警告
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/message">
          <i class="el-icon-chat-line-round"></i>消息提示
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/messageBox">
          <i class="el-icon-chat-line-square"></i>消息确认弹框
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/notification">
          <i class="el-icon-bell"></i>通知
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/image">
          <i class="el-icon-picture-outline"></i>图片
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/tabs">
          <i class="el-icon-document-copy"></i>标签页
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/steps">
          <i class="el-icon-d-arrow-right"></i>步骤条
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/timeline">
          <i class="el-icon-guide"></i>时间线
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/tree">
          <i class="el-icon-folder-opened"></i>树形控件
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/cascader">
          <i class="el-icon-folder-add"></i>级联选择器
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/upload">
          <i class="el-icon-upload2"></i>上传
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/tooltip">
          <i class="el-icon-chat-round"></i>文字提示
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/link">
          <i class="el-icon-link"></i>文字链接
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/RadioCheckboxSwitchSlider">
          <i class="el-icon-document-checked"></i>单/多选框,开关,滑块
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/input">
          <i class="el-icon-edit"></i>输入框
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/elementui/DateTimePicker">
          <i class="el-icon-time"></i>日期时间选择器
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">管理</span>
        </template>
        <el-menu-item index="/manage-system-layout/manage/canvasBoard">
          <i class="el-icon-s-data"></i>echarts看板
        </el-menu-item>
        <el-menu-item index="/manage-system-layout/manage/resume">
          <i class="el-icon-reading"></i>个人简历
        </el-menu-item>
        <el-submenu index="2-3">
          <span slot="title">
            <i class="el-icon-s-custom"></i>用户管理
          </span>
          <el-menu-item index="/manage-system-layout/manage/userManage/personal">
            <i class="el-icon-user"></i>个人主页
          </el-menu-item>
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
      defaultActive: "/manage-system-layout"
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
        this.defaultActive = newRoute.path;
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