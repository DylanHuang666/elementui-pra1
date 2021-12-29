<template>
  <div>
    <el-card>
      <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
      <el-link type="primary" disabled>主要链接(禁用)</el-link>
      <el-link type="success" :underline="false">成功链接(没有下划线)</el-link>
      <el-link type="warning">警告链接</el-link>
      <el-link type="danger">危险链接</el-link>
      <el-link type="info">信息链接</el-link>
      <el-link icon="el-icon-edit">icon</el-link>
      <el-link>
        icon
        <i class="el-icon-view el-icon--right"></i>
      </el-link>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.el-link {
  margin: 0 20px;
}
</style>