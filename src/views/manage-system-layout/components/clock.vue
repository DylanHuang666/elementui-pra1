<template>
  <div id="clock">
    <p class="text">数字时钟</p>
    <p class="date">{{ date }} {{ time }}</p> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: "",
      date: "",
      week: [
        "星期天",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      ]
    };
  },
  created() {
    var timerID = setInterval(this.updateTime, 1000);
    this.updateTime();
  },
  methods: {
    updateTime() {
      var cd = new Date();
      this.time = this.week[cd.getDay()];
      this.date =
        this.zeroPadding(cd.getFullYear(), 4) +
        "-" +
        this.zeroPadding(cd.getMonth() + 1, 2) +
        "-" +
        this.zeroPadding(cd.getDate(), 2) +
        " " +
        this.zeroPadding(cd.getHours(), 2) +
        ":" +
        this.zeroPadding(cd.getMinutes(), 2) +
        ":" +
        this.zeroPadding(cd.getSeconds(), 2);
    },
    zeroPadding(num, digit) {
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    }
  }
};
</script>

<style>
</style>