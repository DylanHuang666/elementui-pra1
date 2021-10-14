<template>
  <div class="abc">
    <flipper width="270px" height="300px" :flipped="flipped" @click="onClick" class="abc">
      <div slot="front">Frontface</div>

      <div slot="back">Backface</div>
    </flipper>
  </div>
</template>

<script>
import Flipper from "vue-flipper";

export default {
  components: { Flipper },
  data() {
    return {
      flipped: false
    };
  },
  methods: {
    onClick() {
      this.flipped = !this.flipped;
    }
  }
};
</script>

<style src="vue-flipper/dist/vue-flipper.css">

</style>
<style>
  .abc{
  width: 300px;
  height: 300px;
  background: red;
}
</style>