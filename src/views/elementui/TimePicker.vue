<template>
  <div>
    <div>TimePicker</div>
    <div>
      <el-time-select
        v-model="value"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30',
        }"
        placeholder="选择时间"
        @change="timePickerChange2"
      >
      </el-time-select>
    </div>
    <div>
      <el-time-picker
        v-model="value1"
        :picker-options="{
          selectableRange: '18:30:00 - 20:30:00',
        }"
        placeholder="任意时间点"
        @change="timePickerChange3"
      >
      </el-time-picker>
      <el-time-picker
        arrow-control
        v-model="value2"
        :picker-options="{
          selectableRange: '18:30:00 - 20:30:00',
        }"
        placeholder="任意时间点"
      >
      </el-time-picker>
    </div>
    <div>
      <el-time-picker
        is-range
        v-model="value3"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        placeholder="选择时间范围"
        @change="timePickerChange"
      >
      </el-time-picker>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      value1: new Date(2016, 9, 10, 18, 40),
      value2: new Date(2016, 9, 10, 18, 40),
      value3: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
    };
  },
  mounted() {
    console.log(this.value1);
  },
  methods: {
    timePickerChange() {
      console.log('timePickerChange',this.value3)
    },
    timePickerChange2() {
      console.log('timePickerChange2',this.value)
    },
    timePickerChange3() {
      console.log('timePickerChange3',this.value1)
    },
  },
};
</script>

<style>
</style>