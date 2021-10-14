<template>
  <div class="filter-item">
    <el-select v-model="filterType" class="filter-select">
      <el-option
        v-for="item in filterArray"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
    <el-select v-model="relationType" class="filter-relation">
      <el-option
        v-for="item in relationArray"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
    <div class="filter-input">
      <el-input placeholder v-model="filterValue"></el-input>
    </div>

    <span class="del" @click="deleteHandle">删除</span>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        filterArray: [
        {
          value: "用户事件编号",
          label: "用户事件编号",
        },
        {
          value: "用户行为时间",
          label: "用户行为时间",
        }
      ],
      relationArray: [
        {
          value: "等于",
          label: "等于",
        },
        {
          value: "不等于",
          label: "不等于",
        }
      ],
      filterType: '',
      relationType: '',
      filterValue: '',
      filterNum: 3
      }
    },
    methods: {
      deleteHandle(){
        this.$emit('filter-delete','dd')
      }
    },
  }
</script>

<style lang="scss" scoped>
.filter-item {
  display: flex;
  align-items: center;
}

.filter-board .filter-select .el-input--suffix .el-input__inner {
  width: 200px;
  height: 30px;
}
.filter-board .filter-relation .el-input--suffix .el-input__inner {
  width: 100px;
  height: 30px;
}
.filter-board .el-select .el-input .el-select__caret {
  line-height: 14px;
}
.filter-board .el-input__suffix {
  top: 0;
}
.filter-input {
  width: 109px;
}
.filter-input .el-input__inner {
  height: 30px;
  font-size: 12px;
}
.filter-item .el-select {
  margin-right: 20px;
  margin-top: 13px;
  margin-bottom: 13px;
}
.del {
  display: inline-block;
  font-size: 12px;
  color: #3196ff;
  margin-left: 30px;
  cursor: pointer;
}
</style>