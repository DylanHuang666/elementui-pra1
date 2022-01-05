<template>
  <div>
    <el-card>
      <!-- show-password
          clearable
          disabled
          size
      -->
      <el-input v-model="input" placeholder="请输入内容" clearable></el-input>
    </el-card>
    <el-card>
      <div class="demo-input-suffix">
        属性方式：
        <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input1"></el-input>
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2"></el-input>
      </div>
      <div class="demo-input-suffix" style="margin-top:10px;">
        slot 方式：
        <el-input placeholder="请选择日期" v-model="input3">
          <i slot="suffix" class="el-input__icon el-icon-date"></i>
        </el-input>
        <el-input placeholder="请输入内容" v-model="input4">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </el-card>
    <el-card>
      <!-- 文本域高度可通过 rows 属性控制 
      通过设置 autosize 属性可以使得文本域的高度能够根据文本内容自动进行调整，
      并且 autosize 还可以设定为一个对象，指定最小行数和最大行数。
      maxlength="30"
      show-word-limit 
      -->
      <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>

      <h3>高度自适应</h3>
      <el-input
        type="textarea"
        autosize
        placeholder="请输入内容"
        v-model="textarea1"
        maxlength="30"
        show-word-limit
      ></el-input>
      <div style="margin: 20px 0;"></div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入内容"
        v-model="textarea2"
      ></el-input>
    </el-card>
    <el-card>
      <div>
        <el-input placeholder="请输入内容" v-model="input5">
          <template slot="prepend">Http://</template>
        </el-input>
      </div>
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" v-model="input6">
          <template slot="append">.com</template>
        </el-input>
      </div>
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" v-model="input7" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      textarea: "",
      textarea1: "",
      textarea2: "",
      input5: "",
      input6: "",
      input7: "",
      select: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.el-card {
  margin-bottom: 20px;
}
.el-input {
  width: 300px;
}
.el-textarea {
  width: 300px;
}
</style>