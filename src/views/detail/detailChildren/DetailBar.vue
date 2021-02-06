<!--  -->
<template>
  <div id="detail-bar">
    <Navbar class="Navbar">
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.png" alt="back" class="image">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" class="title-item" @click="itemClick(index)" :class="{item:currentIndex==index}">{{item}}</div>
      </div>
    </Navbar>
  </div>
</template>

<script>
  import Navbar from 'components/common/navbar/Navbar'
  export default {
    name:'DetailBar',
    data () {
      return {
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    components:{
      Navbar
    },
    methods:{
      itemClick(index){
        this.currentIndex=index
        this.$emit('detailBarClick',index)
      },
      backClick(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .title{
    display: flex;
    color: #494949;
    text-align: center;
  }
  .title-item{
    flex: 1;
    font-size: 18px;
  }
  .item{
    color: #ff2d4a;
  }

  .image{
    width: 26px;
    margin-top: 8px;
    margin-left: 20%;
  } 

</style>
