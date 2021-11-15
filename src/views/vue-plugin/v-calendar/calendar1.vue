<template>
  <div class="my-calendar">
    <!-- 
      属性：
      1.:from-page="{ month: 1, year: 2019 }" 指定日历
    -->
    <v-calendar :attributes="attributes" @dayclick="onDayClick" />
    <!-- {{days}} -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: [],
      attributes: [
        {
          key: "today",
          dates: new Date(),
          // highlight: "blue", //想设置其他颜色，只能颜色英文字符串
          highlight: {
            color: "orange", //默认'blue'
            fillMode: "light" //默认'solid' solid, light and outline
          },
          dot: "pink",
          // bar: true,
          popover: {
            label: '哈哈哈哈哈哈哈哈哈哈哈哈',
            hideIndicator: true,
          }
        },
        {
          key: "date2",
          dates: new Date(2021, 10, 2),
          // highlight: "blue", //想设置其他颜色，只能颜色英文字符串
          highlight: {
            color: "orange", //默认'blue'
            fillMode: "light" //默认'solid' solid, light and outline
          },
          dot: "orange",
          // bar: true,
          // popover: {}
        },
        {
          key: "date4",
          dates: [new Date(2021, 10, 2),new Date(2021, 10, 3)],
          // highlight: "blue", //想设置其他颜色，只能颜色英文字符串
          // highlight: {
          //   color: "blue", //默认'blue'
          //   fillMode: "light" //默认'solid' solid, light and outline
          // },
          dot: "blue",
          // bar: true,
          popover: {
            label: '哈哈哈哈哈哈哈哈哈哈哈哈',
          }
        },
        {
          key: "date3",
          dates: { start: new Date(2021, 10, 14), end: new Date(2021, 10, 18) },
          highlight: {
            start: { fillMode: 'outline' },
            base: { fillMode: 'light' },
            end: { fillMode: 'outline' }
          },         
        },
      ]
    };
  },
  // computed: {
  //   dates() {
  //     return this.days.map(day => day.date);
  //   },
  //   attributes() {
  //     return this.dates.map(date => ({
  //       highlight: true,
  //       dates: date
  //     }));
  //   }
  // },
  methods: {
    onDayClick(day) {
      console.log("day", day);
      // const idx = this.days.findIndex(d => d.id === day.id);
      // if (idx >= 0) {
      //   this.days.splice(idx, 1);
      // } else {
      //   this.days.push({
      //     id: day.id,
      //     date: day.date
      //   });
      // }
    }
  }
};
</script>

<style lang="scss">
// 想改组件内样式，scoped+/deep/ 不生效，只能这样不用scoped+/deep/
.my-calendar {
  .vc-container {
    border-color: rgb(70, 16, 16);
  }
}
</style>