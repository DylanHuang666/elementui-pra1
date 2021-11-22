<template>
  <div>
    <div>
      <el-input v-model="input" placeholder="请输入内容" clearable></el-input>
    </div>
    <div>
      <el-input placeholder="请输入密码" v-model="input2" show-password></el-input>
    </div>
    <div>
      <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input"></el-input>
    </div>
    <div>
      <el-input type="textarea" :rows="6" placeholder="请输入内容" v-model="textarea"></el-input>
    </div>
    <div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4 }"
        placeholder="请输入内容"
        v-model="textarea2"
      ></el-input>
    </div>
    <div style="width:200px">
      <el-input maxlength="30" show-word-limit autosize type="textarea" placeholder="请输入内容" v-model="textarea2"></el-input>
    </div>
    <div style="width:200px">
      <el-input maxlength="30" show-word-limit autosize type="textarea" placeholder="请输入内容" v-model="textarea3" disabled></el-input>
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
      textarea3: "哈哈哈哈哈哈哈或或或或或或或或吼吼吼哈哈哈哈哈哈哈或或或或或或或或哈哈哈哈哈哈哈或或或或或或或或"
    };
  }
};
</script>

<style>
</style>