<!--  -->
<template>
  <div id="cart">
    <navbar class="cart-nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </navbar>
    <scroll class="content" pullUpLoad="false" ref="scroll">
      <cart-list-show class="cart-show"></cart-list-show>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
import CartListShow from './childern/CartListShow'
import Scroll from 'components/common/scroll/Scroll'
import CartBottomBar from './childern/CartBottomBar'
import {mapGetters} from 'vuex'
  export default {
    name:'Cart',
    components:{
      Navbar,
      CartListShow,
      Scroll,
      CartBottomBar
    },
    computed:{
      ...mapGetters(['cartLength'])
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  #cart{
    height: 100vh;
  }
  .cart-nav-bar{
    background-color: #ff2d4a;
    color: white;
    font-size: 20px;
    width: 100%;
    z-index: 5;
    position: fixed;
    top: 0;
    left: 0;
  }
  .content{
    position: relative;
    overflow: hidden;
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
    height: calc(100vh - 44px - 49px - 40px);
  }
</style>
