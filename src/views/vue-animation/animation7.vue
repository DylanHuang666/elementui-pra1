<template>
  <div>
    <!-- 状态过渡 -->
    <!-- 例子：数字本身动态变化 -->
    <div id="animated-number-demo">
      <input v-model.number="number" type="number" step="20" />
      <h6>使用gsap处理的：</h6>
      <p>{{ animatedNumber }}</p>
      <h6>自己实现的：</h6>
      <p>{{change}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      tweenedNumber: 0,
      tweenedNumber1: 0
    };
  },
  computed: {
    animatedNumber: function() {
      return this.tweenedNumber.toFixed(0);
    },
    change() {
      return this.tweenedNumber1;
    }
  },
  watch: {
    // number: function(newValue) {
    //   if(newValue == '')return
    //   this.$gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue });
    // },
    number: function(newValue, oldValue) {
      // console.log(newValue,oldValue,typeof(newValue),typeof(oldValue))

      //使用gsap处理
      if (newValue === "") return;
      this.$gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue });

      //自己实现的
      if (oldValue == "") {
        oldValue = this.tweenedNumber1;
      }
      if (Math.ceil(newValue) > Math.ceil(oldValue)) {
        let timer = setInterval(() => {
          if (Math.ceil(oldValue) == Math.ceil(newValue)) {
            clearInterval(timer);
          } else {
            oldValue = Math.ceil(oldValue) + 1;
            this.tweenedNumber1 = oldValue;
          }
        }, 50);
      } else {
        let timer = setInterval(() => {
          if (Math.ceil(oldValue) == Math.ceil(newValue)) {
            clearInterval(timer);
          } else {
            oldValue = Math.ceil(oldValue) - 1;
            this.tweenedNumber1 = oldValue;
          }
        }, 50);
      }
    }
  }
};
</script>

<style>
</style>