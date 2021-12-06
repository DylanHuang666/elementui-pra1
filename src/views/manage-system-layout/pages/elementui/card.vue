<template>
  <!-- 通过shadow属性设置卡片阴影出现的时机：always、hover或never。 -->
  <div>
    <el-card class="box-card" shadow="always">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
    </el-card>

    <el-card class="box-card" :body-style="{ padding: '0px' }" shadow="always">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="image"
      />
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">时间</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box-card {
  width: 480px;
  margin-bottom: 20px;
}
.image {
  width: 100%;
  // display: block;
}
</style>