<template>
  <div class="abc"></div>
</template>

<script>
import $ from 'jquery'
import * as SpriteSpin from 'spritespin';
export default {
  data() {
    return {
      api: null,
      data: null
    };
  },
  props: ["options"],
  mounted: function() {
    console.log('123',$)
    // create spritespin
    $(this.$el).spritespin(this.options);
    // access api object
    this.api = $(this.$el).spritespin("api");
    // access data object
    this.data = $(this.$el).spritespin("data");
    // watch changes and update spritespin
    this.$watch("options", (newVal, oldVal) => {
      $(this.$el).spritespin(newVal);
    });
  },
  updated: function() {
    // $(this.$el).spritespin(this.options)
  },
  beforeDestroy: function() {
    // destroy spritespin before Vue node is destroyed
    $(this.$el).spritespin("destroy");
  }
};
</script>


<style>
/* .abc {
  width: 300px;
  height: 300px;
  background: red;
} */
</style>