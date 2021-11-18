<template>
  <div>
    <el-menu default-active="1-1" class="el-menu-vertical-demo" :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">导航二</span>
        </template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-submenu index="2-3">
          <span slot="title">选项3</span>
          <el-menu-item index="2-3-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">导航三</span>
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
  created(){
    this.$bus.$on('changeCollapse',this.changeCollapseFn)
  },
  methods: {
    changeCollapseFn(v){
      this.isCollapse = v
    }
  },
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px; //定个宽度才会有收起的动画
}
</style>