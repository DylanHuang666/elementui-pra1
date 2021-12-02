<template>
<!-- 标题组件 -->
  <div class="title">
    <div class="title-box" ref="a">
      <span>{{options.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: function() {
        return {
          title: "标题",
          leftColor: "red",
          leftWith: "10",
          fontSize: "16",
          space: "20"
        };
      }
    }
  },
  mounted() {
    console.log("el", this.$refs.a.children);
    const el = this.$refs.a
    const span1 = this.$refs.a.children[0]
    el.style.borderLeft = `${this.options.leftWith}px solid ${this.options.leftColor}`
    span1.style.fontSize = `${this.options.fontSize}px`
    span1.style.marginLeft = `${this.options.space}px`
  }
};
</script>

<style lang="scss" scoped>
.title {
  display: inline-block;
  &-box {
    // border-left: 10px solid rgb(13, 130, 240);
    span {
      font-size: 18px;
      margin-left: 20px;
    }
  }
}
</style>