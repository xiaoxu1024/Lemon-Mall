<!--  -->
<template>
  <div class="detail-bottom-bar">
    <div class="bar-left">
      <div class="service">
        <i class="bgimg"></i><br>
        <span>客服</span>
      </div>
      <div class="shop">
        <i></i><br>
        <span>店铺</span>
      </div>
      <div class="colect">
        <i></i><br>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-right">
      <div class="addbuy" @click="addCart">
        <span>加入购物车</span>
      </div>
      <div class="buy">
        <span>购买</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailBottomBar',
    methods:{
      addCart(){
        this.$emit('addCart')
      }
    }
  }
</script>

<style scoped>
  .detail-bottom-bar{
    position: fixed;
    left: 0;
    background-color: #fff;
    bottom: 0px;
    z-index: 20;
    width:100%;
    height: 49px;

    display: flex;
    text-align: center;
    color: #494949;
  }
  .bar-left{
    width: 60%;
    display: flex;
    flex: 1.2;
  }
  .bar-left div{
    flex: 1;
  }
  .bar-left i{
    display: inline-block;
    width: 26px;
    height: 26px;
    background: url("~assets/img/detail/detail_bottom.png") no-repeat;
    background-size: 26.4px 180px ;
  }
  .bar-left .service i{
    background-position: 0px -62px;
  }
  .bar-left .shop i{
    background-position: 0px -117px;
  }
  .bar-left .colect i{
    background-position: 0px 2px;
  }

  .bar-right{
    flex: 1;
    width: 40%;
    display: flex;
    line-height: 49px;
  }
  .bar-right div{
    flex: 1;
  }
  .bar-right .addbuy{
    background-color: #ffdf10;
  }
  .bar-right .buy{
    background-color: #ff799c;
    color: white;
  }

</style>
