<template>
  <div class="rules">
    <div class="sub-title">标记规则</div>
    <div class="content">
      <!-- <span>数值标记</span> -->
      <div class="rule">
        <!-- 头部下拉选择条开始 -->
        <div class="rule-bar">
          <div class="rule-box rule-input" @click="clickHandle">
            <el-input placeholder="请选择时间区间" suffix-icon="el-icon-caret-bottom" v-model="input"></el-input>
          </div>
          <div class="rule-box">
            <el-select v-model="doType" class="title-select">
              <el-option
                v-for="item in doArray"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="rule-box">
            <el-select v-model="behaviorType" class="title-select">
              <el-option
                v-for="item in behaviorArray"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="rule-box">
            <el-select v-model="tagType" class="title-select">
              <el-option
                v-for="item in tagTypeArray"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <!-- 筛选按钮 -->
          <div class="filter-btn" @click="filterHandle">
            <i class="el-icon-circle-plus ic-filter"></i>
            <span>添加筛选</span>
          </div>
          <!-- 筛选按钮 -->
        </div>
        <!-- 头部下拉选择条结束 -->
        <!-- 筛选面板 -->
        <div v-if="isShowFilterBoard" class="filter-board">
          <div class="filter-left-box">
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div class="filter-right-box">
            <!-- <div class="filter-item" v-for="(item,index) in filterNum" :key="index">
              <el-select v-model="filterType" class="filter-select">
                <el-option
                  v-for="item in filterArray"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-select v-model="relationType" class="filter-relation">
                <el-option
                  v-for="item in relationArray"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <div class="filter-input">
                <el-input placeholder v-model="filterValue"></el-input>
              </div>

              <span class="del">删除</span>
            </div> -->
            <SelectBar v-for="(item,index) in filterItemArray" :key="item" @filter-delete="delHandle(index)" />
          </div>
        </div>
        <!-- 筛选面板 -->

        <!-- 日期面板 -->
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
                    <div class="select-box" v-if="currentSelect == '动态时间段'">
                      <div
                        style="display: flex; align-items: center;margin-left:13px;margin-right:5px;"
                      >
                        <span style="font-size: 12px">最近</span>
                      </div>

                      <el-input v-model="month" class="select-input" placeholder></el-input>
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
                <el-radio-button v-model="currentSelect" label="选择具体时间段" class="btn-time-range"></el-radio-button>
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
              </div>-->
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
              ></el-date-picker>
            </div>
            <!-- 右边 -->
          </div>
        </div>
        <!-- 日期面板 -->
      </div>
    </div>
  </div>
</template>

