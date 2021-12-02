<template>
  <div>
    <!-- <clock /> -->
    <titleBar :options="options" />
  </div>
</template>

<script>
import clock from "../components/clock";
import titleBar from "@/components/titleBar";

export default {
  components: {
    clock,
    titleBar
  },
  data() {
    return {
      options: {
        title: "标题333",
        leftColor: "red",
        leftWith: "10",
        fontSize: "16",
        space: "20"
      }
    };
  }
};
</script>

<style>
</style>