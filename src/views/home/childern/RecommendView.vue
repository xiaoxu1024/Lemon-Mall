<!--  -->
<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommend">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name:'',
    props:{
      recommend:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    width: 100%;
    display: flex;
    margin-bottom: 100px;
    border-top:6px solid rgba(212, 208, 208, 0.3);;
  }
  .recommend-item{
    flex: 1;
    text-align: center;
    padding: 0 5px;
  }
  .recommend-item img{
    margin-top: 10px;
    margin-bottom: 10px;
    width: 60%;
  }
  .recommend-item p{
    font-size: 2vw;
    color: #494949;
    margin:0;
  }
</style>
