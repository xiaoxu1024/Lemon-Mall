<!--  -->
<template>
  <div id="detail">
    <detail-bar class="detail-nav" @detailBarClick="detailBarClick" ref="detailbar"></detail-bar>
    <scroll class="content" pullUpLoad="false" ref="scroll" @getPosition="detaiGetPosition" :probeType="3">
      <detail-swiper :topImages="topImages" times="2" class="detail-swiper"></detail-swiper>
      <detail-base-info :baseInfo="detailGoods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @detailLoad="detailLoad"></detail-goods-info>
      <detail-params :goodsParams="detailParams" ref="params"></detail-params>
      <detail-comment :comments="comments" ref="comment"></detail-comment>
      <goods :goods="recommends" class="goods" ref="recommend"></goods>
    </scroll>
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
    <top-back @click.native="backClick" v-show="isTopBack"></top-back>
  </div>
</template>

<script>
import DetailBar from './detailChildren/DetailBar'
import DetailSwiper from './detailChildren/DetailSwiper'
import DetailBaseInfo from './detailChildren/DetailBaseInfo'
import DetailShopInfo from './detailChildren/DetailShopInfo'
import Scroll from 'components/common/scroll/Scroll'
import DetailGoodsInfo from './detailChildren/DetailGoodsInfo'
import DetailParams from './detailChildren/DetailParams'
import DetailComment from './detailChildren/DetailComment'
import Goods from 'components/content/goods/Goods'
import DetailBottomBar from './detailChildren/DetailBottomBar'
import TopBack from 'components/content/topBack/TopBack'
import {getDetail,getRecommend,detailGoods,getShop} from 'network/detail'
import {debounce} from 'common/utils'
  export default {
    name:'Detail',
    data(){
      return{
        iid:null,
        topImages:[],
        detailGoods:{},
        shop:{},
        detailInfo:{},
        detailParams:{},
        comments:[],
        recommends:[],
        clickToYs:[0,300,500,800],
        currentIndex:0,
        pY:0,
        isTopBack:false
     }
    },
    components:{
      DetailBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParams,
      DetailComment,
      DetailBottomBar,
      Goods,
      TopBack
    },
    created() {
      this.iid=this.$route.query.iid
      getDetail(this.iid).then(res=>{
        //缓存原始商品信息
        const data=res.result
        //获取轮播图片
        this.topImages=data.itemInfo.topImages
        //获取商品基本信息
        this.detailGoods=new detailGoods(data.itemInfo,data.columns,data.shopInfo.services)
        //获取店铺信息
        this.shop=new getShop(data.shopInfo)
        //获取商品详细展示图片
        this.detailInfo=data.detailInfo
        //获取商品的参数信息
        this.detailParams=data.itemParams
        //获取评论信息
        if(data.rate.cRate!==0){
          this.comments=data.rate.list
        }
        //获取推荐信息
      }),
      getRecommend().then(res=>{
        if(res.data.list.length!==0){
          this.recommends=res.data.list
        }
        
      }).catch(err=>{
        console.log(err)
      })
    },
    methods:{
      detailLoad(){
        this.$refs.scroll.refresh()
        //点击跳转指定位置
        setTimeout(()=>{
          this.clickToYs=[0]
          this.clickToYs.push(this.$refs.params.$el.offsetTop)
          this.clickToYs.push(this.$refs.comment.$el.offsetTop)
          this.clickToYs.push(this.$refs.recommend.$el.offsetTop)
          this.clickToYs.push(Number.MAX_VALUE)
        },300)
      },
      detailBarClick(index){
        this.$refs.scroll.scroll.scrollTo(0,-this.clickToYs[index],200)
      },
      detaiGetPosition(position){
        //判断位置在那一项
        this.pY=-position.y
        for(let i=0;i<this.clickToYs.length-1;i++){
          if(this.currentIndex!=i && this.pY>=this.clickToYs[i] && this.pY<this.clickToYs[i+1]){
            this.currentIndex=i
            this.$refs.detailbar.currentIndex=i
          }
        }

        //判断topBack显示不显示
        this.isTopBack=this.pY>1000
      },
      backClick(){
        this.$refs.scroll.scroll.scrollTo(0,0,200)
      },
      //发送vuex数据，用于添加购物车
      addCart(){
        const product={
          catImg:this.topImages[0],
          title:this.detailGoods.title,
          desc:this.detailInfo.desc,
          realyPrice:this.detailGoods.realyPrice,
          iid:this.iid
        }
        this.$store.dispatch('addCart',product).then(res=>{
          //这里直接调用tipShow函数来执行弹窗淡入淡出显示
          this.$toast.tipShow(res)
        })
      }
    },
    mounted(){
      const refresh=debounce(this.$refs.scroll.refresh,20)
      this.$bus.$on('detailItemImageLoad',()=>{
        refresh()
      })
    }
}
</script>

<style scoped>
  #detail{
    height: 100vh;
    overflow: hidden;
  }
  .detail-nav{
    position: fixed;
    width: 100%;
    z-index: 2;
    background-color: #fff;
  }
  .detail-swiper{
    height: 65vw;
  }
  .content{
    position: relative;
    overflow: hidden;
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
    height: calc(100vh - 44px - 49px);
  } 
</style>
