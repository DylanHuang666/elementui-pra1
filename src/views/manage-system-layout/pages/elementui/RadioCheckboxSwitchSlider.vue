<template>
  <div>
    <el-card>
      <h2>一.单选框</h2>
      <h3>基础用法</h3>
      <!-- label可以是String、Number或Boolean。 -->
      <el-radio v-model="radio" label="1" @change="changeHandle">备选项</el-radio>
      <el-radio v-model="radio" label="2" border>备选项</el-radio>

      <h3>单选框组</h3>
      <el-radio-group v-model="radio2">
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
      </el-radio-group>

      <h3>按钮样式</h3>
      <!-- size属性单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效 -->
      <el-radio-group v-model="radio3" size="small">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </el-card>
    <el-card>
      <h2>二.多选框</h2>
      <h3>基础用法</h3>
      <el-checkbox v-model="checked">备选项</el-checkbox>
      <el-checkbox v-model="checked" border>备选项(边框)</el-checkbox>

      <h3>多选框组</h3>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="复选框 A"></el-checkbox>
        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
        <el-checkbox label="禁用" disabled></el-checkbox>
        <el-checkbox label="选中且禁用" disabled></el-checkbox>
      </el-checkbox-group>

      <h3>indeterminate 状态</h3>
      <!-- indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果 -->
      <el-checkbox
        :indeterminate="isIndeterminate"
        v-model="checkAll"
        @change="handleCheckAllChange"
      >全选</el-checkbox>
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>

      <h3>可选项目数量的限制</h3>
      <el-checkbox-group v-model="checkedCities2" :min="1" :max="2">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>

      <h3>按钮样式</h3>
      <el-checkbox-group v-model="checkboxGroup2" size="medium">
        <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
      </el-checkbox-group>
    </el-card>

    <el-card>
      <h2>三.Switch 开关</h2>
      <h3>基础用法</h3>
      <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      <div>
        <el-switch v-model="value1" active-text="按月付费" inactive-text="按年付费"></el-switch>
      </div>

      <h3>扩展的 value 类型</h3>
      <el-switch
        v-model="value2"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-value="100"
        inactive-value="0"
      ></el-switch>
    </el-card>

    <el-card>
      <h2>四.滑块</h2>
      <h3>基础用法</h3>
      <div class="block">
        <span class="demonstration">默认</span>
        <el-slider v-model="val1"></el-slider>
      </div>
      <div class="block">
        <span class="demonstration">自定义初始值</span>
        <el-slider v-model="val2"></el-slider>
      </div>
      <div class="block">
        <span class="demonstration">隐藏 Tooltip</span>
        <el-slider v-model="val3" :show-tooltip="false"></el-slider>
      </div>
      <div class="block">
        <span class="demonstration">格式化 Tooltip</span>
        <el-slider v-model="val4" :format-tooltip="formatTooltip"></el-slider>
      </div>
      <div class="block">
        <span class="demonstration">禁用</span>
        <el-slider v-model="val5" disabled></el-slider>
      </div>

      <h3>离散值</h3>
      <div class="block">
        <span class="demonstration">不显示间断点</span>
        <el-slider v-model="rvalue1" :step="10"></el-slider>
      </div>
      <div class="block">
        <span class="demonstration">显示间断点</span>
        <el-slider v-model="rvalue2" :step="10" show-stops></el-slider>
      </div>

      <h3>展示标记</h3>
      <div class="block">
        <el-slider v-model="rvalue" range :marks="marks"></el-slider>
      </div>
    </el-card>
  </div>
</template>

<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  data() {
    return {
      radio: "1",
      radio2: 3,
      radio3: "上海",
      checked: true,
      checkList: ["选中且禁用", "复选框 A"],
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,
      checkedCities2: ["上海", "北京"],
      checkboxGroup2: ["上海"],
      value: true,
      value1: true,
      value2: "100",
      val1: 0,
      val2: 50,
      val3: 36,
      val4: 48,
      val5: 42,
      rvalue1: 0,
      rvalue2: 0,
      rvalue: [30, 60],
      marks: {
        0: "0°C",
        8: "8°C",
        37: "37°C",
        50: {
          style: {
            color: "#1989FA"
          },
          label: this.$createElement("strong", "50%")
        }
      }
    };
  },
  methods: {
    changeHandle(v) {
      console.log("change", v);
    },
    handleCheckAllChange(val) {
      console.log("handleCheckAllChange", val);
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    formatTooltip(val) {
      return val / 100;
    }
  }
};
</script>

<style lang="scss" scoped>
.el-card {
  margin-bottom: 20px;
}
.block {
  padding: 0 30px;
}
</style>