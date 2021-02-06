<!--  -->
<template>
  <div class="detail-params" v-if="Object.keys(goodsParams).length!==0">
    <table>
      <tbody>
        <div class="size">
          <tr v-for="item in goodsParams.rule.tables[0]" class="sizeTr">
            <td v-for="n in item" class="sizeTd">{{n}}</td>
          </tr>
        </div>
        <div class="info">
          <tr v-for="item in goodsParams.info.set" class="infoTr">
            <td class="infoTd">{{item.key}}</td>
            <td class="infoTd" style="color:#ff2d4a">{{item.value}}</td>
          </tr>
        </div>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name:'DetailParams',
    props:{
      goodsParams:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    activated() {
     console.log(this.goodsParams) 
    }
  }
</script>

<style scoped>
  .detail-params{
    margin: 6vw 5px 1vw;
  }
  table{
    padding: 0 5px;
    width: 100%;
    font-size: 4.2vw;
    color: #888;
  }
  .sizeTr{
    display: flex;
    padding: 3vw 0;
    border-bottom: 2px solid #f3f3f3;
  }
  .sizeTr:last-child{
    border-bottom: 3px solid #f3f3f3;
  }
  .sizeTd{
    flex: 1;
    text-align: center;
  }
  .sizeTd:first-child{
    text-align: left;
  }

  .infoTr{
    display: flex;
    padding: 3vw 0;
    border-bottom: 2px solid #f3f3f3;
  }
  .infoTr:last-child{
    border-bottom: 3px solid #f3f3f3;
  }
  .infoTd{
    flex: 1;
    text-align: left;
  }
</style>
