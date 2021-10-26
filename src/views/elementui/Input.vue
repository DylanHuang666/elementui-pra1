<template>
  <div>
    <div>
      <el-input v-model="input" placeholder="请输入内容" clearable></el-input>
    </div>
    <div>
      <el-input
        placeholder="请输入密码"
        v-model="input2"
        show-password
      ></el-input>
    </div>
    <div>
      <el-input
        placeholder="请选择日期"
        suffix-icon="el-icon-date"
        v-model="input"
      >
      </el-input>
    </div>
    <div>
      <el-input
        type="textarea"
        :rows="6"
        placeholder="请输入内容"
        v-model="textarea"
      >
      </el-input>
    </div>
    <div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4 }"
        placeholder="请输入内容"
        v-model="textarea2"
      >
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      input2: "",
      textarea: "",
      textarea2: "",
    };
  },
};
</script>

<style>
</style>