<script>
import SelectBar from '@/components/SelectBar.vue'
export default {
  components:{
    SelectBar
  },
  data() {
    return {
      input: "当天",
      selectValue: "当天",
      isOpen: false, //日期面板是否展开
      isShowRight: false, //右边date选择面板是否展开
      isShowFilterBoard: false, //筛选面板是否展开
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
      doArray: [
        {
          value: "做过",
          label: "做过",
        },
        {
          value: "连续做过",
          label: "连续做过",
        }
      ],
      behaviorArray:[
        {
          value: "动态行为",
          label: "动态行为",
        },
        {
          value: "交易行为",
          label: "交易行为",
        }
      ],
      tagTypeArray:[
        {
          value: "会话识别",
          label: "会话识别",
        },
        {
          value: "页面浏览",
          label: "页面浏览",
        },
        {
          value: "广告曝光",
          label: "广告曝光",
        }
      ],
      doType: '',
      behaviorType: '',
      tagType: '',
      filterArray: [
        {
          value: "用户事件编号",
          label: "用户事件编号",
        },
        {
          value: "用户行为时间",
          label: "用户行为时间",
        }
      ],
      relationArray: [
        {
          value: "等于",
          label: "等于",
        },
        {
          value: "不等于",
          label: "不等于",
        }
      ],
      filterType: '',
      relationType: '',
      filterValue: '',
      initNum: 0,
      filterItemArray: []
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
    //时间区间
    clickHandle() {
      this.isOpen = !this.isOpen;
      if(this.isShowFilterBoard){
        this.isShowFilterBoard = false
      }
      
    },
    //确定
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
    filterHandle(){
      // console.log('filterHandle')
      if(!(this.doType && this.behaviorType && this.tagType))return
      this.isOpen = false
      this.isShowFilterBoard = true
      this.filterItemArray.push(this.initNum + 1)
      this.initNum++
    },
    delHandle(v){
      // console.log(123,v,v2)
      this.filterItemArray.splice(v,1)
      // console.log(123,this.filterItemArray)
    }
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
  margin-right: 10px;
}
.rule-box.rule-input {
  width: 230px;
}

.rule {
  .rule-bar {
    display: flex;
    padding: 7px;
    background-color: #f2f2f2;
    border-radius: 5px;
    border: 1px solid rgba(215, 215, 215, 1);
  }
  .filter-board {
    display: flex;
    // align-items: center;
    width: 800px;
    height: 400px;
    background-color: #cccccc;
    // position: absolute;
  }
}
.filter-btn {
  display: flex;
  align-items: center;
  margin-left: 25px;
  cursor: pointer;
  .ic-filter {
    color: #1890ff;
    font-size: 20px;
    margin-right: 3px;
  }
  span {
    font-size: 14px;
  }
}
.selcet-box {
  display: inline-block;
  // max-width: 800px;
  background: #ffffff;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 15px;
  // margin-top: -500px;
  .top-title {
    // width: auto;
    border-bottom: 1px solid #bbbbbb;
    padding-top: 5px;
    padding-bottom: 10px;
    font-size: 13px;
    font-weight: bold;
  }
  .main-box {
    margin-top: 15px;
    display: flex;
    .left-box {
      min-width: 200px;
      margin-right: 20px;
      .btn-box {
        width: 200px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .btn {
          margin-bottom: 10px;
          width: 85px;
          height: 34px;
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
          margin-left: 30px;
          .select-box {
            display: flex;
            .select-input {
              width: 60px;
            }
            .select-time {
              width: 100px;
              margin-left: 5px;
            }
          }
        }
      }
      .btn-time-range {
        width: 200px;
      }
      .btn-range-box {
        margin-bottom: 10px;
      }
    }
  }
}

.rule-box .el-input--suffix .el-input__inner {
  height: 30px;
  font-size: 12px;
}

.select-input .el-input__inner {
  height: 30px;
}

.el-select .el-input--suffix .el-input__inner {
  height: 30px;
}

.rule-box .el-input__suffix {
  top: -5px;
}

.selcet-box .el-input__suffix {
  top: 5px;
}

.selcet-box .el-radio-button__inner {
  width: 85px;
  height: 34px;
  background: #ecf5ff;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  font-size: 12px;
  padding: 0;
  padding-top: 10px;
}

.selcet-box .el-radio-button:first-child .el-radio-button__inner,
.btn.el-radio-button:last-child .el-radio-button__inner {
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  font-size: 12px;
}
.selcet-box .el-radio-button__orig-radio:checked + .el-radio-button__inner {
  border: none;
  font-size: 12px;
}

.selcet-box .btn-range-box .el-radio-button__inner {
  width: 200px;
  height: 34px;
  background: #ecf5ff;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  font-size: 12px;
}

.selcet-box .el-radio-button__orig-radio:checked + .el-radio-button__inner {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  box-shadow: -1px 0 0 0 #409eff;
  font-size: 12px;
}
.selcet-box .el-button--primary {
  width: 85px;
  height: 34px;
  font-size: 12px;
  padding: 0;
}

.selcet-box .el-select .el-input .el-select__caret {
  line-height: 14px;
}
.selcet-box .select-time .el-input__suffix {
  top: 0;
}

.rule-box .title-select.el-select .el-input .el-select__caret {
  line-height: 14px;
}
.rule-box .title-select .el-input__suffix {
  top: 0;
}

.filter-item {
  display: flex;
  align-items: center;
}

.filter-board .filter-select .el-input--suffix .el-input__inner {
  width: 200px;
  height: 30px;
}
.filter-board .filter-relation .el-input--suffix .el-input__inner {
  width: 100px;
  height: 30px;
}
.filter-board .el-select .el-input .el-select__caret {
  line-height: 14px;
}
.filter-board .el-input__suffix {
  top: 0;
}
.filter-input {
  width: 109px;
}
.filter-input .el-input__inner {
  height: 30px;
  font-size: 12px;
}
.filter-item .el-select {
  margin-right: 20px;
  margin-top: 13px;
  margin-bottom: 13px;
}
.del {
  display: inline-block;
  font-size: 12px;
  color: #3196ff;
  margin-left: 30px;
  cursor: pointer;
}
</style>