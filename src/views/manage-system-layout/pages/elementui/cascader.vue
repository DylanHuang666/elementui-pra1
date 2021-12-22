<template>
  <div>
    <el-card>
      <h3>基础用法</h3>
      <!-- 
        :props="{ expandTrigger: 'hover' }" 可以定义展开子级菜单的触发方式为hover 
        :show-all-levels="false" 属性show-all-levels定义了是否显示完整的路径，将其赋值为false则仅显示最后一级
      -->
      <el-cascader v-model="value" :options="options" @change="handleChange" clearable></el-cascader>
    </el-card>
    <el-card>
      <h3>多选</h3>
      <!-- collapse-tags 在开启多选模式后，默认情况下会展示所有已选中的选项的Tag，你可以使用collapse-tags来折叠Tag -->
      <el-cascader
        v-model="value"
        :options="options"
        :props="props"
        @change="handleChange"
        clearable
      ></el-cascader>
    </el-card>
    <el-card>
      <h3>选择任意一级选项</h3>
      <!-- 在单选模式下，你只能选择叶子节点；而在多选模式下，勾选父节点真正选中的都是叶子节点。
      启用该功能后，可让父子节点取消关联，选择任意一级选项。-->
      <!-- 可通过 props.checkStrictly = true 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的。 -->
      <el-cascader
        v-model="value"
        :options="options"
        :props="{ checkStrictly: true }"
        clearable
        @change="handleChange"
      ></el-cascader>
    </el-card>
    <el-card>
      <h3>动态加载</h3>
      <!-- 通过lazy开启动态加载，并通过lazyload来设置加载数据源的方法。lazyload方法有两个参数，
      第一个参数node为当前点击的节点，第二个resolve为数据加载完成的回调(必须调用)。为了更准确的显示节点的状态，
      还可以对节点数据添加是否为叶子节点的标志位 (默认字段为leaf，可通过props.leaf修改)，
      否则会简单的以有无子节点来判断是否为叶子节点。-->
      <el-cascader :props="props2"></el-cascader>
    </el-card>
    <el-card>
      <h3>可搜索</h3>
      <el-cascader placeholder="试试搜索：指南" :options="options" filterable></el-cascader>
    </el-card>
    <el-card>
      <h3>自定义节点内容</h3>
      <el-cascader :options="options">
        <template slot-scope="{ node, data }">
          <span>{{ data.label }}</span>
          <span v-if="!node.isLeaf">({{ data.children.length }})</span>
        </template>
      </el-cascader>
    </el-card>
  </div>
</template>

<script>
let id = 0;
export default {
  data() {
    return {
      value: [],
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航"
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航"
                }
              ]
            }
          ]
        },
        {
          value: "zujian",
          label: "组件",
          disabled: true,
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局"
                },
                {
                  value: "color",
                  label: "Color 色彩"
                },
                {
                  value: "typography",
                  label: "Typography 字体"
                },
                {
                  value: "icon",
                  label: "Icon 图标"
                },
                {
                  value: "button",
                  label: "Button 按钮"
                }
              ]
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框"
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框"
                },
                {
                  value: "input",
                  label: "Input 输入框"
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器"
                },
                {
                  value: "select",
                  label: "Select 选择器"
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器"
                },
                {
                  value: "switch",
                  label: "Switch 开关"
                },
                {
                  value: "slider",
                  label: "Slider 滑块"
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器"
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器"
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器"
                },
                {
                  value: "upload",
                  label: "Upload 上传"
                },
                {
                  value: "rate",
                  label: "Rate 评分"
                },
                {
                  value: "form",
                  label: "Form 表单"
                }
              ]
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格"
                },
                {
                  value: "tag",
                  label: "Tag 标签"
                },
                {
                  value: "progress",
                  label: "Progress 进度条"
                },
                {
                  value: "tree",
                  label: "Tree 树形控件"
                },
                {
                  value: "pagination",
                  label: "Pagination 分页"
                },
                {
                  value: "badge",
                  label: "Badge 标记"
                }
              ]
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告"
                },
                {
                  value: "loading",
                  label: "Loading 加载"
                },
                {
                  value: "message",
                  label: "Message 消息提示"
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框"
                },
                {
                  value: "notification",
                  label: "Notification 通知"
                }
              ]
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单"
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页"
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑"
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单"
                },
                {
                  value: "steps",
                  label: "Steps 步骤条"
                }
              ]
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框"
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示"
                },
                {
                  value: "popover",
                  label: "Popover 弹出框"
                },
                {
                  value: "card",
                  label: "Card 卡片"
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯"
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板"
                }
              ]
            }
          ]
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components"
            },
            {
              value: "sketch",
              label: "Sketch Templates"
            },
            {
              value: "jiaohu",
              label: "组件交互文档"
            }
          ]
        }
      ],
      props: { multiple: true },
      props2: {
        lazy: true,
        lazyLoad(node, resolve) {
          const { level } = node;
          setTimeout(() => {
            const nodes = Array.from({ length: level + 1 }).map(item => ({
              value: ++id,
              label: `选项${id}`,
              leaf: level >= 2
            }));
            // 通过调用resolve将子节点数据返回，通知组件数据加载完成
            resolve(nodes);
          }, 1000);
        }
      }
    };
  },
  methods: {
    handleChange(value) {
      console.log(value); //各级选中的value数组['zhinan', 'shejiyuanze', 'yizhi'],多选的话是二位数组
    }
  }
};
</script>

<style lang="scss" scoped>
.el-card {
  margin-bottom: 20px;
}
</style>