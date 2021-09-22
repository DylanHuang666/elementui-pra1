<template>
  <div>
    Radio 单选框
    <div>
      <el-radio v-model="radio" label="1" disabled border>备选项1</el-radio>
      <el-radio v-model="radio" label="2" border>备选项2</el-radio>
      <el-radio v-model="radio" label="3" border>备选项3</el-radio>
    </div>

    <div>
      <el-radio-group v-model="radio2" @change="change1">
        <el-radio :label="1">备选项1</el-radio>
        <el-radio :label="2">备选项2</el-radio>
        <el-radio :label="3">备选项3</el-radio>
      </el-radio-group>
    </div>

    <div>
      <el-radio-group v-model="radio3" @change="change1" size="mini">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>

    Checkbox 多选框
    <div>
      <el-checkbox v-model="checked1">备选项1</el-checkbox>
      <el-checkbox v-model="checked2">备选项2</el-checkbox>
    </div>
    <div>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="复选框 A"></el-checkbox>
        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
        <el-checkbox label="禁用" disabled></el-checkbox>
        <el-checkbox label="选中且禁用" disabled></el-checkbox>
      </el-checkbox-group>
    </div>
    <div style="margin: 15px 0;"></div>
    <div>
      <el-checkbox
        :indeterminate="isIndeterminate"
        v-model="checkAll"
        @change="handleCheckAllChange"
        >全选</el-checkbox
      >
      <el-checkbox-group
        v-model="checkedCities"
        @change="handleCheckedCitiesChange"
      >
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{
          city
        }}</el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  data() {
    return {
      radio: "2",
      radio2: "1",
      radio3: "北京",
      checked1: false,
      checked2: true,
      checkList: ["选中且禁用", "复选框 C", "复选框 A"],
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,
    };
  },
  methods: {
    change1(v) {
      //v: 选中label值
      console.log("change1", v,this.radio3);
    },
    handleCheckAllChange(val) {
      // val: 布尔值是否全选
      console.log('handleCheckAllChange',val,this.checkAll)
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
  },
};
</script>

<style>
</style>