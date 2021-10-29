<template>
  <div>
    <!-- 列表排序过渡 -->
    <div id="flip-list-demo" class="demo">
      <button v-on:click="shuffle">Shuffle</button>
      <transition-group name="flip-list" tag="ul">
        <li v-for="item in items" v-bind:key="item">{{ item }}</li>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
  methods: {
    shuffle: function () {
      // this.items = _.shuffle(this.items)
      this.items = [2, 3, 1, 4, 8, 5, 6, 7, 9]
    }
  }
};
</script>

<style scoped>
.flip-list-move {
  transition: transform 1s;
}
</style>