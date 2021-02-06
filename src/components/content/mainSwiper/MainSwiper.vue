<!--  -->
<template>
    <swiper>
      <a :href="item.link" v-for="item in banners">
        <img :src="item.image" :alt="item.title" @load="imageLoad">
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
    data(){
      return{
        loadFlage:true
      }
    },
    components:{
      Swiper
    },
    methods:{
      imageLoad(){
        if(this.loadFlage){
          this.$emit('swiperLoad')
          this.loadFlage=false
        }
      }
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
