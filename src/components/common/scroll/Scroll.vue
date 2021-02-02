<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
  export default {
    name:'Scroll',
    props:{
      probeType:{
        type:Number,
        default:0
      }
    },
    data(){
      return{
        scroll:null
      }
    },
    mounted(){
      this.scroll=new BScroll(this.$refs.wrapper,{
        probeType:this.probeType,
        pullUpLoad:true,
        observeDOM:true,
        click:true
      })
      this.scroll.on('scroll',position=>{
        this.$emit('getPosition',position)
      })
      this.scroll.on('pullingUp',()=>{
        console.log('上拉加载')
        this.$emit('reRequestGoods')
        // this.scroll.finishPullUp()
        // this.scroll.refresh()
      })
    },
    methods:{
      scrollTo(x,y,time){
        this.scroll.scrollTo(x,y,time)
      }
    }
  }
</script>

<style scoped>
</style>
