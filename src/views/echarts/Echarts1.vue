<template>
  <div style="display: flex; flex-wrap: wrap;">
    <!-- 柱状图 -->
    <div id="board" ref="mychart"></div>
    <div id="board" ref="mychart2"></div>
    <div id="board" ref="mychart3"></div>
    <div id="board" ref="mychart4"></div>
    <div id="board" ref="mychart5"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
// const echarts = require('echarts');

export default {
  data() {
    return {
      options: {
        title: {
          text: "基本柱状图"
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
            // itemStyle:{
            //   color: '#678556'
            // },
            // barWidth: '50%',
            // barMinHeight: 100,
            showBackground: true,
            backgroundStyle: {
              color: "rgba(220, 220, 220, 0.8)"
            }
          }
        ]
      },
      options2: {
        title: {
          text: "多系列"
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "小明的销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
            itemStyle: {
              color: "#678556"
            }
          },
          {
            name: "小红的销量",
            type: "bar",
            data: [6, 25, 30, 12, 16, 21]
          }
        ]
      },
      //堆叠
      options3: {
        title: {
          text: "堆叠"
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
            itemStyle: {
              color: "#678556"
            },
            stack: "x"
          },
          {
            name: "销量",
            type: "bar",
            data: [6, 25, 30, 12, 16, 21],
            stack: "x"
          }
        ]
      },
      //数据集1
      options4: {
        title: {
          text: "数据集"
        },
        legend: {},
        tooltip: {},
        dataset: {
          // 提供一份数据。
          source: [
            ["product", "2015", "2016", "2017"],
            ["Matcha Latte", 43.3, 85.8, 93.7],
            ["Milk Tea", 83.1, 73.4, 55.1],
            ["Cheese Cocoa", 86.4, 65.2, 82.5],
            ["Walnut Brownie", 72.4, 53.9, 39.1]
          ]
        },
        // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
        xAxis: { type: "category" },
        // 声明一个 Y 轴，数值轴。
        yAxis: {},
        // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }]
      },
      //数据集2
      options5: {
        title: {
          text: "数据集2"
        },
        legend: {},
        tooltip: {},
        dataset: {
          // 用 dimensions 指定了维度的顺序。直角坐标系中，如果 X 轴 type 为 category，
          // 默认把第一个维度映射到 X 轴上，后面维度映射到 Y 轴上。
          // 如果不指定 dimensions，也可以通过指定 series.encode
          // 完成映射，参见后文。
          dimensions: ["product", "2015", "2016", "2017"],
          //分每个类目说明各个系列对应的值
          source: [
            {
              product: "Matcha Latte",
              "2015": 43.3,
              "2016": 85.8,
              "2017": 93.7
            },
            { product: "Milk Tea", "2015": 83.1, "2016": 73.4, "2017": 55.1 },
            {
              product: "Cheese Cocoa",
              "2015": 86.4,
              "2016": 65.2,
              "2017": 82.5
            },
            {
              product: "Walnut Brownie",
              "2015": 72.4,
              "2016": 53.9,
              "2017": 39.1
            }
          ]
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }]
      }
    };
  },
  mounted() {
    this.setEchart();
  },
  methods: {
    setEchart() {
      let dom = this.$refs.mychart;
      // console.log('dom',dom)
      // this.myChart = echarts.init(dom);
      // this.myChart.setOption(this.opt);
      // var myChart = echarts.init(document.getElementById('board'));
      var myChart = echarts.init(dom);
      myChart.setOption(this.options);

      let dom2 = this.$refs.mychart2;
      var myChart2 = echarts.init(dom2);
      myChart2.setOption(this.options2);

      this.initEchart("mychart3", this.options3);
      this.initEchart("mychart4", this.options4);
      this.initEchart("mychart5", this.options5);
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
}
/* #board2 {
  width: 500px;
  height: 300px;
 border: 1px solid yellow;
} */
</style>