<!--  -->
<template>
  <div id="home">
    <navbar class="home-nav"><div slot="center">Lemon</div></navbar>
    <main-swiper :banners="banners" times="2"></main-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
import MainSwiper from 'components/content/mainSwiper/MainSwiper'
import RecommendView from './childern/RecommendView'

import {getHomeDatas} from 'network/home'


  export default {
    name:'Home',
    components:{
      Navbar,
      MainSwiper,
      RecommendView
    },
    data(){
      return{
        banners:[],
        recommend:[]
      }
    },
    created(){
      getHomeDatas().then(res=>{
        this.banners=res.data.banner.list
        this.recommend=res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  #home{
    overflow: hidden;
  }
  .home-nav{
    background-color: #ff2d4a;
    box-shadow: 0 2px 2px rgba(221, 88, 94, 0.7);
    color: white;
  }
</style>
