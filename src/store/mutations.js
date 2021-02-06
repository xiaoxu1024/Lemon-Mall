import {
  ADD_COUNT,
  ADD_BUYS
} from './mutations-types'
export default {
  //执行数量增加一
  [ADD_COUNT](state,payload){
    payload.count+=1
  },
  //执行种类增加一
  [ADD_BUYS](state,payload){
    payload.isChecked=true
    state.cartList.push(payload)
  }
}