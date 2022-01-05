<template>
  <div>
    <el-card>
      <h2>时间选择器</h2>
      <el-card>
        <h3>下拉选择</h3>
        <el-time-select
          v-model="value"
          :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30'
        }"
          placeholder="选择时间"
          @change="changeHandle"
        ></el-time-select>
      </el-card>
      <el-card>
        <!-- 使用 el-time-picker 标签，通过selectableRange限制可选时间范围。
        提供了两种交互方式：默认情况下通过鼠标滚轮进行选择，打开arrow-control属性则通过界面上的箭头进行选择。-->
        <h3>通过鼠标滚轮进行选择</h3>
        <el-time-picker
          v-model="value1"
          :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
          placeholder="任意时间点"
          @change="changeHandle1"
        ></el-time-picker>
        <h3>箭头arrow-control</h3>
        <el-time-picker
          arrow-control
          v-model="value2"
          :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
          placeholder="任意时间点"
        ></el-time-picker>
      </el-card>
      <el-card>
        <h3>起始时间结束时间</h3>
        <el-time-select
          placeholder="起始时间"
          v-model="startTime"
          :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }"
        ></el-time-select>
        <el-time-select
          placeholder="结束时间"
          v-model="endTime"
          :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }"
        ></el-time-select>
      </el-card>
      <el-card>
        <h3>任意时间范围</h3>
        <el-time-picker
          is-range
          v-model="value3"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围"
          @change="changeHandle2"
        ></el-time-picker>
        <el-time-picker
          is-range
          arrow-control
          v-model="value4"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围"
        ></el-time-picker>
      </el-card>
    </el-card>
    <el-card>
      <h2>DatePicker 日期选择器</h2>
      <!-- 基本单位由type属性指定。快捷选项需配置picker-options对象中的shortcuts，
      禁用日期通过 disabledDate 设置，传入函数-->
      <el-card>
        <div class="block">
          <span class="demonstration">默认</span>
          <el-date-picker v-model="date1" type="date" placeholder="选择日期" @change="dateChangeHandle"></el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">带快捷选项</span>
          <el-date-picker
            v-model="date2"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions"
            @change="dateChangeHandle1"
          ></el-date-picker>
        </div>
      </el-card>
      <el-card>
        <h3>其他日期单位</h3>
        <!-- type -->
        <div class="container">
          <div class="block">
            <span class="demonstration">周</span>
            <el-date-picker
              v-model="val1"
              type="week"
              format="yyyy 第 WW 周"
              placeholder="选择周"
              @change="weekChange"
            ></el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">月</span>
            <el-date-picker v-model="val2" type="month" placeholder="选择月" @change="monthChange"></el-date-picker>
          </div>
        </div>
        <div class="container">
          <div class="block">
            <span class="demonstration">年</span>
            <el-date-picker v-model="val3" type="year" placeholder="选择年" @change="yearChange"></el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">多个日期</span>
            <el-date-picker
              type="dates"
              v-model="val4"
              placeholder="选择一个或多个日期"
              @change="moreChange"
            ></el-date-picker>
          </div>
        </div>
      </el-card>
      <el-card>
        <h3>日期范围</h3>
        <!-- 
          type="daterange"
          unlink-panels  在范围选择器里取消两个日期面板之间的联动
        -->
        <!-- 选择日期范围时，默认情况下，起始日期和结束日期的时间部分均为当天的 0 点 0 分 0 秒。
        通过default-time可以分别指定二者的具体时刻。default-time接受一个数组，其中的值为形如12:00:00的字符串，
        第一个值控制起始日期的时刻，第二个值控制结束日期的时刻。-->
        <div class="block">
          <span class="demonstration">默认</span>
          <el-date-picker
            v-model="val5"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['00:00:00', '23:59:59']"
          ></el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">带快捷选项</span>
          <el-date-picker
            v-model="val6"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions2"
          ></el-date-picker>
        </div>
      </el-card>
      <el-card>
        <h3>日期格式</h3>
        <!-- 使用format指定输入框的格式；使用value-format指定绑定值的格式。 -->
        <div class="block">
          <span class="demonstration">默认为 Date 对象</span>
          <div class="demonstration">值：{{ val7 }}</div>
          <el-date-picker v-model="val7" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日"></el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">使用 value-format</span>
          <div class="demonstration">值：{{ val8 }}</div>
          <el-date-picker
            v-model="val8"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
            @change="changeFormatDate"
          ></el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">时间戳</span>
          <div class="demonstration">值：{{ val9 }}</div>
          <el-date-picker
            v-model="val9"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="timestamp"
          ></el-date-picker>
        </div>
      </el-card>
    </el-card>

    <el-card>
      <h2>DateTimePicker 日期时间选择器</h2>
      <el-card>
        <div class="block">
          <span class="demonstration">默认</span>
          <el-date-picker
            v-model="value7"
            type="datetime"
            placeholder="选择日期时间"
            @change="dateTimeChange"
          ></el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">带快捷选项</span>
          <el-date-picker
            v-model="value8"
            type="datetime"
            placeholder="选择日期时间"
            align="right"
            :picker-options="pickerOptions3"
          ></el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">设置默认时间</span>
          <el-date-picker
            v-model="value9"
            type="datetime"
            placeholder="选择日期时间"
            default-time="12:00:00"
          ></el-date-picker>
        </div>
      </el-card>
      <el-card>
        <h3>日期和时间范围</h3>
        <div class="block">
          <span class="demonstration">默认</span>
          <el-date-picker
            v-model="value11"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">带快捷选项</span>
          <el-date-picker
            v-model="value12"
            type="datetimerange"
            :picker-options="pickerOptions4"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            align="right"
            :default-time="['12:00:00', '08:00:00']"
          ></el-date-picker>
        </div>
      </el-card>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //时间
      value: "",
      value1: new Date(2016, 9, 10, 18, 40),
      value2: new Date(2016, 9, 10, 18, 40),
      startTime: "",
      endTime: "",
      value3: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      //日期：
      date1: "",
      date2: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      val1: "",
      val2: "",
      val3: "",
      val4: "",
      val5: "",
      val6: "",
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      val7: "",
      val8: "",
      val9: "",
      pickerOptions3: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value7: "",
      value8: "",
      value9: "",
      pickerOptions4: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value11: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value12: "",
    };
  },
  methods: {
    changeHandle(v) {
      console.log("changeHandle", v); //'08:30'
    },
    changeHandle1(v) {
      console.log("changeHandle1", v); //Mon Oct 10 2016 19:40:03 GMT+0800 (中国标准时间) date对象
    },
    changeHandle2(v) {
      console.log("changeHandle2", v); // [Mon Oct 10 2016 08:40:00 GMT+0800 (中国标准时间), Mon Oct 10 2016 09:40:01 GMT+0800 (中国标准时间)] date对象数组
    },
    dateChangeHandle(v) {
      console.log("dateChangeHandle", v); //date对象
    },
    dateChangeHandle1(v) {
      console.log("dateChangeHandle1", v); //date对象
    },
    weekChange(v) {
      console.log("weekChange", v); //选择该周的周一date对象 Mon Jan 10 2022 00:00:00 GMT+0800 (中国标准时间)
    },
    monthChange(v) {
      console.log("monthChange", v); //选择该月一号date对象
    },
    yearChange(v) {
      console.log("yearChange", v); //选择该年一月一号date对象
    },
    moreChange(v) {
      console.log("moreChange", v); //date对象数组
    },
    changeFormatDate(v) {
      console.log("changeFormatDate", v); //format后的日期字符串
    },
    dateTimeChange(v) {
      console.log("dateTimeChange", v); //date对象
    }
  }
};
</script>

<style lang="scss" scoped>
.el-card {
  margin-bottom: 20px;
}
</style>