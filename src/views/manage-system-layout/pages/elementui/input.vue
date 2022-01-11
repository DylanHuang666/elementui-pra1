<template>
  <div>
    <el-card>
      <h2>输入框</h2>
      <el-card>
        <!-- show-password
          clearable
          disabled
          size
        -->
        <el-input v-model="input" placeholder="请输入内容" clearable></el-input>
      </el-card>
      <el-card>
        <div class="demo-input-suffix">
          属性方式：
          <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input1"></el-input>
          <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2"></el-input>
        </div>
        <div class="demo-input-suffix" style="margin-top:10px;">
          slot 方式：
          <el-input placeholder="请选择日期" v-model="input3">
            <i slot="suffix" class="el-input__icon el-icon-date"></i>
          </el-input>
          <el-input placeholder="请输入内容" v-model="input4">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
      </el-card>
      <el-card>
        <!-- 文本域高度可通过 rows 属性控制 
      通过设置 autosize 属性可以使得文本域的高度能够根据文本内容自动进行调整，
      并且 autosize 还可以设定为一个对象，指定最小行数和最大行数。
      maxlength="30"
      show-word-limit 
        -->
        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>

        <h3>高度自适应</h3>
        <el-input
          type="textarea"
          autosize
          placeholder="请输入内容"
          v-model="textarea1"
          maxlength="30"
          show-word-limit
        ></el-input>
        <div style="margin: 20px 0;"></div>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入内容"
          v-model="textarea2"
        ></el-input>
      </el-card>
      <el-card>
        <div>
          <el-input placeholder="请输入内容" v-model="input5">
            <template slot="prepend">Http://</template>
          </el-input>
        </div>
        <div style="margin-top: 15px;">
          <el-input placeholder="请输入内容" v-model="input6">
            <template slot="append">.com</template>
          </el-input>
        </div>
        <div style="margin-top: 15px;">
          <el-input placeholder="请输入内容" v-model="input7" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </el-card>
    </el-card>

    <el-card>
      <h3>InputNumber 计数器</h3>
      <!-- step-strictly属性接受一个Boolean。如果这个属性被设置为true，则只能输入步数的倍数。 
          设置 precision 属性可以控制数值精度，接收一个 Number。
          size 大小
      -->
      <el-input-number
        v-model="num"
        @change="handleChange"
        :step="2"
        step-strictly
        :precision="2"
        :min="1"
        :max="10"
        label="描述文字"
      ></el-input-number>

      <h3>按钮位置</h3>
      <el-input-number
        v-model="num2"
        controls-position="right"
        @change="handleChange"
        :min="1"
        :max="10"
      ></el-input-number>
    </el-card>

    <el-card>
      <h2>选择器</h2>
      <el-card>
        <h3>基础</h3>
        <el-select v-model="value" placeholder="请选择" clearable>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-card>
      <el-card>
        <h3>多选</h3>
        <!-- multiple
            collapse-tags 
        -->
        <el-select v-model="value1" multiple placeholder="请选择" @change="multipleChange">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>

        <el-select
          v-model="value2"
          multiple
          collapse-tags
          style="margin-left: 20px;"
          placeholder="请选择"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-card>
      <el-card>
        <h3>自定义模板</h3>
        <el-select v-model="value3" placeholder="请选择">
          <el-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>
      </el-card>
      <el-card>
        <h3>分组</h3>
        <el-select v-model="value4" placeholder="请选择">
          <el-option-group v-for="group in options" :key="group.label" :label="group.label">
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-option-group>
        </el-select>
      </el-card>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      textarea: "",
      textarea1: "",
      textarea2: "",
      input5: "",
      input6: "",
      input7: "",
      select: "",
      num: 1,
      num2: 1,
      //选择器
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      value1: [],
      value2: [],
      cities: [
        {
          value: "Beijing",
          label: "北京"
        },
        {
          value: "Shanghai",
          label: "上海"
        },
        {
          value: "Nanjing",
          label: "南京"
        },
        {
          value: "Chengdu",
          label: "成都"
        },
        {
          value: "Shenzhen",
          label: "深圳"
        },
        {
          value: "Guangzhou",
          label: "广州"
        }
      ],
      value3: "",
      options: [
        {
          label: "热门城市",
          options: [
            {
              value: "Shanghai",
              label: "上海"
            },
            {
              value: "Beijing",
              label: "北京"
            }
          ]
        },
        {
          label: "城市名",
          options: [
            {
              value: "Chengdu",
              label: "成都"
            },
            {
              value: "Shenzhen",
              label: "深圳"
            },
            {
              value: "Guangzhou",
              label: "广州"
            },
            {
              value: "Dalian",
              label: "大连"
            }
          ]
        }
      ],
      value4: ""
    };
  },
  methods: {
    handleChange(value) {
      //改变后的值
      console.log("handleChange", value);
    },
    multipleChange(v) {
      console.log("multipleChange", v);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-card {
  margin-bottom: 20px;
}
.el-input {
  width: 300px;
}
.el-textarea {
  width: 300px;
}
</style>