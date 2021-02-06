import {
  ADD_COUNT,
  ADD_BUYS
} from './mutations-types'
export default {
  addCart(context,payload){
    return new Promise((resolve,reject)=>{
      //1.判断有没有重复的添加的数组
      let oldProduct=context.state.cartList.find(item=> item.iid === payload.iid)
      //2.如果有，数量加一
      if(oldProduct){
        context.commit(ADD_COUNT,oldProduct)
        resolve('商品数量加一')
      }else{          //如果没有，增加一
        payload.count=1
        context.commit(ADD_BUYS,payload)
        resolve('已添加到购物车')
      }
    })
  }

}