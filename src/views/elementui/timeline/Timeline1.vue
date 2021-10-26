<template>
  <div>
    <el-timeline :reverse="reverse">
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.timestamp"
        :icon="activity.icon"
        :type="activity.type"
        :size="activity.size"
        :color="activity.color"
      >{{activity.content}}</el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reverse: false,
      activities: [
        {
          content: "活动按期开始",
          timestamp: "2018-04-15",
          type: 'primary',
          icon: 'el-icon-more',
          size: 'large',
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "创建成功",
          timestamp: "2018-04-11",
          color: '#0bbd87'
        }
      ]
    };
  }
};
</script>

<style>
</style>