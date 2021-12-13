<template>
  <div>
    <el-card>
      <!-- 从顶部出现，3 秒后自动消失。 -->
      <el-button :plain="true" @click="open">打开消息提示</el-button>
      <el-button :plain="true" @click="openVn">VNode</el-button>
      <el-button :plain="true" @click="closeHandle">手动关闭message</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      var that = this;
      // this.$message("这是一条消息提示");
      this.$message({
        showClose: true, //可关闭
        center: true, //文字居中
        message: "恭喜你，这是一条成功消息",
        type: "success", //success/warning/info/error
        duration: 3000, // duration	显示时间, 毫秒。设为 0 则不会自动关闭	number	—	3000
        onClose: function(v) {
          //关闭时的回调函数, 参数为被关闭的 message 实例
          console.log("123", v);
          // that.$message.close(); //调用 Message 或 this.$message 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 close 方法。
        },
        offset: 20 //offset	Message 距离窗口顶部的偏移量	number	—	20
      });
      // this.$message.error("错了哦，这是一条错误消息");
      //message 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。因此在 dangerouslyUseHTMLString 打开的情况下，请确保 message 的内容是可信的，永远不要将用户提交的内容赋值给 message 属性。
      // this.$message({
      //   dangerouslyUseHTMLString: true, //将dangerouslyUseHTMLString属性设置为 true，message 就会被当作 HTML 片段处理。
      //   message: "<strong>这是 <i>HTML</i> 片段</strong>"
      // });
    },

    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h("p", null, [
          h("span", null, "内容可以是 "),
          h("i", { style: "color: teal" }, "VNode")
        ])
      });
    },

    closeHandle() {
      this.$message.closeAll(); // 手动关闭所有实例。
    }
  }
};
</script>

<style lang="scss" scoped>
</style>