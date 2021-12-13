<template>
  <div>
    <el-card>
      <el-button plain @click="open1">vnode</el-button>
      <el-button plain @click="open2">消息弹出</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  methods: {
    open1() {
      const h = this.$createElement;

      this.$notify({
        title: "标题名称",
        message: h(
          "i",
          { style: "color: teal" },
          "这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案"
        )
      });
    },

    open2() {
      // 配置选项跟message一样
      this.$notify({
        title: "提示",
        message: "这是一条消息",
        duration: 3000,
        type: "warning",
        position: 'bottom-right', //top-right、top-left、bottom-right、bottom-left，默认为top-right。
        // offset: 100, //偏移
        // showClose: true
      });

      // this.$notify.error({
      //   title: "错误",
      //   message: "这是一条错误的提示消息"
      // });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>