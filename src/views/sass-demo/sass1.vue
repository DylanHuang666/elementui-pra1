<template>
  <div class="scss">
    <span>scss</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$bgcolor: blue;
$basecolor: red;
.scss {
  span {
    color: $basecolor;
    // background: $bgcolor;
    &:hover{
      color: purple;
    }
  }
}
</style>