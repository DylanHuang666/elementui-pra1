<template>
  <div>
    <!-- 参数	说明	类型	可选值	默认值
        height	走马灯的高度	string	—	—
        initial-index	初始状态激活的幻灯片的索引，从 0 开始	number	—	0
        trigger	指示器的触发方式	string	click	—
        autoplay	是否自动切换	boolean	—	true
        interval	自动切换的时间间隔，单位为毫秒	number	—	3000
        indicator-position	指示器的位置	string	outside/none	—
        arrow	切换箭头的显示时机	string	always/hover/never	hover
        type	走马灯的类型	string	card	—
        loop	是否循环显示	boolean	-	true
    direction	走马灯展示的方向	string	horizontal/vertical	horizontal-->
    <el-card>
      <!-- trigger: hover/click 
      height: 默认300
      -->
      <!-- 结合使用el-carousel和el-carousel-item标签就得到了一个走马灯。幻灯片的内容是任意的，
      需要放在el-carousel-item标签中。默认情况下，在鼠标 hover 底部的指示器时就会触发切换。
      通过设置trigger属性为click，可以达到点击触发的效果。-->
      <!-- 当图片过多时，指示器太多超过指示器容器最大宽度时会换行 -->
      <h3>基础用法</h3>
      <div class="container">
        <div class="block">
          <span class="demonstration">默认 Hover 指示器触发</span>
          <el-carousel height="250px">
            <el-carousel-item v-for="item in urls" :key="item">
              <el-image style="width:100%; height: 100%;" :src="item" fit="cover"></el-image>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="block">
          <span class="demonstration">Click 指示器触发</span>
          <el-carousel trigger="click" height="250px">
            <el-carousel-item v-for="(item,index) in urls" :key="item" :label="index + 1">
              <el-image style="width:100%; height: 100%;" :src="item" fit="cover"></el-image>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </el-card>
    <el-card>
      <!-- 
        1.indicator-position属性定义了指示器的位置。默认情况下，它会显示在走马灯内部，
        设置为outside则会显示在外部；设置为none则不会显示指示器。 
        2.arrow属性定义了切换箭头的显示时机。默认情况下，切换箭头只有在鼠标 hover 到走马灯上时才会显示；
        若将arrow设置为always，则会一直显示；设置为never，则会一直隐藏。
        3.将type属性设置为card即可启用卡片模式。从交互上来说，卡片模式和一般模式的最大区别在于，
        可以通过直接点击两侧的幻灯片进行切换。
        4.autoplay: 默认true
      -->
      <h3>指示器: 可以将指示器的显示位置设置在容器外部</h3>
      <el-carousel indicator-position="outside" arrow="always" type="card">
        <el-carousel-item v-for="item in urls" :key="item">
          <el-image style="width:100%; height: 100%;" :src="item" fit="cover"></el-image>
        </el-carousel-item>
      </el-carousel>
    </el-card>
    <el-card>
      <h3>竖直方向</h3>
      <el-button @click="clickHandle">手动切换指定图片</el-button>
      <el-button @click="clickHandle2">手动切换上一张图片</el-button>
      <el-button @click="clickHandle3">手动切换下一张图片</el-button>
      <el-carousel direction="vertical" :autoplay="false" @change="changeHandle" ref="a">
        <el-carousel-item v-for="item in urls" :key="item">
          <el-image style="width:100%; height: 100%;" :src="item" fit="cover"></el-image>
        </el-carousel-item>
      </el-carousel>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urls: [
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg"
      ]
    };
  },
  mounted() {
    console.log("mounted", this.$refs);
    //mounted时直接this.$refs.a.setActiveItem(2)没效果，要等它数据更新完再调用才行
    // 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
    //注意 mounted 不会保证所有的子组件也都被挂载完成。如果你希望等到整个视图都渲染完毕再执行某些操作，
    // 可以在 mounted 内部使用 vm.$nextTick：
    this.$nextTick(() => {
      this.$refs.a.setActiveItem(3);
    });
  },
  methods: {
    changeHandle(v) {
      console.log("123", v); //索引 0 1 2 3...
    },
    clickHandle() {
      this.$refs.a.setActiveItem(2);
    },
    clickHandle2() {
      this.$refs.a.prev();
    },
    clickHandle3() {
      this.$refs.a.next();
    }
  }
};
</script>

<style lang="scss" scoped>
.el-card {
  margin-bottom: 30px;
}
.container {
  display: flex;
  .block {
    flex: 1;
  }
  .block:first-child {
    margin-right: 30px;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  // line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>