<!--  -->
<template>
  <div class="toast" v-if="isShow">
    {{message}}
  </div>
</template>

<script>
  export default {
    name:'Toast',
    data(){
      return{
        message:'vfedcs',
        isShow:false
      }
    },
    methods:{
      tipShow(message='默认文字',delay=1000){
        this.isShow=true
        this.message=message
        setTimeout(()=>{
          this.isShow=false
          this.message=''
        },delay)
      }
    }
  }
</script>

<style scoped>
  .toast{
    color: #fff;
    font-size: 4.2vw;
    font-weight: bold;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 3vw;

    width: 50vw;
    height: 20vw;
    background-color: rgba(2, 2, 2, 0.7);
    text-align: center;
    line-height: 20vw;
  }
</style>
