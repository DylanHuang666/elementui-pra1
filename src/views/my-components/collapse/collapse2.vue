<template>
  <div class="menu">
    <div class="menu-item" key="a">
      <h3 @click="clicktitleHandle(1)">标题1</h3>
      <div :class="isShow1 ? 'a' : ''" ref="div1">内容1111111哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
    </div>
    <div class="menu-item" key="b">
      <h3 @click="clicktitleHandle(2)">标题2</h3>
      <div :class="isShow2 ? 'a' : ''" ref="div2">内容222222</div>
    </div>
    <div class="menu-item" key="c">
      <h3 @click="clicktitleHandle(3)">标题3</h3>
      <div :class="isShow3 ? 'a' : ''" ref="div3">内容333333</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClick: 1, //当前点击项
      isShow1: true, //默认展开
      isShow2: false,//默认关闭
      isShow3: false//默认关闭
    };
  },
  methods: {
    clicktitleHandle(n) {
      // console.log('this.isClick != n',this.isClick,n,this.isClick != n,this[`isShow${this.isClick}`])

      /* 手风琴效果加上这条判断，不要就去掉 */
      if (this.isClick != n) {
        if (this[`isShow${this.isClick}`]) {
          const el = this.$refs[`div${this.isClick}`];
          // console.log("el", this.$refs, el);
          var height = el.offsetHeight;
          el.style.height = "auto";
          height = el.offsetHeight;
          el.style.height = height + "px";
          var f = document.body.offsetHeight;
          el.style.height = "0px";
          this[`isShow${this.isClick}`] = !this[`isShow${this.isClick}`];
        }
      }
      /* 手风琴效果加上这条判断，不要就去掉 */


      this.isClick = n
      this[`isShow${n}`] = !this[`isShow${n}`];
      const el = this.$refs[`div${n}`];
      // console.log("el", this.$refs, el);
      var height = el.offsetHeight;
      if (this[`isShow${n}`]) {
        el.style.transition = "none";
        el.style.height = "auto";
        height = el.offsetHeight;
        el.style.transition = "height 0.3s";
        el.style.height = "0px";
        var f = document.body.offsetHeight; // 必加 ???触发浏览器重排,否则没有展开动画
        el.style.height = height + "px";
      } else {
        el.style.height = "auto";
        height = el.offsetHeight;
        el.style.height = height + "px";
        var f = document.body.offsetHeight;
        el.style.height = "0px";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
h3 {
  margin: 0;
  background: white;
}
.menu {
  border: 1px solid #888888;
  width: 200px;
  // transition: all linear 3s;
  .menu-item {
    // transition: all linear 1s;
    > h3 {
      cursor: pointer;
    }
    > div {
      font-size: 14px;
      background: #cccccc;
      height: 0;
      overflow: hidden;
      transition: height 0.3s;
    }
    > div.a {
      // height: 20px;
      height: auto;
      overflow: none; //auto会有滚动条;initial,inherit展开是会有重叠
    }
  }
}
// .a {
//   height: 0px;
//   overflow: hidden;
//   // position: absolute;
// }
</style>