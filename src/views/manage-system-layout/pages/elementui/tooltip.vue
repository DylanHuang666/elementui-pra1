<template>
  <div>
    <el-card>
      <h3>基础用法</h3>
      <!-- 使用content属性来决定hover时的提示信息。由placement属性决定展示效果：placement属性值为：方向-对齐位置；
      四个方向：top、left、right、bottom；三种对齐位置：start, end，默认为空。如placement="left-end"，
      则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。-->
      <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
        <el-button>上左</el-button>
      </el-tooltip>

      <el-tooltip placement="top">
        <div slot="content">
          多行信息
          <br />第二行信息
        </div>
        <el-button>多行提示</el-button>
      </el-tooltip>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>