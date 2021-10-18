<template>
  <div class="tags" @mouseenter="enterHandle" @mouseleave="leaveHandle">
    <!-- <div class="tags-box" :class="dan ? 'a' : 'b'">
      <div class="dd">
        <div v-for="(item, index) in arr1" :key="index">{{ item }}</div>
      </div>
    </div>-->

    <div class="user-img"></div>

    <!-- if else -->
    <div v-if="dan" class="tags-box" key="a">
      <div class="dd">
        <div class="img-box" v-for="(item,index) in arr1" :key="index">
          <img class="img" src="@/assets/svg/u694.svg" alt />
          <span class="tag-name">{{ arr1[index] }}</span>
        </div>
        <!-- <div class="img-box">
          <img class="img" src="@/assets/svg/u694.svg" alt />
          <span class="tag-name">{{ arr1[1] }}</span>
        </div>
        <div class="img-box">
          <img class="img" src="@/assets/svg/u694.svg" alt />
          <span class="tag-name">{{ arr1[2] }}</span>
        </div>
        <div class="img-box">
          <img class="img" src="@/assets/svg/u694.svg" alt />
          <span class="tag-name">{{ arr1[3] }}</span>
        </div>
        <div class="img-box">
          <img class="img" src="@/assets/svg/u694.svg" alt />
          <span class="tag-name">{{ arr1[4] }}</span>
        </div>
        <div class="img-box">
          <img class="img" src="@/assets/svg/u694.svg" alt />
          <span class="tag-name">{{ arr1[5] }}</span>
        </div>
        <div class="img-box">
          <img class="img" src="@/assets/svg/u694.svg" alt />
          <span class="tag-name">{{ arr1[6] }}</span>
        </div>
        <div class="img-box">
          <img class="img" src="@/assets/svg/u694.svg" alt />
          <span class="tag-name">{{ arr1[7] }}</span>
        </div>
        <div class="img-box">
          <img class="img" src="@/assets/svg/u694.svg" alt />
          <span class="tag-name">{{ arr1[8] }}</span>
        </div>
        <div class="img-box">
          <img class="img" src="@/assets/svg/u694.svg" alt />
          <span class="tag-name">{{ arr1[9] }}</span>
        </div>-->
      </div>
    </div>
    <div v-else class="tags-box" key="b">
      <div class="dd">
        <!-- <div v-for="(item, index) in arr1" :key="index">
          <img class="img" src="@/assets/svg/u694.svg" alt="" />
          <span class="tag-name">{{ item }}</span>
        </div>-->
        <div class="img-box" v-for="(item,index) in arr1" :key="index">
          <img class="img" src="@/assets/svg/u694.svg" alt />
          <span class="tag-name">{{ arr1[index] }}</span>
        </div>
        <!-- <div class="img-box">
          <img class="img" src="@/assets/svg/u694.svg" alt />
          <span class="tag-name">{{ arr1[1] }}</span>
        </div>
        <div class="img-box">
          <img class="img" src="@/assets/svg/u694.svg" alt />
          <span class="tag-name">{{ arr1[2] }}</span>
        </div>
        <div class="img-box">
          <img class="img" src="@/assets/svg/u694.svg" alt />
          <span class="tag-name">{{ arr1[3] }}</span>
        </div>
        <div class="img-box">
          <img class="img" src="@/assets/svg/u694.svg" alt />
          <span class="tag-name">{{ arr1[4] }}</span>
        </div>
        <div class="img-box">
          <img class="img" src="@/assets/svg/u694.svg" alt />
          <span class="tag-name">{{ arr1[5] }}</span>
        </div>
        <div class="img-box">
          <img class="img" src="@/assets/svg/u694.svg" alt />
          <span class="tag-name">{{ arr1[6] }}</span>
        </div>
        <div class="img-box">
          <img class="img" src="@/assets/svg/u694.svg" alt />
          <span class="tag-name">{{ arr1[7] }}</span>
        </div>
        <div class="img-box">
          <img class="img" src="@/assets/svg/u694.svg" alt />
          <span class="tag-name">{{ arr1[8] }}</span>
        </div>
        <div class="img-box">
          <img class="img" src="@/assets/svg/u694.svg" alt />
          <span class="tag-name">{{ arr1[9] }}</span>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dan: true, //是否是单数页
      currentPage: 1, //当前页
      tagsAll: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], //总数据
      allNum: 0, //总数据数值
      allPage: 1, //总页数值
      arr1: [], //单页展示的数据
      timer: null //翻转定时器
    };
  },
  created() {
    //请求获取到用户所有标签
    this.arr1 = this.tagsAll.slice(0, 10);
    this.allNum = this.tagsAll.length;
    this.allPage = Math.ceil(this.allNum / 10);
    // console.log('this.allPage',this.allPage)
  },
  methods: {
    //鼠标移入执行函数
    enterHandle() {
      console.log(111);
      if (this.timer) {
        clearInterval(this.timer);
      }
      // setTimeout(() => {
      //   this.arr1 = this.tagsAll.slice(
      //     10 * this.currentPage,
      //     10 * (this.currentPage + 1)
      //   );
      // }, 2000);
      this.timer = setInterval(() => {
        if (this.currentPage == this.allPage) {
          this.currentPage = 1;
        } else {
          this.currentPage = this.currentPage + 1;
        }
        this.dan = !this.dan;
        // if (this.dan) {
        //   this.arr1 = [1, 2, 3, 4, 5, 6, 7];
        //   console.log("true", this.arr1);
        // } else {
        //   this.arr1 = [11, 12, 13, 14, 15, 16, 17];
        //   console.log("false", this.arr1);
        // }
        this.arr1 = this.tagsAll.slice(
          10 * (this.currentPage - 1),
          10 * this.currentPage
        );
        // setTimeout(() => {
        //   if (this.currentPage == this.allPage) {
        //     this.currentPage = 1;
        //   } else {
        //     this.currentPage = this.currentPage + 1;
        //   }
        //   this.arr1 = this.tagsAll.slice(
        //     10 * (this.currentPage - 1),
        //     10 * this.currentPage
        //   );
        // }, 2000);
        console.log("this.currentPage", this.currentPage);
        console.log("this.arr1", this.arr1);
      }, 3000);
    },
    // enterHandle() {
    //   timer = setInterval(() => {
    //     //开始转

    //     this.dan = !this.dan;
    //     if (this.dan) {
    //       this.arr1 = [1, 2, 3, 4, 5, 6, 7];
    //     } else {
    //       this.arr1 = [11, 12, 13, 14, 15, 16];
    //     }
    //   }, 6000);
    // },
    leaveHandle() {
      clearInterval(this.timer);
      console.log("clearInterval");
    }
  }
};
</script>

