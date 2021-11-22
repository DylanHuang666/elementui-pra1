<template>
  <el-container>

    <!-- 侧边栏 -->
    <!-- el-aside如果不设置width，会有固定默认width为300px -->   
    <el-aside style="width:auto;">
      <sideMenu />
    </el-aside>
    <!-- 侧边栏 -->

    <!-- 右侧区域 -->
    <el-container>

      <!-- 头部 -->
      <!-- el-header如果不设置height，会有固定默认height为60px -->      
      <el-header style="height:auto;">
        <headerBar />
      </el-header>
      <!-- 头部 -->

      <!-- 主区域 -->
      <el-main>
        <mainArea />
      </el-main>
      <!-- 主区域 -->

    </el-container>
    <!-- 右侧区域 -->

  </el-container>
</template>

<script>
import sideMenu from './layout/sideMenu'
import headerBar from './layout/headerBar'
import mainArea from './layout/mainArea'

export default {
  components:{
    sideMenu,
    headerBar,
    mainArea
  }
};
</script>

<style lang="scss" scoped>
.el-header {
  // background-color: #b3c0d1;
  // color: #333;
  box-shadow: 0px 1px 5px 1px #cccccc;
}

.el-aside {
  // background-color: #d3dce6;
  // color: #333;
  height: 100vh;
  overflow-x: hidden;
}

.el-main {
  // background-color: #e9eef3;
  // color: #333;
  height: calc(100vh - 60px);
}

</style>