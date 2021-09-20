<template>
  <div>
    <!-- 
    el-table属性：
    data
    stripe
    border
    row-class-name
    height
    max-height
    highlight-current-row  配套current-change事件来管理选中时触发的事件
    default-sort
    -->
    <el-table
      ref="multipleTable"
      border
      :row-class-name="tableRowClassName"
      :data="tableData"
      height="300"
      style="width: 100%"
      highlight-current-row
      @current-change="handleCurrentChange"
      @selection-change="handleSelectionChange"
      :default-sort="{prop: 'date', order: 'descending'}"
    >
      <!-- 
    el-table-column属性:
    prop
    label
    width
    fixed
    type="index" // index, selection
      -->
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="index" label="序号" width="50"></el-table-column>
      <el-table-column width="150" prop="date" label="日期" sortable></el-table-column>
      <!-- 也可以这样写 -->
      <!-- <el-table-column width="150" label="日期">
      <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>-->
      <el-table-column width="150" prop="name" label="姓名"></el-table-column>
      <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <!-- scope.$index: 第n行 -->
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      tableData2: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  mounted() {
    // console.log('tableData',this.tableData)
  },
  methods: {
    //一开始就执行，而且执行了很多次？
    tableRowClassName({ row, rowIndex }) {
      // console.log("row", row);
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    //行删除操作
    deleteRow(index, rows) {
      //index:第n行, rows:全部每行数据对象数组tableData
      // console.log('deleteRow',index, rows)
      rows.splice(index, 1);
    },
    // 行选中（点击）触发
    handleCurrentChange(currentRow, oldCurrentRow) {
      // currentRow: 当前选中行数据对象
      // oldCurrentRow： 之前的选中行数据对象
      console.log("行选中（点击）触发", currentRow, oldCurrentRow);
      // this.currentRow = val;
    },
    setCurrent(row) {
      //手动选中第几行 row传过来的行数据对象 不传时是取消所有选中
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleSelectionChange(val) {
      //val: 选中的行数据对象数组
      console.log("多选", val);
      // this.multipleSelection = val;
    },
    //切换，内部会记录状态
    toggleSelection(rows) {
      //rows行数据对象数组 不传时就都不选中
      if (rows) {
        rows.forEach(row => {
          console.log(1);
          this.$refs.multipleTable.toggleRowSelection(row); //一个个地去选中，执行这个也触发了handleSelectionChange
        });
      } else {
        console.log(2);
        this.$refs.multipleTable.clearSelection();
      }
    },
    formatter(row, column) {
      // console.log('formatter',row, column)
      return row.address;
    }
  }
};
</script>

<style lang="scss">
.el-table .warning-row {
  background: red;
}

.el-table .success-row {
  background: blue;
}
</style>>
