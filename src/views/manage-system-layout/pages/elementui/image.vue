<template>
  <div>
    <!-- 图片容器，在保留原生img的特性下，支持懒加载，自定义占位、加载失败等 -->
    <!-- 
      fill: 缩放（不按图片比例）到填充整个父级元素
      contain：按图片比例缩放，直到整体都在父级元素中，并居中呈现 
      cover：缩放（按图片比例）到填充整个父级元素，并居中呈现 
      none：不缩放，居中呈现 
      scale-down：按图片比例缩放，直到整体都在父级元素中，并居中呈现
      -->
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

    <el-card>
      <h3>懒加载</h3>
      <!-- 可通过lazy开启懒加载功能，当图片滚动到可视范围内才会加载。可通过scroll-container来设置滚动容器，
      若未定义，则为最近一个overflow值为auto或scroll的父元素。-->
      <!-- ？？？没有效果，给父级.demo-image__lazy加了overflow:auto;后就没有图片了（dom没有生成image元素），并且也没有懒加载效果？？？ -->
      <div class="lazy">
        <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
      </div>
    </el-card>

    <el-card>
      <!-- preview-src-list 大图预览图片列表-->
      <h3>大图预览</h3>
      <div class="demo-image__preview">
        <el-image style="width: 100px; height: 100px" :src="url" :preview-src-list="urls"></el-image>
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
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      urls: [
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
        "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
      ]
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
      background: #f5f7fa;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 30px;
        color: #c0c4cc;
      }
    }
  }
}
.lazy {
  width: 800px;
  height: 200px;
  overflow: auto;
}
</style>