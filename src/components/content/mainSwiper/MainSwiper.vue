<!--  -->
<template>
    <swiper>
      <a :href="item.link" v-for="item in banners">
        <img :src="item.image" :alt="item.title">
      </a>
    </swiper>
</template>

<script>
  import Swiper from 'components/common/swiper/Swiper'
  export default {
    name:'MainSwiper',
    props:{
      banners:{
        type:Array,
        default:()=>{
          return []
        }
      },
      times:[Number,String]
    },
    components:{
      Swiper
    },
    mounted(){
      var boximg=document.getElementsByClassName('swiper-img')[0];
      var img=boximg.getElementsByTagName('img');
      var index=0
      var myVar = setInterval(()=>{
        index++;
        boximg.style.left= index*(-100)+'%'
        if(index==img.length-1){
          // clearInterval(myVar)
          index=-1
        }
      }, this.times*1000);
    }
  }
</script>

<style scoped>

</style>
