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
      },
      pullUpLoad:{
        default:false
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
        pullUpLoad:this.pullUpLoad,
        observeDOM:true,
        click:true,
        bounce:true       //关闭回弹效果
      })
      this.scroll.on('scroll',position=>{
        this.$emit('getPosition',position)
      })
      this.scroll.on('pullingUp',()=>{
        this.$emit('reRequestGoods')
      })
    },
    methods:{
      scrollTo(x,y,time){
        this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll && this.scroll.refresh()
      },
      getScrollY(){
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style scoped>
</style>
