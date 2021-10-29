<template>
  <div>
    <!-- 显示隐藏 -->
    <button @click="clickHandle">点击切换</button>
    <transition name="fade">
      <div class="card card1" v-if="isShowCard1"></div>
    </transition>
    <!-- <transition name="fade" mode="out-in">
      <div class="card card1" v-if="isShowCard1" key="1"></div>
      <div class="card card1" v-else key="2"></div>
    </transition> -->
    <!-- <div class="card card1" v-show="!isShowCard1" key="2"></div> -->
    <!-- <transition name="slide-fade">
      <div class="card card2" v-show="isShowCard2"></div>
    </transition>
    <div id="demo">
      <button @click="show = !show">Toggle show</button>
      <transition name="bounce">
        <div v-if="show" class="card card3">
          
        </div>
      </transition>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowCard1: true,
      isShowCard2: true,
      show: true
    };
  },
  methods: {
    clickHandle() {
      this.isShowCard1 = !this.isShowCard1;
      this.isShowCard2 = !this.isShowCard2;
    }
  }
};
</script>

<style>
.card {
  width: 100px;
  height: 100px;
}
.card1 {
  background: olivedrab;
}
.card2 {
  background: orchid;
}
.card3{
  background: powderblue;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  /* transition: all 0.8s ease-out; */
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>