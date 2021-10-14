<template>
  <!-- 饼图 -->
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
          left: 'center'
        },
        tooltip: {},
        series: [
          {
            type: "pie",
            data: [
              {
                value: 335,
                name: "直接访问"
              },
              {
                value: 234,
                name: "联盟广告"
              },
              {
                value: 1548,
                name: "搜索引擎"
              }
            ],
            radius: "50%"
          }
        ]
      },
      options2: {
        // title: {
        //   text: "圆环图"
        // },
        legend: {
          orient: "vertical",
          x: "left",
          data: ["直接访问", "联盟广告", "搜索引擎"]
        },
        tooltip: {},
        series: [
          {
            type: "pie",
            avoidLabelOverlap: false,
            data: [
              {
                value: 335,
                name: "直接访问"
              },
              {
                value: 234,
                name: "联盟广告"
              },
              {
                value: 1548,
                name: "搜索引擎"
              }
            ],
            radius: ["40%", "70%"],
            label: {
              show: false, // 外面固定提示
              position: "center", //中间要显示提示name，必须也设置position
              emphasis: {
                show: true //中间显示提示name
              }
            }
            // labelLine: {
            //   show: false
            // },
            // emphasis: {
            //   label: {
            //     show: true,
            //     fontSize: "30",
            //     fontWeight: "bold"
            //   }
            // }
          }
        ]
      },
      options3: {
        title: {
          text: "南丁格尔图（玫瑰图）",
          left: 'center'
        },
        tooltip: {},
        series: [
          {
            type: "pie",
            data: [
              {
                value: 335,
                name: "直接访问"
              },
              {
                value: 234,
                name: "联盟广告"
              },
              {
                value: 1548,
                name: "搜索引擎"
              }
            ],
            // radius: "50%",
            roseType: 'area'
          }
        ]
      },
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