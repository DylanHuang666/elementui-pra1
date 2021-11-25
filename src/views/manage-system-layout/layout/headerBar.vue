<template>
  <div class="header-bar">
    <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="clickCollapseHandle"></i>
    <!-- <div class="user-box">
      <img src="@/assets/images/user.png" alt />
      <span>Dylan</span>
    </div>-->

    <el-dropdown @command="handleCommand">
      <div class="user-box">
        <img src="@/assets/images/user.png" alt />
        <span>Dylan</span>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">个人主页</el-dropdown-item>
        <el-dropdown-item command="b">退出登录</el-dropdown-item>
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
    },
    handleCommand(command) {
      // console.log('command',command)
      if(command == 'a'){
        this.$router.push('/manage-system-layout/manage/userManage/personal')
      }else{
        this.$router.push('/login')
      }
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