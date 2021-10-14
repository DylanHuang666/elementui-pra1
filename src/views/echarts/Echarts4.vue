<template>
  <!-- 散点图 -->
  <div style="display: flex; flex-wrap: wrap;">
    <div id="board" ref="mychart1"></div>
    <div id="board" ref="mychart2"></div>
    <div id="board" ref="mychart3"></div>
    <div id="board" ref="mychart4"></div>
    <div id="board" ref="mychart5"></div>
    <div id="board" ref="mychart6"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
// const echarts = require('echarts');

export default {
  data() {
    return {
      options1: {
        title: {
          text: "基础",
          left: "center"
        },
        tooltip: {},
        xAxis: {
          data: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        },
        yAxis: {},
        series: [
          {
            type: "scatter",
            data: [220, 182, 191, 234, 290, 330, 310],
            // symbolSize: function(value) {  //点图形的大小
            //   return value / 10;
            // }
            // symbolSize: [10,20] //点图形的大小
            symbolSize: 10 //点图形的大小
          }
        ]
      }
    };
  },
  mounted() {
    this.setEchart();
  },
  methods: {
    setEchart() {
      this.initEchart("mychart1", this.options1);
      // this.initEchart("mychart2", this.options2);
      // this.initEchart("mychart3", this.options3);
      // this.initEchart("mychart4", this.options4);
      // this.initEchart("mychart5", this.options5);
      // this.initEchart("mychart6", this.options6);
    },
    initEchart(ref, options) {
      let dom = this.$refs[ref];
      var myChart = echarts.init(dom);
      myChart.setOption(options);
    }
  }
};
</script>

<style>
#board {
  width: 400px;
  height: 300px;
  border: 1px solid red;
  margin-right: 45px;
  margin-bottom: 10px;
}
#board:nth-child(3n) {
  margin-right: 0px;
}
/* #board2 {
  width: 500px;
  height: 300px;
 border: 1px solid yellow;
} */
</style>