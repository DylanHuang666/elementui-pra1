<template>
  <div>
    <el-card>
      <el-button type="primary" @click="open">消息提示 Message Box</el-button>
      <el-button type="primary" @click="open2">消息确认 Message Box</el-button>
      <el-button type="primary" @click="open3">提交内容 Message Box</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
        callback: action => {
          //'confirm'/'cancel'/'close'
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    },
    open2() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch((action) => { //'cancel'/'close'
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    open3() {
      this.$prompt("请输入邮箱", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: "邮箱格式不正确"
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "你的邮箱是: " + value
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>