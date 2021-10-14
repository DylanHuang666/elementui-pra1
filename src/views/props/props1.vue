<template>
  <div>
    <!-- <el-select v-model="value" placeholder="请选择" @change="changeHandle">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select> -->
    <div @click="changeHandle2">按钮</div>
  </div>
</template>

<script>
export default {
  props:['b'],
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },
  methods: {
    changeHandle() {
      // this.b.aaa = 3
      this.$emit('myselect')
    },
    changeHandle2() {
      this.b[0] = {s:1}
      this.$emit('myselect')
    }
  }
};
</script>

<style>
</style>