<template>
  <div class="header-bar">
    <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="clickCollapseHandle"></i>
    <!-- <div class="user-box">
      <img src="@/assets/images/user.png" alt />
      <span>Dylan</span>
    </div>-->

    <el-dropdown>
      <div class="user-box">
        <img src="@/assets/images/user.png" alt />
        <span>Dylan</span>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人主页</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
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
      this.isCollapse = !this.isCollapse;
      this.$bus.$emit("changeCollapse", this.isCollapse);
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
  margin-right: 20px;
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