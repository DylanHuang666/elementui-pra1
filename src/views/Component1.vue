<template>
  <div class="rules">
    <div class="sub-title">标记规则</div>
    <div class="content">
      <span>数值标记</span>
      <div class="rule">
        <div class="rule-box" @click="clickHandle">
          <el-input
            placeholder="请选择时间区间"
            suffix-icon="el-icon-caret-bottom"
            v-model="input"
          ></el-input>
        </div>
        <!-- 展开栏 -->
        <div v-if="isOpen" class="selcet-box">
          <!-- 顶部 -->
          <div class="top-title">{{ selectValue }}</div>
          <!-- 顶部 -->
          <div class="main-box">
            <!-- 左边 -->
            <div class="left-box">
              <el-radio-group v-model="currentSelect" class="btn-box">
                <el-radio-button
                  v-for="(v, index) in selectData"
                  :key="index"
                  :label="v"
                  class="btn"
                ></el-radio-button>
              </el-radio-group>
              <div class="mid-box">
                <el-radio-group v-model="currentSelect" class="btn-box2">
                  <el-radio-button label="最近30天"></el-radio-button>
                  <div class="btn-select-box">
                    <el-radio-button label="动态时间段"></el-radio-button>
                    <div
                      class="select-box"
                      v-if="currentSelect == '动态时间段'"
                    >
                      <div style="display: flex; align-items: center">
                        <span style="font-size: 14px">最近</span>
                      </div>

                      <el-input
                        v-model="month"
                        class="select-input"
                        placeholder=""
                      ></el-input>
                      <el-select v-model="timeType" class="select-time">
                        <el-option
                          v-for="item in timeTypeArray"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </div>
                  </div>
                </el-radio-group>
              </div>
              <el-radio-group v-model="currentSelect" class="btn-range-box">
                <el-radio-button
                  v-model="currentSelect"
                  label="选择具体时间段"
                  class="btn-time-range"
                ></el-radio-button>
              </el-radio-group>
              <!-- <div class="el-radio-button-box">
                <div v-for="(v, index) in selectData" :key="index">
                  <div v-if="index == 9" class="time-box">
                    <el-radio-button :label="v"></el-radio-button>
                    <div v-if="currentSelect == '动态时间段'" class="input-box">
                      <div style="width: 70px">最近</div>
                      <el-input v-model="month"></el-input>
                      <el-select v-model="timeType" placeholder>
                        <el-option
                          v-for="item in timeTypeArray"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </div>
                  </div>
                </div>
              </div> -->
              <div>
                <el-button type="primary" @click="sureHandle">确定</el-button>
              </div>
            </div>

            <!-- 左边 -->

            <!-- 右边 -->
            <div class="right-box" v-if="isShowRight">
              <el-date-picker
                v-model="date"
                type="daterange"
                align="left"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd"
              >
              </el-date-picker>
            </div>
            <!-- 右边 -->
          </div>
        </div>
        <!-- 展开栏 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "当天",
      selectValue: "当天",
      isOpen: false,
      isShowRight: false,
      currentSelect: "当天",
      selectData: [
        "当天",
        "昨天",
        "当周",
        "上周",
        "当月",
        "上月",
        "最近一小时",
        "最近7天",
      ],
      month: "1",
      timeType: "月",
      timeTypeArray: [
        {
          value: "月",
          label: "月",
        },
        {
          value: "天",
          label: "天",
        },
        {
          value: "小时",
          label: "小时",
        },
        {
          value: "分钟",
          label: "分钟",
        },
      ],
      date: "",
    };
  },
  watch: {
    currentSelect(v) {
      if (v == "选择具体时间段") {
        this.isShowRight = true;
      } else if (v == "动态时间段") {
        this.isShowRight = false;
      } else {
        this.isShowRight = false;
        this.selectValue = this.currentSelect;
      }
    },
  },
  methods: {
    clickHandle() {
      this.isOpen = !this.isOpen;
    },
    sureHandle() {
      // console.log(111,this.currentSelect)
      if (this.currentSelect == "动态时间段") {
        this.selectValue = `最近 ${this.month} ${this.timeType}`;
        this.input = `最近 ${this.month} ${this.timeType}`;
      } else if (this.currentSelect == "选择具体时间段") {
        // console.log(23,this.date)
        if (!this.date) return;
        let dateStr = this.date[0] + " 至 " + this.date[1];
        this.selectValue = dateStr;
        this.input = dateStr;
      } else {
        this.input = this.currentSelect;
      }

      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss">
.rules {
  margin-top: 10px;
  .sub-title {
    font-size: 16px;
    border-left: #3196ff 4px solid;
    padding-left: 10px;
    margin-bottom: 15px;
  }
  .content {
    padding-left: 30px;
  }
}
.rule-box {
  width: 300px;
}

// .el-radio-button-box {
//   width: 250px;
//   display: flex;
//   // justify-content: space-between;
//   flex-wrap: wrap;
// }
// .time-box {
//   display: flex;
// }
// .input-box {
//   display: flex;
// }
.selcet-box {
  display: inline-block;
  // max-width: 800px;
  background: #ffffff;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 15px;
  .top-title {
    width: auto;
    border-bottom: 1px solid #bbbbbb;
    padding-top: 5px;
    padding-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
  }
  .main-box {
    margin-top: 15px;
    display: flex;
    .left-box {
      min-width: 260px;
      .btn-box {
        width: 260px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .btn {
          margin-bottom: 10px;
          width: 120px;
          height: 40px;
          border-radius: 5px;
          // border: 1px solid #bbbbbb;
        }
      }
      .mid-box {
        margin-bottom: 10px;
      }
      .btn-box2 {
        display: flex;
        .btn-select-box {
          display: flex;
          align-items: center;
          margin-left: 20px;
          .select-box {
            display: flex;
            .select-input {
              width: 60px;
            }
            .select-time {
              width: 100px;
            }
          }
        }
      }
      .btn-time-range {
        width: 300px;
      }
      .btn-range-box {
        margin-bottom: 10px;
      }
    }
  }
}
.selcet-box .el-radio-button__inner {
  width: 120px;
  height: 40px;
  background: #ecf5ff;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
}

.selcet-box .el-radio-button:first-child .el-radio-button__inner,
.btn.el-radio-button:last-child .el-radio-button__inner {
  border: 1px solid #bbbbbb;
  border-radius: 5px;
}
.selcet-box .el-radio-button__orig-radio:checked + .el-radio-button__inner {
  border: none;
}

.selcet-box .btn-range-box .el-radio-button__inner {
  width: 260px;
  height: 40px;
  background: #ecf5ff;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
}

.selcet-box .el-radio-button__orig-radio:checked + .el-radio-button__inner {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  box-shadow: -1px 0 0 0 #409eff;
}
.selcet-box .el-button--primary {
  width: 120px;
  height: 40px;
}
</style>