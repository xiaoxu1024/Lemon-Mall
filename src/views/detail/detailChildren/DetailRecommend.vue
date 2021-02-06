<!--  -->
<template>
  <div class="detail-recommend">
    <goods :></goods>
  </div>
</template>

<script>
import Goods from 'components/content/goods/Goods'
  export default {
    name:'DetailRecommend',
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
    ,
    components:{
      Goods
    }

  }
</script>

<style scoped>

</style>
