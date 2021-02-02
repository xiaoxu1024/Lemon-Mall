<!--  -->
<template>
  <div id="home">
    <navbar class="home-nav"><div slot="center">Lemon</div></navbar>
    <Scroll class="content" ref="scroll" @getPosition="getPosition" :probeType="3" @reRequestGoods="reRequestGoods">
      <main-swiper :banners="banners" times="2"></main-swiper>
      <recommend-view :recommend="recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-contro class="home-tab-contro" 
        :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-contro>
      <goods :goods="goodsShow"/>
    </Scroll>
    <TopBack @click.native="backClick" v-show="isShowBackTop"></TopBack>

  
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
import MainSwiper from 'components/content/mainSwiper/MainSwiper'
import RecommendView from './childern/RecommendView'
import FeatureView from './childern/FeatureView'
import TabContro from 'components/content/tabContro/TabContro.vue'
import Goods from 'components/content/goods/Goods'

import Scroll from 'components/common/scroll/Scroll'
import TopBack from 'components/content/topBack/TopBack'

import {getHomeDatas,getHomeGoods} from 'network/home'

  export default {
    name:'Home',
    components:{
      Navbar,
      MainSwiper,
      RecommendView,
      FeatureView,
      TabContro,
      Goods,
      Scroll,
      TopBack

    },
    computed:{
      goodsShow(){
        return this.goods[this.currentType].list
      }
    },
    data(){
      return{
        banners:[],
        recommend:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop',
        isShowBackTop:false
      }
    },
    created(){
      this.getHomeDatas()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods:{
      //方法
      tabClick(index){
        switch(index){
          case 0:this.currentType='pop';break;
          case 1:this.currentType='new';break;
          case 2:this.currentType='sell';break;
        }
      },
      backClick(){
        this.$refs.scroll.scrollTo(0,0,400)
      },
      getPosition(position){
        this.isShowBackTop=(-position.y)>1000
      },
      reRequestGoods(){
        this.getHomeGoods(this.currentType)
        this.$refs.scroll.scroll.refresh()
      },

      // 网络请求相关
      getHomeDatas(){
        getHomeDatas().then(res=>{
          this.banners=res.data.banner.list
          this.recommend=res.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page=this.goods[type].page+1
        getHomeGoods(type,1).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page+=1
          this.$refs.scroll.scroll.finishPullUp()
        },err=>{
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    /* overflow: hidden; */
    height: 100vh;
    /* position: relative; */
  }
  .home-nav{
    background-color: #ff2d4a;
    box-shadow: 0 2px 2px rgba(221, 88, 94, 0.7);
    color: white;
  }
  .home-tab-contro{
    position: sticky;
    top: 44px;
  }
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
