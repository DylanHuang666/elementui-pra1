<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane v-for="(item,index) in detail.group" :key="index" :label="`素材${index + 1}`">
        {{`素材${index + 1}`}}
        {{list[index].text}}
      </el-tab-pane>
    </el-tabs>
    <div>{{arr}}</div>
  </div>
</template>

<script>
//1.强制刷新视图
//2.同步改变数据多次，最后只刷一次；异步改变一次刷一次
//3.this.$set
//4.beforeCreate --> watch(immediate: true) --> created --> mounted --> watch --> beforeUpdate --> updated
export default {
  data() {
    return {
      detail: {
        // group: [
        //   {
        //     title: "标题1"
        //   },
        //   {
        //     title: "标题2"
        //   }
        // ]
      },
      list: [],
      arr: [],
      obj: {
        a: 1
      }
    };
  },
  watch: {
    detail: {
      handler(v) {
        console.log("watch", v);
      },
      immediate: true
    }
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    let lll = this.list;
    console.log("updated", lll, this.detail);
  },
  mounted() {
    console.log(
      "mounted--------------------------------------------------------------------------------"
    );

    this.detail = {
      group: [
        {
          title: "标题1"
        },
        {
          title: "标题2"
        },
        {
          title: "标题3"
        }
      ]
    };
    console.log("1111111");
    // let l = [];
    this.detail.group.forEach((i, k) => {
      // this.list.push({
      //   text: ""
      // });
      this.$set(this.list, k, {
        text: "",
        i:""
      });
      this.$set(this.arr, k, k);
    });
    // this.list = l
    console.log("22222222",this.list,this.arr);
    this.detail.group.forEach((i, k) => {
      if (k == 0) {
        setTimeout(() => {
          // this.list.push({
          //   text:`图片${k+1}`
          // })
          console.log(555, k);
          this.$set(this.list, k, {
            text: `图片${k + 1}`,
            i:k
          });
          // this.list[k] = {
          //   text: `图片${k + 1}`,
          //   i:k
          // };
          this.$set(this.arr, k, k+1);
          // this.arr[k] = k+1
          console.log("this.list", this.list,this.arr);
          // l[k] = {
          //   text: `图片${k + 1}`
          // };
          // console.log(666, l);
          // this.list = l;
          // this.$forceUpdate()
        }, 800);
      } else if (k == 1) {
        setTimeout(() => {
          // this.list.push({
          //   text:`图片${k+1}`
          // })
          console.log(555, k);
          this.$set(this.list, k, {
            text: `图片${k + 1}`,
            i:k
          });
          this.$set(this.arr, k, k+1);
          // this.list[k] = {
          //   text: `图片${k + 1}`,
          //   i:k
          // };
          // this.arr[k] = k+1
          console.log("this.list", this.list,this.arr);
          // l[k] = {
          //   text: `图片${k + 1}`
          // };
          // console.log(666, l);
          // this.list = l;
          // this.$forceUpdate()
        }, 1500);
      } else {
        setTimeout(() => {
          // this.list.push({
          //   text:`图片${k+1}`
          // })
          console.log(555, k);
          this.$set(this.list, k, {
            text: `图片${k + 1}`,
            i:k
          });
          this.$set(this.arr, k, k+1);
          // this.list[k] = {
          //   text: `图片${k + 1}`,
          //   i:k
          // };
          // this.arr[k] = k+1
          console.log("this.list", this.list,this.arr);
          // l[k] = {
          //   text: `图片${k + 1}`
          // };
          // console.log(666, l);
          // this.list = l;
          // this.$forceUpdate()
        }, 1000);
      }
    });
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>