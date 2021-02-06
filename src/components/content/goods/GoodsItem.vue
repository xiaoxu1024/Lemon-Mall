<!--  -->
<template>
  <div class="goods-item" @click="itemClick">
      <img :src="showImg" :alt="goodsItem.title" @load="itemImageLoad">
      <div class="goods-detial">
        <p class="good-title">{{goodsItem.title}}</p>
        <span class="good-price">{{goodsItem.price}}</span>
        <span class="good-cfav">{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
  export default {
    name:'GoodsItem',
    props:{
      goodsItem:{
        type:Object,
        dafault(){
          return {}
        }
      }
    },
    computed:{
      showImg(){
        return  this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods:{
      itemImageLoad(){
        if(this.$route.path.indexOf('/home')!=-1){
          this.$bus.$emit('homeItemImageLoad')
        }else if(this.$route.path.indexOf('/detail')!=-1){
          this.$bus.$emit('detailItemImageLoad')
        }
      },
      itemClick(){
        // this.$router.push('/detail/'+this.goodsItem.iid)
        this.$router.push({
          path:'/detail',
          query:{
            iid:this.goodsItem.iid
          }
        })
      }
    }
  }
</script>

<style scoped>
  .goods-item{
    width: 46%;
    display: inline-block;
    margin-left: 2.5vw;
  }
  /* .goods-item{
    width: 48%;
  } */
  .goods-item img{
    width: 100%;
    /* 65vw */
    height: 65vw;   
    border-radius: 5%;
  }
  .goods-detial{
    text-align: center;
    font-size: 4.4vw;
    color: #494949;
    padding: 0 5px;
  }
  .good-title{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding:2px 0 2px 8px;
    margin:0;
  }
  .good-cfav,.good-price{
    display: inline-block;
  }
  .good-price{
    color: #ff2d4a;
  }
  .good-cfav::before{
    content: '☆';
    font-size: 6vw;
    margin:0 3px;
  }
  .good-cfav{
    padding: 2px 0;
    margin-bottom: 3px;
  }

</style>
