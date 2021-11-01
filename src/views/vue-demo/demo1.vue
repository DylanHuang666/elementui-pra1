<template>
  <div>
    <!-- nextTick -->
    <div ref="a">{{obj.a}}--{{obj.b}}--{{arr2}}</div>
    <button @click="addHandle">点击加1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        a: 1,
        b: {
          c: {
            d: 1 //有响应式
          }
        },
        arr: [1, 2, [3, 4, [5, 6]]] //有响应式
      },
      arr2:[1, 2, [3, 4, [5, 6]]]  //有响应式
    };
  },
  created() {
    console.log("created");
    // this.obj.a = this.obj.a + 1;
    // this.obj.a = this.obj.a + 1;
    // this.obj.a = this.obj.a + 1;
    // setTimeout(() => {
    //   this.obj.a = this.obj.a + 1;
    // }, 2000);

    // this.$nextTick(() => {
    //   console.log(this.$refs.a.textContent);
    //   console.log(this.obj.a);
    // });
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log("updated");
  },
  methods: {
    addHandle() {
      // this.obj.a = this.obj.a + 1;
      // this.obj.a = this.obj.a + 1;
      // this.obj.a = this.obj.a + 1;
      // setTimeout(() => {
      //   this.obj.a = this.obj.a + 1;
      // }, 2000);
      // this.obj.b.c.d = 100;
      this.arr2[2][2].push(7);
      console.log("111111", this.obj.a, this.$refs.a.textContent);
      // setTimeout(()=>{
      //   console.log('setTimeout',this.$refs.a.textContent);
      // },500)
      this.$nextTick(() => {
        console.log(this.obj.a);
        console.log(this.$refs.a.textContent);
      });
    }
  }
};
</script>

<style>
</style>