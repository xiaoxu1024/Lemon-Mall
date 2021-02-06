<!--  -->
<template>
  <div id="home">
    <navbar class="home-nav"><div slot="center">Lemon</div></navbar>
    <tab-contro :class="{tabContro1:this.tabControFiexd}" 
            :titles="['流行','新款','精选']" 
            @tabClick="tabClick"
            ref="tabContro1" v-show="this.tabControFiexd"></tab-contro>
    <Scroll class="content" ref="scroll" 
            @getPosition="getPosition" 
            :probeType="3" 
            @reRequestGoods="reRequestGoods" 
            :pullUpLoad="true">
      <main-swiper :banners="banners" times="2" @swiperLoad="swiperLoad"></main-swiper>
      <recommend-view :recommend="recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-contro :class="{tabContro:this.tabControFiexd}" 
                  :titles="['流行','新款','精选']" 
                  @tabClick="tabClick"
                  ref="tabContro2"></tab-contro>
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
import {debounce} from 'common/utils'

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
        isShowBackTop:false,
        tabOffsetTop:0,
        tabControFiexd:false,
        saveY:0
      }
    },
    activated(){
      this.$refs.scroll.scrollTo(0,this.saveY,1)
      this.$refs.scroll.refresh()
    },
    deactivated(){
      this.saveY=this.$refs.scroll.getScrollY()
    },
    created(){
      this.getHomeDatas()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted(){
      const refresh=debounce(this.$refs.scroll.refresh,20)
      this.$bus.$on('homeItemImageLoad',()=>{
        refresh()
      })
    },
    methods:{
      //方法
      //tabcontro点击事件
      tabClick(index){
        switch(index){
          case 0:this.currentType='pop';break;
          case 1:this.currentType='new';break;
          case 2:this.currentType='sell';break;
        }
        this.$refs.tabContro1.currentIndex=index
        this.$refs.tabContro2.currentIndex=index
      },
      //返回顶部点击事件
      backClick(){
        this.$refs.scroll.scrollTo(0,0,400)
      },
      //返回顶部和吸顶效果显示
      getPosition(position){
        this.isShowBackTop=(-position.y)>1000
        this.tabControFiexd=(-position.y)>this.tabOffsetTop
      },
      //吸顶位置获取
      swiperLoad(){
        this.tabOffsetTop=this.$refs.tabContro2.$el.offsetTop
      },

      // 网络请求相关
      ///上拉加载更多
      reRequestGoods(){
        this.getHomeGoods(this.currentType)
      },
      //获取轮播图数据
      getHomeDatas(){
        getHomeDatas().then(res=>{
          this.banners=res.data.banner.list
          this.recommend=res.data.recommend.list
        })
      },
      //获取商品数据
      getHomeGoods(type){
        const page=this.goods[type].page+1
        getHomeGoods(type,1).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page+=1
          this.$refs.scroll && this.$refs.scroll.finishPullUp()
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
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .tabContro1{
    position: relative;
    top: 0;
    z-index: 3;
  }
</style>
