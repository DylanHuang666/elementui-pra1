<template>
  <div class="header-bar">
    <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="clickCollapseHandle"></i>
    <div class="user-box">
      <img src="@/assets/images/user.png" alt />
      <span>Dylan</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    clickCollapseHandle() {
      this.isCollapse = !this.isCollapse
      this.$bus.$emit('changeCollapse',this.isCollapse)
    }
  }
};
</script>

<style lang="scss" scoped>
.header-bar {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  i {
    font-size: 24px;
    cursor: pointer;
  }
  .user-box {
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      width: 30px;
      border-radius: 50%;
    }
    span {
      margin-left: 8px;
    }
  }
}
</style>