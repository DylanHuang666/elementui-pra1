<template>
  <div class="rules">
    <div class="sub-title">标记规则</div>
    <div class="content">
      <span>数值标记</span>
      <div class="rule">
        <div class="rule-box" @click="clickHandle">
          <el-input placeholder="请选择时间区间" suffix-icon="el-icon-caret-bottom" v-model="input"></el-input>
        </div>
        <!-- 展开栏 -->
        <div v-if="isOpen" style="max-width: 300px;height: 500px; background: #eeeeee;">
          <div class="title">{{currentSelect}}</div>
          <div>
            <!-- 左边 -->
            <div>
              <el-radio-group v-model="currentSelect" size="medium" style="margin-top:20px;">
                <div class="el-radio-button-box">
                  <div v-for="(v,index) in selectData" :key="index">
                    <div v-if="index == 9" class="time-box">
                      <el-radio-button :label="v"></el-radio-button>
                      <div v-if="currentSelect == '动态时间段'" class="input-box">
                        <div style="width:70px;">最近</div>
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
                    <el-radio-button v-else :label="v"></el-radio-button>
                  </div>
                </div>
              </el-radio-group>
              <div>
                <el-button type="primary" @click="sureHandle">确定</el-button>
              </div>
            </div>

            <!-- 左边 -->

            <!-- 右边 -->
            <div></div>
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
      input: "",
      isOpen: false,
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
        "最近30天",
        "动态时间段",
        "具体时间段"
      ],
      month: "",
      timeType: "",
      timeTypeArray: [
        {
          value: "月",
          label: "月"
        },
        {
          value: "天",
          label: "天"
        },
        {
          value: "小时",
          label: "小时"
        },
        {
          value: "分钟",
          label: "分钟"
        }
      ]
    };
  },
  methods: {
    clickHandle() {
      this.isOpen = !this.isOpen;
    },
    sureHandle() {
      // console.log(111,this.currentSelect)
      if (this.currentSelect == "动态时间段") {
        this.input = `最近 ${this.month} ${this.timeType}`;
      } else {
        this.input = this.currentSelect;
      }

      this.isOpen = false;
    }
  }
};
</script>

<style lang="scss" scoped>
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
.title {
  width: 250px;
  border-bottom: 1px solid #555555;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 10px;
}
.el-radio-button-box {
  width: 250px;
  display: flex;
  // justify-content: space-between;
  flex-wrap: wrap;
}
.time-box {
  display: flex;
}
.input-box {
  display: flex;
}
</style>