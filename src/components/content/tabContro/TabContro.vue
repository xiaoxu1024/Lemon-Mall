<!--  -->
<template>
  <div class="tab-contro">
    <div v-for="(item,index) in titles" class="tab-contro-item" 
    :class="{active:index==currentIndex}"
    @click="btnTabcontro(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'TabContro',
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      btnTabcontro(index){
        this.currentIndex=index
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  .tab-contro{
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
    background-color: #fff;
    margin-bottom: 2px;
  }
  .tab-contro-item{
    flex: 1;
    font-size: 18px;
  }
  .active{
    color: #ff2d4a;
  }
  .active span{
    padding: 1px;
    border-bottom: 3px solid  #ff2d4a;
  }
</style>
