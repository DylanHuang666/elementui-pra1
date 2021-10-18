<template>
  <div style="display: flex; flex-wrap: wrap;">
    <!-- 柱状图 -->
    <div id="demo-board" ref="mychart1"></div>
    <div id="demo-board" ref="mychart2"></div>
    <div id="demo-board" ref="mychart3"></div>
    <!-- <div id="demo-board" ref="mychart4"></div> -->
  </div>
</template>

<script>
import * as echarts from "echarts";
// const echarts = require('echarts');

export default {
  data() {
    return {
      //数据集1
      options1: {
        title: {
          text: "数据集1"
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
      options2: {
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
        yAxis: {
          position: 'right', //轴显示的位置
        },
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }]
      },
      //柱折混合
      options3: {
        tooltip: {
          trigger: "axis", //提示框信息变为每个类目对应的各个系列的值，而不只是鼠标所在的这一个系列的值
          axisPointer: {
            type: "cross", //配置这个就会有随鼠标移动的轴线，并且会有各Y轴值提示
            crossStyle: {
              color: "#999" //轴线颜色
            }
          }
        },
        toolbox: {
          //操作区
          feature: {
            dataView: { show: true, readOnly: false }, //图表数据表格图 readOnly: false可编辑更改
            magicType: { show: true, type: ["line", "bar"] }, //各种类型图表切换
            restore: { show: true }, //还原原图表样子
            saveAsImage: { show: true } //保存下载
          }
        },
        legend: {
          data: ["广东", "湖南", "温度"]
        },
        //可缩放
        dataZoom: [
          //x轴缩放
          {
            show: true,
            filterMode: "empty",
            height: 20, //x轴缩放条宽度  width是长度
            start: 0,
            end: 100
          },
          {
            type: "inside",
            start: 0,
            end: 100
          },
          //y轴缩放
          {
            show: true,
            yAxisIndex: 0,
            filterMode: "empty",
            width: 30, //y轴缩放条宽度
            height: "80%",
            showDataShadow: false,
            left: "93%"
          }
        ],
        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisPointer: {
              //???
              type: "shadow"
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "降水量",
            min: 0,
            max: 250,
            interval: 50,
            axisLine: { //y轴要展示成线
              show: true,
              // lineStyle: {
              //   color: 'red'
              // }
            },
            axisLabel: {
              formatter: "{value} ml"
            }
          },
          {
            type: "value",
            name: "温度",
            min: 0,
            max: 25,
            interval: 5,
            axisLine: { //y轴要展示成线
              show: true,
              // lineStyle: {
              //   color: 'red'
              // }
            },
            axisLabel: {
              formatter: "{value} °C"
            }
          }
        ],
        series: [
          {
            name: "广东",
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ]
          },
          {
            name: "湖南",
            type: "bar",
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ]
          },
          {
            name: "温度",
            type: "line",
            yAxisIndex: 1,
            data: [
              2.0,
              2.2,
              3.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2
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
      this.initEchart("mychart1", this.options1);
      this.initEchart("mychart2", this.options2);
      this.initEchart("mychart3", this.options3);
      // this.initEchart("mychart4", this.options4);
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
#demo-board {
  width: 600px;
  height: 400px;
  /* border: 1px solid red; */
  margin-right: 45px;
}
/* #board2 {
  width: 500px;
  height: 300px;
 border: 1px solid yellow;
} */
</style>