<template>
  <!-- 环型进度条 -->
  <div style="display: flex; flex-wrap: wrap;">
    <div id="board" ref="mychart1"></div>
    <div id="board" ref="mychart2"></div>
    <!-- <div id="board" ref="mychart3"></div>
    <div id="board" ref="mychart4"></div>
    <div id="board" ref="mychart5"></div>
    <div id="board" ref="mychart6"></div>-->
  </div>
</template>

<script>
import * as echarts from "echarts";
// const echarts = require('echarts');

export default {
  data() {
    return {
      // options1: {
      //   series: [
      //     {
      //       type: "gauge",
      //       startAngle: 90,
      //       endAngle: -270,
      //       pointer: {
      //         show: false
      //       },
      //       progress: {
      //         show: true,
      //         overlap: false,
      //         roundCap: true,
      //         clip: false,
      //         itemStyle: {
      //           borderWidth: 1,
      //           borderColor: "#464646"
      //         }
      //       },
      //       axisLine: {
      //         lineStyle: {
      //           width: 40
      //         }
      //       },
      //       splitLine: {
      //         show: false,
      //         distance: 0,
      //         length: 10
      //       },
      //       axisTick: {
      //         show: false
      //       },
      //       axisLabel: {
      //         show: false,
      //         distance: 50
      //       },
      //       data: gaugeData,
      //       title: {
      //         fontSize: 14
      //       },
      //       detail: {
      //         width: 50,
      //         height: 14,
      //         fontSize: 14,
      //         color: "auto",
      //         borderColor: "auto",
      //         borderRadius: 20,
      //         borderWidth: 1,
      //         formatter: "{value}%"
      //       }
      //     }
      //   ]
      // },
      options2: {
        // tooltip: {
        //   formatter: "{a} <br/>{b} : {c}%"
        // },
        series: [
          {
            name: "Pressure",
            type: "gauge",
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 1, //默认100
            progress: { //进度条
              show: true,
              width: 6,
              overlap: false,
              roundCap: true,//头尾圆的
              itemStyle: {
                color: "red"
              }
            },
            axisLine: { //表盘整体弧线
              lineStyle: {
                width: 6
                // color: [
                //   [0.25, "#FF6E76"],
                //   [0.5, "#FDDD60"],
                //   [0.75, "#58D9F9"],
                //   [1, "#7CFFB2"]
                // ]
              }
            },
            pointer: {
              //指针
              show: false
            },
            axisTick: {
              //小刻度线
              show: false
            },
            splitLine: {
              //大刻度线
              show: false
              // distance: 0,
              // length: 10
            },
            axisLabel: {
              //刻度值
              show: false
              // distance: 50
            },
            detail: { //显示的具体指
              valueAnimation: true,
              formatter: function(value) {
                return Math.round(value * 100000);
              },
              offsetCenter: [0, "-15%"]
            },
            title: { //标题
              offsetCenter: [0, "56%"],
              fontSize: 18
            },
            data: [
              {
                value: 0.5,//占比
                name: "手机银行新增活跃客户数" //title
              }
            ]
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
      // this.initEchart("mychart1", this.options1);
      this.initEchart("mychart2", this.options2);
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