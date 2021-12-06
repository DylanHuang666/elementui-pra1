<template>
  <div>
    <div>
      <span>基础使用</span>
      <el-calendar v-model="value" class="my my-calendar"></el-calendar>
    </div>
    <div>
      <span>自定义内容</span>
      <el-calendar class="my-calendar">
      <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
      <template slot="dateCell" slot-scope="{date, data}">
        <p
          :class="data.isSelected ? 'is-selected' : ''"
        >{{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}</p>
      </template>
    </el-calendar>
    </div>
    <div>
      <!-- 设置 range 属性指定日历的显示范围。开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月 -->
      <span>自定义范围</span>
      <el-calendar class="my-calendar" :range="['2019-03-04', '2019-03-24']"></el-calendar>
    </div>   
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date()
    };
  },
  created(){
    console.log('000',this.value)
    setTimeout(() => {    
      console.log('111',this.value) //Sat Dec 11 2021 08:00:00 GMT+0800 (中国标准时间)
    }, 5000);
  },
  mounted(){
    const that = this
    let arr = document.querySelectorAll('.my.my-calendar td')
    // let arr = this.$refs.c.querySelectorAll('.my-calendar td')
    // console.log('arr',arr)
    //el-calendar不提供日期改变的事件，那我们自己给每一个日期加个点击事件
    arr.forEach((item,index)=>{
      // console.log('this',this)
      item.onclick = function(){
        // console.log('this.value',this,this.value)
        console.log('that.value',that.value)
      }
    })
  }
};
</script>

<style>
.my-calendar {
  width: 600px;
}
.is-selected {
  color: #1989fa;
}
</style>