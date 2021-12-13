<template>
  <div>
    <el-card>
      <!-- 通过 shape 和 size 设置头像的形状和大小。num/str -->
      <h3>基本用法</h3>
      <el-row class="demo-avatar demo-basic">
        <el-col :span="12">
          <div class="sub-title">circle</div>
          <div class="demo-basic--circle">
            <div class="block">
              <el-avatar :size="50" :src="circleUrl"></el-avatar>
            </div>
            <div class="block" v-for="size in sizeList" :key="size">
              <el-avatar :size="size" :src="circleUrl"></el-avatar>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="sub-title">square</div>
          <div class="demo-basic--circle">
            <div class="block">
              <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
            </div>
            <div class="block" v-for="size in sizeList" :key="size">
              <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <!-- 支持三种类型：图标、图片和字符 -->
      <h3>展示类型</h3>
      <div class="demo-type">
        <div>
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
        <div>
          <el-avatar>user</el-avatar>
        </div>
      </div>
    </el-card>
    <el-card>
      <h3>图片加载失败的 fallback 行为</h3>
      <div>
        <el-avatar :size="60" src="https://empty" @error="errorHandler">
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
        </el-avatar>
      </div>
    </el-card>
    <el-card>
      <h3>图片如何适应容器框</h3>
      <!-- 当展示类型为图片的时候，使用 fit 属性定义图片如何适应容器框，同原生 object-fit。 -->
      <div class="obox">
        <div>
          <div>原图片尺寸比例</div>
          <img :src="url" alt />
        </div>

        <div>
          <div>100x100</div>
          <img :src="url" alt />
        </div>
      </div>

      <div class="demo-fit">
        <div v-for="fit in fits" :key="fit">
          <div class="title">{{ fit }}</div>
          <el-avatar shape="square" :size="100" :fit="fit" :src="url"></el-avatar>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["large", "medium", "small"],
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    };
  },
  methods: {
    errorHandler() {
      console.log("error"); //并不打印，也就是说图片类头像加载失败并不是执行该函数
      return true; //图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为
    }
  }
};
</script>

<style lang="scss" scoped>
.demo-basic--circle {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.block {
  margin-right: 20px;
}
.el-card {
  margin-bottom: 10px;
}
.demo-type,
.demo-fit {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.title {
  text-align: center;
}
img {
  width: 100px;
}
.obox{
  display: flex;
  align-items: center;
  &>div{
    margin-right: 30px;
  }
  &>div:nth-child(2){
    img{
      width: 100px;
      height: 100px;
    }
  }
}
</style>