<template>
  <div>
    <!-- 列表过渡 -->
    <div id="list-demo">
      <button @click="add">Add</button>
      <button @click="remove">Remove</button>
      <transition-group name="list" tag="p">
        <span v-for="item in items" :key="item" class="list-item">{{ item }}</span>
      </transition-group>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    };
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.items.length);
    },
    add() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove() {
      this.items.splice(this.randomIndex(), 1);
    },
  }
};
</script>

<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
  transition: all 1s;
}

.list-leave-active {
  position: absolute; /* 删除时其他元素也同时水平移动 */
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
/* 位置移动过渡 */

</style>