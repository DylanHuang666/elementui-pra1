<template>
  <div>
    <el-card>
      <!--
        Alert 组件提供四种类型，由type属性指定，默认值为info。
      Alert 组件提供了两个不同的主题：light和dark 通过设置effect属性来改变主题，默认为light。-->
      <h3>基本用法</h3>
      <el-alert title="成功提示的文案" type="success"></el-alert>
      <el-alert title="消息提示的文案" type="info"></el-alert>
      <el-alert title="警告提示的文案" type="warning"></el-alert>
      <el-alert title="错误提示的文案" type="error"></el-alert>
      <el-alert title="成功提示的文案" type="success" effect="dark"></el-alert>
      <el-alert title="消息提示的文案" type="info" effect="dark"></el-alert>
      <el-alert title="警告提示的文案" type="warning" effect="dark"></el-alert>
      <el-alert title="错误提示的文案" type="error" effect="dark"></el-alert>
    </el-card>
    <el-card>
      <!-- 在 Alert 组件中，你可以设置是否可关闭，关闭按钮的文本以及关闭时的回调函数。
      closable属性决定是否可关闭，接受boolean，默认为true。你可以设置close-text属性来代替右侧的关闭图标，
      注意：close-text必须为文本。设置close事件来设置关闭时的回调。-->
      <h3>自定义关闭按钮</h3>
      <el-alert title="不可关闭的 alert" type="success" :closable="false"></el-alert>
      <el-alert title="自定义 close-text" type="info" close-text="知道了"></el-alert>
      <el-alert title="设置了回调的 alert" type="warning" @close="hello"></el-alert>
    </el-card>
    <el-card>
      <!--
        show-icon
      使用 center 属性让文字水平居中。-->
      <h3>带有 icon</h3>
      <el-alert title="成功提示的文案" type="success" show-icon></el-alert>
      <el-alert title="消息提示的文案" type="info" show-icon center></el-alert>
      <el-alert title="警告提示的文案" type="warning" show-icon></el-alert>
      <el-alert title="错误提示的文案" type="error" show-icon></el-alert>
    </el-card>
    <el-card>
      <!-- 包含标题和内容，解释更详细的警告。 -->
      <!-- 除了必填的title属性外，你可以设置description属性来帮助你更好地介绍，我们称之为辅助性文字。
      辅助性文字只能存放单行文本，会自动换行显示-->
      <h3>带有辅助性文字介绍</h3>
      <el-alert
        title="带辅助性文字介绍"
        type="success"
        description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
      ></el-alert>
      <el-alert title="成功提示的文案" type="success" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></el-alert>
      <el-alert title="消息提示的文案" type="info" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></el-alert>
      <el-alert title="警告提示的文案" type="warning" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></el-alert>
      <el-alert title="错误提示的文案" type="error" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></el-alert>
    </el-card>
  </div>
</template>

<script>
export default {
  methods: {
    hello() {
      alert("Hello World!");//执行后接着关闭
    }
  }
};
</script>

<style lang="scss" scoped>
.el-alert {
  margin-bottom: 15px;
}
.el-card {
  margin-bottom: 15px;
}
</style>