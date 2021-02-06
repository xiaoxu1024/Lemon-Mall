<!--  -->
<template>
  <div class="cart-bottom-bar">
    <div class="check-all" @click="checkBtn">
      <label :class="{isCheckAll:isAllSelect}"></label>
      <span>全选</span>
    </div>
    <div class="total-price">
      合计:{{totalPrice}}
    </div>
    <div class="to-buy" @click="tobuyBtn">
      去结算({{tobuyCount}})
    </div>
  </div>
</template>

<script>
  export default {
    name:'CartBottomBar',
    computed:{
      totalPrice(){
        return '￥'+this.$store.state.cartList.filter(item=>{
          return item.isChecked
        }).reduce((pre,cur)=>{
          return pre+cur.count*cur.realyPrice
        },0).toFixed(2)
      },
      tobuyCount(){
        return this.$store.state.cartList.filter(item=>{
          return item.isChecked
        }).length
      },
      isAllSelect(){
        if(this.$store.state.cartList.length===0) return false
        return this.$store.state.cartList.every(item=>{
          return item.isChecked
        })
      }
    },
    methods:{
      checkBtn(){
        if(this.isAllSelect){
          this.$store.state.cartList.forEach(item=> item.isChecked=false)
        }else{
          this.$store.state.cartList.forEach(item=> item.isChecked=true)
        }
      },
      tobuyBtn(){
        if(this.tobuyCount==0){
          this.$toast.tipShow('购物车为空，请添加商品',2000)
        }else{
          this.$toast.tipShow('正在跳转,请稍后..',5000)
        }
      }
    }
  }
</script>

<style scoped>
  .cart-bottom-bar{
    display: flex;
    width: 100%;
    height: 40px;
    position: relative;
    bottom: -44px;
    left: 0;
    color: #888;
    font-size: 14px;
    background-color: rgba(238, 238, 238, 0.432);
  }
  .check-all{
    flex: 0.3;
    display: flex;
    align-items: center;
  }
  .check-all label{
    width: 21px;
    height: 21px;
    border: 1px solid #888;
    border-radius: 50%;
    margin-left: 2.5vw;
  }
  .check-all .isCheckAll{
    background-color: #ff2d4a;
    border: 1px solid #ff2d4a;
  }
  .isCheckAll::before{
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
  .check-all span{
    margin-left: 3vw;
  }
  .total-price{
    flex: 0.5;
    line-height: 40px;
    padding-left: 7vw;
  }
  .to-buy{
    flex: 0.3;
    line-height: 40px;
    text-align: center;
    background-color: #ff2d4a;
    color: white;
  }
</style>
