<template>
  <div>
    <div class="menu">
      <div class="menu-item" key="a">
        <h3 @click="clicktitleHandle(1)">标题1</h3>
        <transition name="fade">
          <div v-show="isClick == 1">内容1111111</div>
        </transition>
      </div>

      <div class="menu-item" key="b">
        <h3 @click="clicktitleHandle(2)">标题2</h3>
        <transition name="fade">
          <div v-show="isClick == 2">内容222222</div>
        </transition>
      </div>
      <div class="menu-item" key="c">
        <h3 @click="clicktitleHandle(3)">标题3</h3>
        <transition name="fade">
          <div v-show="isClick == 3">内容333333</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow1: false,
      isShow2: false,
      isShow3: false,
      isClick: 1
    };
  },
  methods: {
    clicktitleHandle(n) {
      // this[`isShow${n}`] = !this[`isShow${n}`];
      this.isClick = n
    }
  }
};
</script>

<style lang="scss" scoped>
h3{
  margin: 0;
}
.menu {
  border: 1px solid #888888;
  width: 500px;
  .menu-item {
    > h3 {
      cursor: pointer;
    }
    > div{
      // background: #555;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: height 1s ease;
}

.fade-enter,
.fade-leave-to {
  // opacity: 0;
  // transform: translateY(-100%);
  height: 0px;
  overflow: hidden;
}
</style>