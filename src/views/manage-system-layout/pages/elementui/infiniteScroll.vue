<template>
  <div>
    <div>
      1.基础用法：
      <!-- 在要实现滚动加载的列表上上添加v-infinite-scroll，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。 -->
      <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
        <li v-for="(i,k) in count" class="infinite-list-item" :key="k">{{ i }}</li>
      </ul>
    </div>

    <div>
      2.禁用加载:
      <!-- infinite-scroll-disabled是否禁用加载 -->
      <div class="infinite-list-wrapper" style="overflow:auto">
        <ul class="list" v-infinite-scroll="load2" infinite-scroll-disabled="disabled">
          <li v-for="(i,k) in count2" class="list-item" :key="k">{{ i }}</li>
        </ul>
        <p v-if="loading">加载中...</p>
        <p v-if="noMore">没有更多了</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      count2: 10,
      loading: false
    };
  },
  computed: {
    noMore() {
      return this.count2 >= 20;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  methods: {
    load() {
      this.count += 2;
    },
    load2() {
      this.loading = true;
      setTimeout(() => {
        this.count2 += 2;
        this.loading = false;
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
.infinite-list {
  width: 300px;
  height: 200px;
  border: 1px solid #666;
  li {
    margin: 10px 0;
    background: yellow;
  }
}
.infinite-list-wrapper {
  width: 300px;
  height: 200px;
  border: 1px solid #666;
  li {
    margin: 10px 0;
    background: yellow;
  }
  p {
    text-align: center;
  }
}
</style>