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
      <el-main
        class="s-main-box"
        v-loading="loading"
        element-loading-text="拼命加载中..."
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0)"
      >
        <mainArea />
        <el-backtop target=".s-main-box"></el-backtop>
      </el-main>
      <!-- 主区域 -->
    </el-container>
    <!-- 右侧区域 -->
  </el-container>
</template>

<script>
import sideMenu from "./layout/sideMenu";
import headerBar from "./layout/headerBar";
import mainArea from "./layout/mainArea";

export default {
  components: {
    sideMenu,
    headerBar,
    mainArea
  },
  watch: {
    $route: {
      handler() {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      },
      immediate: true
    }
  },
  data() {
    return {
      loading: true
    };
  }
};
</script>

<style lang="scss" scoped>
.el-header {
  // background-color: #b3c0d1;
  // color: #333;
  box-shadow: 0px 1px 5px 1px #cccccc;
  z-index: 999;
}

.el-aside {
  // background-color: #d3dce6;
  // color: #333;
  height: 100vh;
  overflow-x: hidden;
}

/*滚动条样式*/
//滚动条整体
.el-aside::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
//滚动按钮样式
.el-aside::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
//滚动条样式
.el-aside::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
/*滚动条样式*/

.el-main {
  // background-color: #e9eef3;
  // color: #333;
  height: calc(100vh - 60px);
}

.backTop {
  background-color: #f2f5f6;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  text-align: center;
  // line-height: 40px;
  color: #1989fa;
  font-size: 16px;
}
</style>