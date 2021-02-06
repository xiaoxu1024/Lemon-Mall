<!--  -->
<template>
  <swiper>
    <div v-for="item in topImages">
      <img :src="item">
    </div>
  </swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'
  export default {
    name:'DetailSwiper',
    props:{
      topImages:{
        type:Array,
        default(){
          return []
        }
      },
      times:[Number,String]
    },
    data () {
      return {
      }
    },
    components:{
      Swiper
    },
    mounted(){
      var boximg=document.getElementsByClassName('swiper-img')[0];
      var img=boximg.getElementsByTagName('img');
      var index=0
      var myVar = setInterval(()=>{
        boximg.style.left= index*(-100)+'%'
        if(index>=img.length-1){
          index=-1
        }
        index++;
      }, this.times*1000);
    }
  }
</script>

<style scoped>
</style>
