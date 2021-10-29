<template>
  <div class="demo">
    <div class="container">
      <div class="menu">
        <div class="menu1">
          <div @mouseenter="mouseenterHandle" @mouseleave="mousemoveHandle1">
            <p>菜单1</p>
            <p>菜单1</p>
            <p>菜单1</p>
          </div>
        </div>
        <div :class="menu2Show ? 'menu2 show2' : 'menu2'" @mouseenter="mouseenterHandle" @mouseleave="mousemoveHandle1">
          <p>菜单2</p>
          <p>菜单2</p>
          <p>菜单2</p>
        </div>
      </div>
      <div class="block">
        <el-carousel trigger="click" height="300px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu2Show: false
    };
  },
  methods: {
    mouseenterHandle() {
      this.menu2Show = true;
    },
    mousemoveHandle1() {
      console.log(222);
      this.menu2Show = false;
    }
    // menumouseenterHandle(){
    //   console.log(111)
    //   this.menu2Show = true
    // }
  }
};
</script>

<style>
.demo {
  display: flex;
  justify-content: center;
  height: 100vh;
}
.menu {
  background: red;
  width: 200px;
  height: 300px;
  display: flex;
  position: relative;
}
.container {
  margin: 0 auto;
  display: flex;
}
.block {
  width: 700px;
  /* height: 300px; */
}
.el-carousel__container {
  /* height: 300px; */
}
.menu1 {
  width: 200px;
  /* height: 300px; */
}

.menu2 {
  width: 200px;
  height: 300px;
  position: absolute;
  left: 200px;
  background: burlywood;
  z-index: 999;
  display: none;
}
.menu2.show2 {
  display: block;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>