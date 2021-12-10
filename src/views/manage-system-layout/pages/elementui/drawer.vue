<template>
  <!-- direction	Drawer 打开的方向	Direction	rtl / ltr / ttb / btt	rtl -->
  <div>
    <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">点我打开抽屉</el-button>

    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
      <span>我来啦!</span>
    </el-drawer>

    <el-button @click="drawer2 = true" type="primary" style="margin-left: 16px;">点我打开(多层嵌套)</el-button>

    <el-drawer title="我是外面的 Drawer" :visible.sync="drawer2" size="50%">
      <div>
        <el-button @click="innerDrawer = true">打开里面的!</el-button>
        <!-- 如果你需要嵌套多层 Drawer 请一定要设置 append-to-body 属性为 true -->
        <el-drawer
          title="我是里面的"
          :append-to-body="true"
          :before-close="handleClose2"
          :visible.sync="innerDrawer"
        >
          <p>_(:зゝ∠)_</p>
        </el-drawer>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      drawer2: false,
      innerDrawer: false,
      direction: "rtl"
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          // 确定
          done(); //关闭抽屉
        })
        .catch(_ => {
          // 取消或点击其他地方
        });
    },
    handleClose2(done) {
      this.$confirm("还有未保存的工作哦确定关闭吗？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style lang="scss" scoped>
</style>