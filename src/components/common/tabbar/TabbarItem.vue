<!--  -->
<template>
  <div class="tab-bar-item" @click="tabbar_item_click">
    <div v-if="!isActive"><slot name="tabbar-item-icon"></slot></div>
    <div v-else><slot name="tabbar-item-active-icon"></slot></div>
    <div :style="itemColor"><slot name="tabbar-item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name:'TabbarItem',
    props:{
      link:String,
      tabcolor:{
        type:String,
        default(){
          return 'red'
        }
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.link)!=-1
      },
      itemColor(){
        return this.isActive?{color:this.tabcolor}:{}
      }
    },
    methods:{
      tabbar_item_click(){
        this.$router.push(this.link).catch(err=>err)
      }
    }
  }
</script>

<style>
  .tab-bar-item{
    flex:1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    cursor: pointer;
  }
  .tab-bar-item img{
    width: 25px;
    height: 25px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
