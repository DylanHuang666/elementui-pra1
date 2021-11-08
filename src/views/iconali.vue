<template>
  <div>
    <i class="iconfont icon-chart-bar"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <el-button type="primary" icon="iconfont icon-chart-bar" class="btn">搜索</el-button>
    <span class="iconfont icon-chart-bar"></span>
    <span class="el-icon-delete"></span>
    <div>1.svg图标（外链代码引入）:</div>
    <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-chart-bar"></use>
    </svg>
    <div>2.svg图标（插件处理）:</div>
    <svg-icon class="aaa" iconClass="gouwuche"/>
    <svg-icon class="bbb" iconClass="order"/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  i{
    font-size: 30px;
    color: red;
  }
  // /deep/.btn{
  //   span{
  //     margin-left: 5px;
  //   }
  // }
  .svg-icon.aaa{  //在相应的xxx.svg文件中把fill:设置成currentColor或直接去掉，color设置才会生效
    color: blue;
    font-size: 30px;
  }
  .bbb{
    color: red;
    font-size: 40px;
    // width: 50px;
    // height: 50px;
  }
</style>
