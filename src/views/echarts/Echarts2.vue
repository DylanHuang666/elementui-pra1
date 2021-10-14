<template>
  <!-- 折线图 -->
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
        // title: {
        //   text: "基本折线图"
        // },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "line",
            data: [30, 20, 36, 10, 27, 20]
            // itemStyle:{
            //   color: '#678556'
            // },
            // barWidth: '50%',
            // barMinHeight: 100,
            // showBackground: true,
            // backgroundStyle: {
            //   color: "rgba(220, 220, 220, 0.8)"
            // }
          }
        ]
      },
      options2: {
        // title: {
        //   text: "基本折线图"
        // },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "line",
            data: [30, 20, "-", 10, 27, 20],
            lineStyle: {
              // normal: {
              //   color: "green",
              //   width: 4,
              //   type: "dashed"
              // }
              color: "green",
              width: 4,
              type: "dashed"
            },
            //显示数值
            label: {
              show: true,
              position: "bottom",
              textStyle: {
                fontSize: 20
              }
            }
            //鼠标浮入点显示数值
            // emphasis:{
            //   label:{
            //     show: true //默认为false
            //   }
            // }
          }
        ]
      },
      options3: {
        // title: {
        //   text: "堆叠"
        // },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "line",
            data: [30, 20, 40, 10, 27, 20],
            stack: "x",
            areaStyle: {} //对于堆叠折线图而言，一般建议使用区域填充色以表明堆叠的情况
            // lineStyle: {
            //   // normal: {
            //   //   color: "green",
            //   //   width: 4,
            //   //   type: "dashed"
            //   // }
            //   color: "green",
            //   width: 4,
            //   type: "dashed"
            // },
            //显示数值
            // label: {
            //   show: true,
            //   position: "bottom",
            //   textStyle: {
            //     fontSize: 20
            //   }
            // },
            //鼠标浮入点显示数值
            // emphasis:{
            //   label:{
            //     show: true //默认为false
            //   }
            // }
          },
          {
            name: "销量",
            type: "line",
            data: [6, 12, 2, 8, 6, 16],
            stack: "x",
            areaStyle: {
              color: "#ff0",
              opacity: 0.5
            } //对于堆叠折线图而言，一般建议使用区域填充色以表明堆叠的情况
            // lineStyle: {
            //   // normal: {
            //   //   color: "green",
            //   //   width: 4,
            //   //   type: "dashed"
            //   // }
            //   color: "green",
            //   width: 4,
            //   type: "dashed"
            // },
            //显示数值
            // label: {
            //   show: true,
            //   position: "bottom",
            //   textStyle: {
            //     fontSize: 20
            //   }
            // },
            //鼠标浮入点显示数值
            // emphasis:{
            //   label:{
            //     show: true //默认为false
            //   }
            // }
          }
        ]
      },
      options4: {
        // title: {
        //   text: "区域面积图"
        // },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "line",
            data: [30, 20, 32, 22, 27, 20],
            areaStyle: {}
            // lineStyle: {
            //   // normal: {
            //   //   color: "green",
            //   //   width: 4,
            //   //   type: "dashed"
            //   // }
            //   color: "green",
            //   width: 4,
            //   type: "dashed"
            // },
            //显示数值
            // label: {
            //   show: true,
            //   position: "bottom",
            //   textStyle: {
            //     fontSize: 20
            //   }
            // },
            //鼠标浮入点显示数值
            // emphasis:{
            //   label:{
            //     show: true //默认为false
            //   }
            // }
          },
          {
            name: "销量",
            type: "line",
            data: [36, 12, 40, 8, 16, 26],
            areaStyle: {
              color: "#ff0",
              opacity: 0.5
            }
            // lineStyle: {
            //   // normal: {
            //   //   color: "green",
            //   //   width: 4,
            //   //   type: "dashed"
            //   // }
            //   color: "green",
            //   width: 4,
            //   type: "dashed"
            // },
            //显示数值
            // label: {
            //   show: true,
            //   position: "bottom",
            //   textStyle: {
            //     fontSize: 20
            //   }
            // },
            //鼠标浮入点显示数值
            // emphasis:{
            //   label:{
            //     show: true //默认为false
            //   }
            // }
          }
        ]
      },
      options5: {
        // title: {
        //   text: "平滑曲线图"
        // },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "line",
            data: [30, 20, 36, 10, 27, 20],
            smooth: true
          }
        ]
      },
      options6: {
        // title: {
        //   text: "阶梯线图"
        // },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "Step Start",
            type: "line",
            step: "start", //拐弯位置
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "Step Middle",
            type: "line",
            step: "middle",
            data: [220, 282, 201, 234, 290, 430, 410]
          },
          {
            name: "Step End",
            type: "line",
            step: "end",
            data: [450, 432, 401, 454, 590, 530, 510]
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
      this.initEchart("mychart2", this.options2);
      this.initEchart("mychart3", this.options3);
      this.initEchart("mychart4", this.options4);
      this.initEchart("mychart5", this.options5);
      this.initEchart("mychart6", this.options6);

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