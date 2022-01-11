<template>
  <div class="login">
    <transition name="fade">
      <div class="login-box" v-if="pageType == 1" key="login">
        <div class="title">登录：</div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          label-position="right"
        >
          <el-form-item label prop="userName" class="my-err-msg">
            <!-- <i class="el-icon-user"></i> -->
            <el-input v-model="ruleForm.userName" autocomplete="off" placeholder="用户名">
              <template slot="prepend">
                <i class="el-icon-user"></i>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label prop="pass0" class="my-err-msg">
            <!-- <i class="el-icon-lock"></i> -->
            <el-input
              type="password"
              v-model="ruleForm.pass0"
              autocomplete="off"
              show-password
              placeholder="密码"
            >
              <template slot="prepend">
                <i class="el-icon-lock"></i>
              </template>
            </el-input>
          </el-form-item>
          <!-- <el-form-item label prop="checkPass" class="my-err-msg">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
            show-password
            placeholder="确认密码"
          >
            <template slot="prepend">
              <i class="el-icon-key"></i>
            </template>
          </el-input>
          </el-form-item>-->

          <el-form-item label prop="checkCode">
            <div class="code">
              <el-input v-model="ruleForm.checkCode" autocomplete="off" placeholder="请输入验证码"></el-input>
              <identify :identifyCode="identifyCode" @click.native="refreshCode" />
            </div>
          </el-form-item>

          <div style="margin-bottom: 10px;">
            <el-checkbox v-model="isRememberPsw" @change="rememberChangeHandle">记住密码</el-checkbox>
          </div>

          <div class="register-psw-btn-box">
            <el-button type="text" @click="toRegisterPage">去注册</el-button>
            <el-button type="text" @click="toForgetPswPage">忘记密码</el-button>
          </div>

          <div class="btn-box">
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </div>
        </el-form>
      </div>

      <div class="register-box" v-else-if="pageType == 2" key="register">
        <div class="title">注册：</div>
        <el-form
          :model="ruleForm2"
          :rules="rules"
          ref="ruleForm2"
          label-width="100px"
          class="demo-ruleForm"
          label-position="right"
        >
          <el-form-item label prop="phone" class="my-err-msg">
            <!-- <i class="el-icon-user"></i> -->
            <el-input v-model="ruleForm2.phone" autocomplete="off" placeholder="手机号">
              <template slot="prepend">
                <i class="el-icon-mobile-phone"></i>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label prop="userName" class="my-err-msg">
            <!-- <i class="el-icon-user"></i> -->
            <el-input v-model="ruleForm2.userName" autocomplete="off" placeholder="用户名">
              <template slot="prepend">
                <i class="el-icon-user"></i>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label prop="pass" class="my-err-msg">
            <!-- <i class="el-icon-lock"></i> -->
            <el-input
              type="password"
              v-model="ruleForm2.pass"
              autocomplete="off"
              show-password
              placeholder="密码"
            >
              <template slot="prepend">
                <i class="el-icon-lock"></i>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label prop="checkPass" class="my-err-msg">
            <!-- <i class="el-icon-lock"></i> -->
            <el-input
              type="password"
              v-model="ruleForm2.checkPass"
              autocomplete="off"
              show-password
              placeholder="确认密码"
            >
              <template slot="prepend">
                <i class="el-icon-key"></i>
              </template>
            </el-input>
          </el-form-item>

          <!-- <el-form-item label prop="checkCode">
          <div class="code">
            <el-input v-model="ruleForm.checkCode" autocomplete="off" placeholder="请输入验证码"></el-input>
            <identify :identifyCode="identifyCode" @click.native="refreshCode" />
          </div>
          </el-form-item>-->

          <el-button type="text" @click="toLoginPage">去登录</el-button>

          <div class="btn-box">
            <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </div>
        </el-form>
      </div>

      <div class="forget-psw-box" v-else key="forget">
        <div class="title">找回密码：</div>
        <el-form
          :model="ruleForm3"
          :rules="rules"
          ref="ruleForm3"
          label-width="100px"
          class="demo-ruleForm"
          label-position="right"
        >
          <el-form-item label prop="phone" class="my-err-msg">
            <el-input v-model="ruleForm3.phone" autocomplete="off" placeholder="手机号">
              <template slot="prepend">
                <i class="el-icon-mobile-phone"></i>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item label prop="phoneCode" class="my-err-msg">
            <el-input v-model="ruleForm3.phoneCode" autocomplete="off" placeholder="手机短信验证码">
              <template slot="prepend">
                <i class="el-icon-message"></i>
              </template>
            </el-input>
          </el-form-item>

          <el-button type="text" @click="toLoginPage">去登录</el-button>

          <div class="btn-box">
            <el-button type="primary" @click="submitForm('ruleForm3')">提交</el-button>
            <el-button @click="resetForm('ruleForm3')">重置</el-button>
          </div>
        </el-form>
      </div>
    </transition>
  </div>
</template>

