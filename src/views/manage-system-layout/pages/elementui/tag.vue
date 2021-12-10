<template>
  <div>
    <div class="block">
      <!-- 由type属性来选择tag的类型，也可以通过color属性来自定义背景色。 -->
      <!-- 尺寸：默认的、medium、small、mini，通过设置size属性来配置它们。 -->
      <!-- Tag 组件提供了三个不同的主题：dark、light 和 plain。通过设置effect属性来改变主题，默认为 light -->
      <h3>基础用法：</h3>
      <el-tag>标签一</el-tag>
      <el-tag type="success">标签二</el-tag>
      <el-tag type="info" effect="dark" size="mini">标签三</el-tag>
      <el-tag type="warning">标签四</el-tag>
      <el-tag type="danger">标签五</el-tag>
    </div>

    <div class="block">
      <!-- 动态编辑标签可以通过点击标签关闭按钮后触发的 close 事件来实现 -->
      <!-- closable 可移除 -->      
      <h3>动态编辑标签：</h3>
      <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
      >{{tag}}</el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      ></el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicTags: ["标签一", "标签二", "标签三"],
      inputVisible: false,
      inputValue: ""
    };
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.el-tag {
  margin: 0 10px;
}
.block {
  margin-bottom: 20px;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>