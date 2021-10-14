<template>
  <div>
    <el-button @click="handleAlert">alert</el-button>
    <el-button @click="handleMessage">message消息提示</el-button>
    <el-button @click="handleNotification">Notification通知</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleAlert() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    },
    handleMessage() {
      this.$message({
        message: "恭喜你，这是一条成功消息",
        type: "success",
        showClose: true,
        center: true
        // duration: 0
      });
    },
    handleNotification() {
      this.$notify({
        title: "提示",
        message: "这是一条消息"
        // duration: 0
      });
    }
  }
};
</script>

<style>
</style>