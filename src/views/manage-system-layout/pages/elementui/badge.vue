<template>
  <div>
    <el-card>
      <h3>基础用法</h3>
      <!-- 定义value属性，它接受Number或者String。 
      hidden：是否隐藏 badge
      -->
      <el-badge :value="12" class="item">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge :value="3" class="item" hidden>
        <el-button size="small">回复</el-button>
      </el-badge>
      <el-badge :value="1" class="item" type="primary">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge :value="2" class="item" type="warning">
        <el-button size="small">回复</el-button>
      </el-badge>
      <el-badge :value="66" class="item">我的</el-badge>
      <div class="box">
        <span>消息</span>
        <el-badge class="mark" :value="12" />
      </div>
    </el-card>
    <el-card>
      <h3>最大值</h3>
      <!-- 由max属性定义，它接受一个Number，需要注意的是，只有当value为Number时，它才会生效。 -->
      <el-badge :value="20000" :max="9999" class="item">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge :value="100" :max="10" class="item">
        <el-button size="small">回复</el-button>
      </el-badge>
    </el-card>
    <el-card>
      <h3>自定义内容</h3>
      <!-- 可以显示数字以外的文本内容。定义value为String类型是时可以用于显示自定义文本。 -->
      <el-badge value="new" class="item">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge value="hot" class="item">
        <el-button size="small">回复</el-button>
      </el-badge>
    </el-card>
    <el-card>
      <h3>小红点</h3>
      <!-- 以红点的形式标注需要关注的内容。除了数字外，设置is-dot属性，它接受一个Boolean。 -->
      <el-badge is-dot class="item">数据查询</el-badge>
      <el-badge is-dot class="item">
        <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
      </el-badge>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.box {
  border: 1px solid #aaa;
  border-radius: 3px;
  display: inline-block;
  padding: 3px;
}
.el-card {
  margin-bottom: 10px;
}
</style>