<template>
  <!-- 组件化
  属性传值：
  1.menudata
  2.默认展开项
  3.是否手风琴效果
  4.折叠速度可控（秒） （速度不是很快时折叠时会有抖动,怎么解决呢？）
  -->
  <div class="menu">
    <div class="menu-item" v-for="(item,index) in menuData" :key="index">
      <h3 @click="clicktitleHandle(index+1)">{{item.title}}</h3>
      <div :class="options[`isShow${index+1}`] ? 'a' : ''" :ref="`div${index+1}`">{{item.content}}</div>
    </div>
    <!-- <div class="menu-item">
      <h3 @click="clicktitleHandle(2)">标题2</h3>
      <div :class="isShow2 ? 'a' : ''" ref="div2">内容222222哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
    </div>
    <div class="menu-item">
      <h3 @click="clicktitleHandle(3)">标题3</h3>
      <div :class="isShow3 ? 'a' : ''" ref="div3">内容333333哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        // isClick: 1, //当前点击项
        // isShow1: true, //默认展开
        // isShow2: false,//默认关闭
        // isShow3: false//默认关闭
      }
    };
  },
  props: {
    menuData: {
      type: Array,
      default: []
    },
    accordion: {
      type: Boolean,
      default: false
    },
    speed:{
      type:Number,
      default:0.3
    }
  },
  created() {
    // console.log(this);
    let isClickIndex = 0
    this.menuData.forEach((item, index) => {
      if (item.defaultOpen) {
        this.$set(this.options, `isShow${index + 1}`, true);
        // this.$set(this.options, `isClick`, index + 1);
        isClickIndex = index + 1
      } else {
        this.$set(this.options, `isShow${index + 1}`, false);
        // this.$set(this.options, `isClick`, 0);
      }
    });
    this.$set(this.options, `isClick`, isClickIndex);
  },
  methods: {
    clicktitleHandle(n) {
      // console.log('this.isClick != n',this.isClick,n,this.isClick != n,this[`isShow${this.isClick}`])
      // console.log(this.accordion,this.options.isClick,this.options.isClick != n,this.options[`isShow${this.options.isClick}`])
      /* 手风琴效果加上这条判断，不要就去掉 */
      if (this.accordion) {
        if (this.options.isClick) {
          if (this.options.isClick != n) {
            if (this.options[`isShow${this.options.isClick}`]) {
              const el = this.$refs[`div${this.options.isClick}`][0];
              // console.log("el", this.$refs, el);
              var height = el.offsetHeight;
              el.style.height = "auto";
              height = el.offsetHeight;
              el.style.transition = `height ${this.speed}s`;
              el.style.height = height + "px";
              var f = document.body.offsetHeight;
              el.style.height = "0px";
              this.options[`isShow${this.options.isClick}`] = !this.options[
                `isShow${this.options.isClick}`
              ];
            }
          }
        }
      }
      /* 手风琴效果加上这条判断，不要就去掉 */

      this.options.isClick = n;
      this.options[`isShow${n}`] = !this.options[`isShow${n}`];
      const el = this.$refs[`div${n}`][0];
      // console.log("el", this.$refs, el);
      var height = el.offsetHeight;
      if (this.options[`isShow${n}`]) {
        el.style.transition = "none";
        el.style.height = "auto";
        height = el.offsetHeight;
        el.style.transition = `height ${this.speed}s`;
        el.style.height = "0px";
        var f = document.body.offsetHeight; // 必加 ???触发浏览器重排,否则没有展开动画
        el.style.height = height + "px";
      } else {
        console.log('el222',el)
        el.style.height = "auto";
        height = el.offsetHeight;
        el.style.transition = `height ${this.speed}s`;
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
      // transition: height 0.3s;
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