<script>
import identify from "../components/identify"; //图形验证码组件
// 引入
const Base64 = require("js-base64").Base64;
export default {
  components: {
    identify
  },
  data() {
    var checkUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else {
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
    var validatePass0 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    const validateCode = (rule, value, callback) => {
      if (this.identifyCode.toLocaleLowerCase() !== value.toLocaleLowerCase()) {
        this.ruleForm.code = "";
        this.refreshCode();
        callback(new Error("请输入正确的验证码"));
      } else {
        callback();
      }
    };
    const validatePhone = (rule, value, callback) => {
      //手机号码的校验
      const phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      let isPhone = phoneReg.test(value);

      if (value === "") {
        callback(new Error("请输入手机号码"));
      } else if (!isPhone) {
        callback(new Error("请输入正确手机号码"));
      } else {
        callback();
      }
    };
    const validatePhoneCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机短信验证码"));
      } else {
        callback();
      }
    };
    return {
      pageType: 1, //1登录 2注册 3忘记密码
      isRememberPsw: false, //是否记住密码
      ruleForm: {
        //登录
        userName: "",
        pass0: "",
        checkCode: ""
      },
      ruleForm2: {
        //注册
        phone: "",
        userName: "",
        pass: "",
        checkPass: ""
      },
      ruleForm3: {
        //找回密码
        phone: "",
        phoneCode: ""
      },
      rules: {
        userName: [{ validator: checkUserName, trigger: "change" }],
        pass0: [{ validator: validatePass0, trigger: "change" }],
        pass: [{ validator: validatePass, trigger: "change" }],
        checkPass: [{ validator: validatePass2, trigger: "change" }],
        checkCode: [{ validator: validateCode, trigger: "blur" }],
        phone: [{ validator: validatePhone, trigger: "blur" }],
        phoneCode: [{ validator: validatePhoneCode, trigger: "blur" }]
      },
      identifyCodes: "3456789ABCDEFGHGKMNPQRSTUVWXY",
      identifyCode: "" //图形验证码
    };
  },
  created() {
    // console.log("this.$router", this.$router);
    // this.refreshCode()
    // 在页面加载时从cookie获取登录信息
    let username = this.getCookie("username");
    let password = Base64.decode(this.getCookie("password"));
    console.log("password", password);
    // 如果存在赋值给表单，并且将记住密码勾选
    if (username) {
      this.ruleForm.userName = username;
      this.ruleForm.pass0 = password;
      this.isRememberPsw = true;
    }
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        console.log("valid", valid);
        if (valid) {
          if (formName == "ruleForm") {
            this.$message({
              message: "登录成功",
              type: "success",
              center: true,
              showClose: true
            });
            this.$router.push({
              path: "/manage-system-layout"
              // query: {
              //   a:1
              // }
            });
            // this.$router.push({
            //   name: 'manage-system-layout'
            // })
            // 储存登录信息
            this.setUserInfo();
          } else if (formName == "ruleForm2") {
            this.$message({
              message: "注册成功",
              type: "success",
              center: true,
              showClose: true
            });
            this.pageType = 1;
          } else {
            this.$message({
              duration: 0,
              message: "密码：888888",
              type: "success",
              center: true,
              showClose: true
            });
          }
          this.resetForm(formName);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      //对该表单项进行重置，将其值重置为初始值并移除校验结果
      this.$refs[formName].resetFields();
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(8989, this.identifyCode);
    },
    toLoginPage() {
      this.pageType = 1;
    },
    toRegisterPage() {
      this.pageType = 2;
    },
    toForgetPswPage() {
      this.pageType = 3;
    },
    rememberChangeHandle(val) {
      if (val) {
      } else {
      }
    },
    // 储存表单信息
    setUserInfo: function() {
      // 判断用户是否勾选记住密码，如果勾选，向cookie中储存登录信息，
      // 如果没有勾选，储存的信息为空
      if (this.isRememberPsw) {
        this.setCookie("username", this.ruleForm.userName, 7);
        // base64加密密码
        console.log("this.ruleForm.pass0", this.ruleForm.pass0);
        let passWord = Base64.encode(this.ruleForm.pass0);
        console.log("base64加密密码", passWord);
        this.setCookie("password", passWord, 7);
        this.setCookie("remember", this.isRememberPsw, 7);
      } else {
        this.setCookie("username", "");
        this.setCookie("password", "");
      }
    },
    // 获取cookie
    getCookie: function(key) {
      if (document.cookie.length > 0) {
        var start = document.cookie.indexOf(key + "=");
        if (start !== -1) {
          start = start + key.length + 1;
          var end = document.cookie.indexOf(";", start);
          if (end === -1) end = document.cookie.length;
          console.log(
            "document.cookie.substring(start, end)",
            document.cookie.substring(start, end)
          );
          console.log(
            "unescape",
            unescape(document.cookie.substring(start, end))
          );
          return unescape(document.cookie.substring(start, end));
        }
      }
      return "";
    },
    // 保存cookie
    setCookie: function(cName, value, expiredays) {
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + expiredays);
      document.cookie =
        cName +
        "=" +
        decodeURIComponent(value) +
        (expiredays == null ? "" : ";expires=" + exdate.toGMTString()); //时间点 'Thu, 16 Dec 2021 06:50:56 GMT'
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
  background: linear-gradient(to bottom, #125777, #13598f);
  min-height: 460px;
  &-box,
  .register-box,
  .forget-psw-box {
    width: 320px;
    // height: 200px;
    border-radius: 3px;
    // margin-bottom: 100px;
    box-shadow: 0px 0px 2px 2px #dddddd;
    padding: 20px 36px 20px;
    background: white;
    .title {
      // text-align: center;
      font-size: 18px;
      margin-left: 2px;
      margin-bottom: 18px;
    }
    /deep/.el-form-item__content {
      margin-left: 0 !important;
    }
    .my-err-msg {
      /deep/.el-form-item__error {
        left: 55px;
      }
    }
    .code {
      display: flex;
      align-items: center;
    }
    .btn-box {
      display: flex;
      justify-content: center;
      padding-top: 10px;
    }
    /deep/.el-button--text {
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }
}
.register-psw-btn-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  position: absolute; //if else显示隐藏动画加这个才会在同个位置发生动画，否则两个元素一起发生动画过程，会看到位置会移动过程
}
</style>