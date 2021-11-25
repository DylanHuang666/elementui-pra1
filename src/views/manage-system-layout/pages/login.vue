<template>
  <div class="login">
    <div class="login-box">
      <div class="title">登录：</div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        label-position="right"
      >
        <el-form-item label="" prop="userName">
          <!-- <i class="el-icon-user"></i> -->
          <el-input v-model="ruleForm.userName" autocomplete="off" placeholder="用户名">
            <template slot="prepend"><i class="el-icon-user"></i></template>
          </el-input>
        </el-form-item>
        <el-form-item label="" prop="pass">
          <!-- <i class="el-icon-lock"></i> -->
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off" show-password placeholder="密码">
            <template slot="prepend"><i class="el-icon-lock"></i></template>
          </el-input>
        </el-form-item>
        <el-form-item label="" prop="checkPass">
          <!-- <i class="el-icon-lock"></i> -->
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" show-password placeholder="确认密码">
            <template slot="prepend"><i class="el-icon-key"></i></template>
          </el-input>
        </el-form-item>
        <div class="btn-box">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var checkUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }else{
        callback();
      }
      // setTimeout(() => {
      //   if (!Number.isInteger(value)) {
      //     callback(new Error("请输入数字值"));
      //   } else {
      //     if (value < 18) {
      //       callback(new Error("必须年满18岁"));
      //     } else {
      //       callback();
      //     }
      //   }
      // }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        userName: "",
        pass: "",
        checkPass: ""
      },
      rules: {
        userName: [{ validator: checkUserName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  created(){
    console.log('this.$router',this.$router)
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        console.log('valid',valid)
        if (valid) {
          this.$router.push({
            path: '/manage-system-layout',
            // query: {
            //   a:1
            // }
          })
          // this.$router.push({
          //   name: 'manage-system-layout'
          // })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      //对该表单项进行重置，将其值重置为初始值并移除校验结果
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom,#125777, #13598f);
  &-box {
    width: 320px;
    // height: 200px;
    border-radius: 3px;
    // margin-bottom: 100px;
    box-shadow: 0px 0px 2px 2px #dddddd;
    padding: 20px;
    background: white;
    .title{
      // text-align: center;
      font-size: 18px;
      margin-left: 2px;
      margin-bottom: 10px;
    }
    /deep/.el-form-item__content{
      margin-left: 0 !important;
    }
    /deep/.el-form-item__error{
      left: 55px;
    }
    .btn-box{
      display: flex;
      justify-content: center;
    }
  }
}
</style>