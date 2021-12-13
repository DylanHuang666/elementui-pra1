<template>
  <div>
    <!-- 图片容器，在保留原生img的特性下，支持懒加载，自定义占位、加载失败等 -->
    <el-card>
      <h3>基础用法</h3>
      <div class="demo-image">
        <div class="block" v-for="fit in fits" :key="fit">
          <div class="demonstration">{{ fit }}</div>
          <el-image style="width: 100px; height: 100px" :src="url" :fit="fit"></el-image>
        </div>
      </div>
    </el-card>

    <el-card>
      <h3>占位内容</h3>
      <!-- 可通过slot = placeholder可自定义占位内容 -->
      <div class="demo-image__placeholder">
        <div class="block">
          <span class="demonstration">默认</span>
          <el-image :src="src"></el-image>
        </div>
        <div class="block">
          <span class="demonstration">自定义</span>
          <el-image :src="src">
            <div slot="placeholder" class="image-slot">
              加载中
              <span class="dot">...</span>
            </div>
          </el-image>
        </div>
      </div>
    </el-card>

    <el-card>
      <h3>加载失败</h3>
      <!-- 可通过slot = error可自定义加载失败内容 -->
      <div class="demo-image__error">
        <div class="block">
          <div class="demonstration">默认</div>
          <el-image></el-image>
        </div>
        <div class="block">
          <div class="demonstration">自定义</div>
          <el-image>
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
    };
  }
};
</script>

<style lang="scss" scoped>
.el-card {
  margin-bottom: 20px;
}
.demo-image {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.demo-image__placeholder,
.demo-image__error {
  display: flex;
  .block {
    margin: 0 50px;
  }
}
.demo-image__error .block {
  .el-image {
    width: 300px;
    height: 200px;
    /deep/.image-slot {
      width: 300px;
      height: 200px;
      background: #F5F7FA;
      display: flex;
      justify-content: center;
      align-items: center;
      i{
        font-size: 30px;
        color: #C0C4CC;
      }
    }
  }
}
</style>