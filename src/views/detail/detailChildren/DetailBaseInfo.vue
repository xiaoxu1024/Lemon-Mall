<!--  -->
<template>
  <div class="detail-base-info" v-if="Object.keys(baseInfo).length!==0">
    <div class="title">
      <span>{{baseInfo.title}}</span>
    </div>
    <div class="price">
      <span>{{baseInfo.price}}</span>
      <span>{{baseInfo.oldPrice}}</span>
      <span>{{baseInfo.discountDesc}}</span>
    </div>
    <div class="sales">
      <span>{{baseInfo.salesNum}}</span>
      <span>{{baseInfo.collection}}</span>
      <span>{{baseInfo.services[baseInfo.services.length-1].name}}</span>
    </div>
    <div class="service">
      <span v-for="n in baseInfo.services.length-1" class="service-item">
        <img :src="baseInfo.services[n-1].icon">
        <span>{{baseInfo.services[n-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailBaseInfo',
    props:{
      baseInfo:{
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-base-info{
    padding: 10px 6px;
    overflow: hidden;
  }
  .title{
    font-size: 5.5vw;
    font-weight:bolder;
    color: #494949;
    margin-bottom: 10px;
    line-height: 1.3em;
  }
  .price{
    color: #888;
    margin: 12px 0 16px;
  }
  .price span:nth-child(1){
    color: #ff2d4a;
    font-size: 6.5vw;
    padding-right: 10px;
  }
  .price span:nth-child(2){
    font-size: 4.5vw;
    padding-right: 10px;
    text-decoration: line-through;
  }
  .price span:nth-child(3){
    font-size: 4.5vw;
    color: white;
    background-color: #ff2d4a;
    border-radius: 6px;
    padding: 1px 5px;
    position: relative;
    top: -2.3vw;
    left: 0;
  }
  .sales{
    display: flex;
    text-align: center;
    font-size: 4.4vw;
    color: #888;
    padding-bottom: 4vw;
    border-bottom: 2px solid #f3f3f3;
  }
  .sales span{
    flex:1;
  }
  .sales span:first-child{
    text-align: left;
  }
  .sales span:last-child{
    text-align: right;
  }
  .service{
    display: flex;
    padding: 6vw 0;
    border-bottom: 3px solid #f3f3f3;
  }
  .service-item{
    flex: 1;
    font-size: 4.2vw;
    text-align: center;
  }
  .service-item:first-child{
    text-align: left;
  }
  .service-item:last-child{
    text-align: right;
  }
  .service-item img{
    width: 4.3vw;
    position: relative;
    top: 0.5vw;
    left: 0;
  }
</style>
