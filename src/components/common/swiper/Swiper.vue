<!--  -->
<template>
  <div class="swiper-nav">
    <div class="swiper-img">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Swiper',
  }
</script>

<style scoped>
  .swiper-nav{
    width: 100%;
    overflow: hidden;
  }
  .swiper-img{
    width: 1000%;
    overflow: hidden;
    position: relative;
  }
  .swiper-img img{
    width: 10%;
    float: left;
  }
</style>
