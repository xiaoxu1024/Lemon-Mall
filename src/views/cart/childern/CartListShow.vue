<!--  -->
<template>
  <div class="cart-list-show" v-if="this.cartList.length!=0">
    <div class="cart-item-show" v-for="(item,index) in this.cartList">
      <div class="checkbox" @click="checkBtn(item)">
        <label :class="{isChecked:item.isChecked}"></label>
      </div>
      <div class="cartImg">
        <img :src="item.catImg" :alt="item.title">
      </div>
      <div class="cartText">
        <span class="title">{{item.title}}</span><br>
        <span class="desc">{{item.desc}}</span><br>
        <span class="price">￥{{item.realyPrice}}</span>
        <span class="count">x{{item.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
    name:'CartListShow',
    computed:{
      ...mapGetters(['cartList'])
    },
    data(){
      return{
      }
    },
    methods:{
      checkBtn(item){
        item.isChecked=!item.isChecked
      }
    }
  }
</script>

<style scoped>

  .checkbox label{
    border-radius: 50%;
    border: 0.5vw solid  #888;
    width: 5.2vw;
    height: 5.2vw;
    vertical-align: middle;
    display: inline-block;
  }

  .checkbox .isChecked{
    background-color: #ff2d4a;
    border: 0.5vw solid  #ff2d4a;
  }
  .isChecked::before{
    content: "";
    display: block;
    width: 3.3vw;
    height: 1.2vw;
    border-radius: 0.4vw;
    border: 0.64vw solid white;
    border-right: none;
    border-top: none;
    transform: rotate(-45deg) translate(-0.2vw, 1.3vw);
  }
  .cart-list-show{
    width: 100%;
  }
  .cart-item-show{
    display: flex;
    height: 38vw;
    padding: 1vw 0;
    border-bottom: 3.5px solid #e3e3e3;
  }
  .checkbox{
    flex: 0.15;
    text-align: center;
    line-height: 35vw;
  }
  .cartImg{
    flex: 0.45;
    margin:2vw 0;
  }
  .cartImg img{
    width: 100%;
    height: 100%;
    border-radius: 2vw;
  }
  .cartText{
    flex: 1;
    width: 10vw;
    padding: 0 3vw;
    margin:2vw 0;
    overflow: hidden;
  }
  .cartText .title{
    color: #494949;
    font-size: 5.2vw;
  }
  .cartText .desc{
    color: #888;
    font-size: 4.3vw;
    padding: 5vw 0;
  }
  .cartText .price{
    color: #ff8934;
    float: left;
    padding-top: 3vw;
    font-size: 5.5vw;
  }
  .cartText .count{
    float: right;
    margin-right: 2vw;
    padding-top: 3vw;
    font-size: 5.3vw;
    color: #999;
  }
  .cartText .title,.cartText .desc{
    display: inline-block;
    width: 100%;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }


</style>
