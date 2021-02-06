<!--  -->
<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <Tabbar>
      <tabbaritem link="/home" tabcolor="#ff2d4a">
        <img slot="tabbar-item-icon" src="~assets/img/tabbar/home.png" alt="">
        <img slot="tabbar-item-active-icon" src="~assets/img/tabbar/home-o.png" alt="">
        <div slot="tabbar-item-text">首页</div>
      </tabbaritem>
      <tabbaritem link="/category" tabcolor="#ff2d4a">
        <img slot="tabbar-item-icon" src="~assets/img/tabbar/category.png" alt="">
        <img slot="tabbar-item-active-icon" src="~assets/img/tabbar/category-o.png" alt="">
        <div slot="tabbar-item-text">分类</div>
      </tabbaritem>
      <tabbaritem link="/cart" tabcolor="#ff2d4a">
        <img slot="tabbar-item-icon" src="~assets/img/tabbar/cart.png" alt="">
        <img slot="tabbar-item-active-icon" src="~assets/img/tabbar/cart-o.png" alt="">
        <div slot="tabbar-item-text">购物车</div>
      </tabbaritem>
      <tabbaritem link="/profile" tabcolor="#ff2d4a">
        <img slot="tabbar-item-icon" src="~assets/img/tabbar/my.png" alt="">
        <img slot="tabbar-item-active-icon" src="~assets/img/tabbar/my-o.png" alt="">
        <div slot="tabbar-item-text">我的</div>
      </tabbaritem>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from 'components/common/tabbar/Tabbar'
import tabbaritem from 'components/common/tabbar/TabbarItem'
  export default {
    name:'MainTabbar',
    components:{
      Tabbar,
      tabbaritem
    }
  }
</script>

<style>
</style>
