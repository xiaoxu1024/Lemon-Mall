<!--  -->
<template>
  <div class="shop-info">
    <div class="logoAndName">
      <img :src="shop.shopLogo">
      <span>{{shop.shopName}}</span>
    </div>
    <div class="shop-center">
      <div class="shop-left">
        <div class="celes">
          <div class="line">
            <span>{{showCeles}}</span><br>
            <span>总销量</span> 
          </div>
          
        </div>
        <div class="number">
          <div class="line">
            <span>{{shop.shopNum}}</span><br>
           <span>全部宝贝</span>
          </div>
        </div>
      </div>
      <div class="shop-right">
        <div v-for="item in shop.core">
          <span>{{item.name}}</span>&nbsp;&nbsp;&nbsp;
          <span :class="{showColor:item.isBetter}" class="normal">{{item.score}}</span>&nbsp;&nbsp;&nbsp;
          <span v-if="item.isBetter" class="upperLable">高</span>
          <span v-else class="lowerLable">低</span>
        </div>
      </div>
    </div>
    <div class="enterShop">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailShopInfo',
    props:{
      shop:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      showCeles(){
        if(this.shop.shopSells>9999){
          return (this.shop.shopSells/10000).toFixed(1)+'万'
        }else{
          return this.shop.shopSells+'个'
        }
      }
    }
  }
</script>

<style scoped>
  .shop-info{
    padding: 3vw 0;
    margin:0 5px;
    color: #888;
    border-bottom: 3px solid #f3f3f3;
  }
  .logoAndName{
    overflow: hidden;
    margin-bottom: 7vw;
  }
  .logoAndName img{
    width: 16vw;
    border-radius: 50%;
    border: 2px solid #eee;
    float: left;
  }
  .logoAndName span{
    float: left;
    height: 16vw;
    line-height: 16vw;
    margin-left: 10px;
    font-size: 4.8vw;
    color: #888;
  }
  .shop-center{
    color: #494949;
    display: flex;
    text-align: center;
    font-size: 4.7vw;
  }
  .shop-left,.shop-right{
    flex: 1;
  }
  .shop-left{
    display: flex;
    text-align: center;
  }
  .shop-right{
    text-align: left;
    margin-left: 4vw;
  }
  .normal{
    color: green;
    width: 10vw;
  }
  .shop-right span,.shop-left div span{
    display: inline-block;
    margin-bottom: 2vw;
  }
  .celes,.number{
    flex: 1;
  }
  .celes .line,.number .line{
    margin-top: 3.5vw;
  }
  .number .line{
    padding-right: 4vw;
    border-right: 1px solid #888;
  }
  .showColor{
    color: #ff2d4a;
  }
  .upperLable,.lowerLable{
    color: white;
    padding: 0.5px;
  }
  .upperLable{
    background-color: #ff2d4a;
  }
  .lowerLable{
    background-color: green;
  }
  .enterShop{
    text-align: center;
    margin: 6vw 0;
    
  }
  .enterShop span{
    font-size: 4.7vw;
    text-align: center;
    background-color:#f1f5fb;
    padding: 2vw 14vw;
    border-radius: 3vw;
  }
</style>
