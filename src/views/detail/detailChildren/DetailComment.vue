<!--  -->
<template>
  <div class="detail-comment" v-if="comments.length!==0">
    <div class="comment-title">
      <span>用户评论</span>
      <span @click="moreBtn" class="moreBtn">更多</span>  
    </div>
    <div class="first-comment">
      <div class="user-name">
        <img :src="comments[0].user.avatar">
        <span>{{comments[0].user.uname}}</span>
      </div>
      <div class="content">
        <span>{{comments[0].content}}</span>
      </div>
      <div class="date-info">
        <span>2018-06-08</span>
        <span>{{comments[0].style}}</span>
      </div>
    </div>
    <div class="more-comment" v-for="n in comments.length-1" v-if="isMore">
      <div class="user-name">
        <img :src="comments[n].user.avatar">
        <span>{{comments[n].user.uname}}</span>
      </div>
      <div class="content">
        <span>{{comments[n].content}}</span>
      </div>
      <div class="date-info">
        <span>2018-06-08</span>
        <span>{{comments[n].style}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailComment',
    props:{
      comments:{
        type:Array,
        dafault(){
          return []
        }
      }
    },
    data(){
      return{
        isMore:false
      }
    },
    methods:{
      moreBtn(){
        this.isMore=!this.isMore
      }
    }
  }
</script>

<style scoped>
  .detail-comment{
    margin: 0 10px;
    font-size: 4.5vw;
    color: #494949;
  }
  .user-name img{
    width: 12vw;
    border-radius: 50%;
    vertical-align: middle;
  }
  .user-name span{
    margin-left: 5vw;
  }
  .comment-title{
    position: relative;
    padding-bottom: 3vw;
    margin-bottom: 3vw;
    margin-top: 5vw;
    border-bottom: 2px solid #f3f3f3 ;
  }
  .comment-title .moreBtn{
    position:absolute;
    top: 0;
    right: 2vw;
    background-color: #eee;
    border-radius: 3vw;
    padding: 0.6vw 5.5vw;
  }
  .content span{
    font-size: 4.2vw;
    color: #888;
    line-height: 1.5em;
  }
  .content{
    padding: 3vw 0;
  }
  .date-info span:last-child{
    margin-left: 4vw;
  }
  .date-info{
    padding: 3vw 0;
    margin-bottom: 3vw;
    border-bottom: 3px solid #f3f3f3;
  }
</style>
