<template>
  <div>
    <div class="block">
      <span class="demonstration">默认不区分颜色</span>
      <el-rate v-model="value1"></el-rate>
    </div>
    <div class="block">
      <span class="demonstration">区分颜色</span>
      <el-rate v-model="value2" :colors="colors"></el-rate>
    </div>
    <div class="block">
      <span class="demonstration">辅助文字</span>
      <el-rate v-model="value3" show-text @change="changeHandle"></el-rate>
    </div>
    <div class="block">
      <span class="demonstration">其它 icon</span>
      <el-rate
        v-model="value4"
        :icon-classes="iconClasses"
        void-icon-class="el-icon-s-grid"
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
      ></el-rate>
    </div>
    <div class="block">
      <span class="demonstration">只读</span>
      <el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: null,
      value2: null,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      value3: null,
      // textsArr:[1,2,3,4,5],
      value4: null,
      iconClasses: ["el-icon-picture", "el-icon-s-data", "el-icon-reading"], // 等同于 { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
      value5: 3.5
    };
  },
  methods: {
    changeHandle(val) {
      console.log(val, this.value);
    }
  }
};
</script>

<style>
.block{
  margin-bottom: 20px;
}
</style>