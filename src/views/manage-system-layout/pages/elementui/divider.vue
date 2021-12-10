<template>
  <div>
    <!-- 参数	说明	类型	可选值	默认值
    direction	设置分割线方向	string	horizontal/vertical	horizontal
    content-position	设置分割线文案的位置	string	left/right/center	center-->
    <el-card>
      <h3>分割线</h3>
      <div class="pl">
        <div>
          <h4>(1)基础用法：</h4>
          <el-divider></el-divider>
        </div>
        <div>
          <h4>(2)设置文案：</h4>
          <span>头上一片晴天，心中一个想念</span>
          <el-divider content-position="left">少年包青天</el-divider>
          <span>饿了别叫妈, 叫饿了么</span>
          <el-divider>
            <i class="el-icon-mobile-phone"></i>
          </el-divider>
          <span>为了无法计算的价值</span>
          <el-divider content-position="right">阿里云</el-divider>
        </div>
        <div>
          <h4>(3)垂直分割：</h4>
          <span>雨纷纷</span>
          <el-divider direction="vertical"></el-divider>
          <span>旧故里</span>
          <el-divider direction="vertical"></el-divider>
          <span>草木深</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pl {
  padding-left: 30px;
}
</style>