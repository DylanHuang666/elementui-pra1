<template>
  <div>
    <el-steps :active="active" finish-status="finish">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>

    <el-steps :active="active" finish-status="success" simple style="margin-top: 20px">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>

    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },

  methods: {
    next() {
      console.log("前", this.active);
      if (this.active++ > 2) this.active = 0;
      console.log("后", this.active);
    }
  }
};
</script>

<style>
</style>