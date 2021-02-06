<!--  -->
<template>
  <div class="detail-goods-info">
    <div class="desc">
      <li><———————</li>
      <div class="center-content">
        <span>{{detailInfo.desc}}</span>
      </div>
      <li style="text-align:right">———————></li>
    </div>
    <div class="show-detail" v-for="item in detailInfo.detailImage">
      <span>{{item.key}}</span><br>
      <div class="show-goodsImg">
        <img :src="src" v-for="src in item.list" @load="detailLoad">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailGoodsInfo',
    props:{
      detailInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return{
        count:0,
        imgLength:0
      }
    },
    methods:{
      detailLoad(){
        if(++this.count==this.imgLength){
          this.$emit('detailLoad')
        }
      }
    },
    watch:{
      detailInfo(){
        if(this.detailInfo.detailImage!=undefined){
          for(let item of this.detailInfo.detailImage){
            if(item.list!=undefined){
              this.imgLength +=item.list.length
            }
          }
        }
      }
    }
  }
</script>

<style scoped>
  .detail-goods-info{
    margin:0 10px;
  }
  .desc{
    color: #cdcdcd;
  }
  .desc li{
    list-style: none;
  }
  .center-content{
    color: #494949;
    font-size: 4.2vw;
    line-height: 1.5em;
    text-indent: 2em;
    padding: 0 3px;
  }
  .show-detail{
    font-size: 4.6vw;
  }
  .show-detail span{
    display: inline-block;
    margin-bottom: 3vw;
  }
  .show-goodsImg{
    padding-bottom: 5vw;
    border-bottom: 4px solid #f3f3f3;
  }
  .show-goodsImg  img{
    width: 100%;
  }
</style>