<style lang="scss">
.tags {
  width: 892px;
  height: 360px;
  border: 1px solid rgb(157, 255, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  .tags-box {
    width: 892px;
    height: 360px;
    // border: 1px solid red;
    // transform-style: preserve-3d;
  }
  .tags-box:hover {
    // transform: rotateY(360deg);
    // transition: all 3s;
    // animation: name duration timing-function delay iteration-count direction fill-mode;
    // animation: tag 2s infinite alternate;
  }
}
.tags:hover .tags-box {
  // transform: rotateY(180deg);
  // transition: all 2s;
  animation: tag 2s ease-out 1s infinite alternate forwards;
}
// .tags:hover .tags-box2 {
//   // transform: rotateY(180deg);
//   // transition: all 3s;
//   animation: tag 4s ease-out infinite alternate forwards;
// }
// .tags:hover .b .dd {
//   transform: rotateY(180deg);
//   // transform: rotate3d(0,1,0,180deg);
// }
@keyframes tag {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(-180deg);
  }
}
.dd {
  width: 892px;
  height: 360px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.dd div {
  // width: 100px;
  // height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
}
.img {
  width: 100px;
  height: 100px;
}
.tag-name {
  position: absolute;
  font-size: 12px;
  padding: 0 8px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipise;
  -webkit-line-clamp: 1;
  word-wrap: break-word;
  white-space: normal;
  -webkit-box-orient: vertical;
}
.user-img {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: aqua;
  position: absolute;
}
.img-box:nth-child(1) {
  position: absolute;
  top: 20px;
  left: 250px;
  img {
    width: 87px;
    height: 87px;
    transform: rotate(80deg);
  }
}
.img-box:nth-child(2) {
  position: absolute;
  top: 20px;
  right: 250px;
  img {
    width: 87px;
    height: 87px;
    transform: rotate(-170deg);
  }
}
.img-box:nth-child(3) {
  position: absolute;
  top: 130px;
  left: 160px;
  img {
    width: 96px;
    height: 96px;
    transform: rotate(50deg);
  }
}
.img-box:nth-child(4) {
  position: absolute;
  top: 130px;
  right: 160px;
  img {
    width: 96px;
    height: 96px;
    transform: rotate(-140deg);
  }
}
.img-box:nth-child(5) {
  position: absolute;
  bottom: 20px;
  left: 240px;
  img {
    width: 100px;
    height: 100px;
  }
}
.img-box:nth-child(6) {
  position: absolute;
  bottom: 20px;
  right: 240px;
  img {
    width: 100px;
    height: 100px;
    transform: rotate(-90deg);
  }
}
.img-box:nth-child(7) {
  position: absolute;
  top: 30px;
  left: 40px;
  img {
    width: 110px;
    height: 110px;
    transform: rotate(60deg);
  }
}
.img-box:nth-child(8) {
  position: absolute;
  top: 30px;
  right: 40px;
  img {
    width: 110px;
    height: 110px;
    transform: rotate(-150deg);
  }
}
.img-box:nth-child(9) {
  position: absolute;
  top: 200px;
  left: 40px;
  img {
    width: 120px;
    height: 120px;
    transform: rotate(35deg);
  }
}
.img-box:nth-child(10) {
  position: absolute;
  top: 200px;
  right: 40px;
  img {
    width: 120px;
    height: 120px;
    transform: rotate(-125deg);
  }
}
</style>



