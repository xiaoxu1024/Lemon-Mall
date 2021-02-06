import {request} from './request'
export function getDetail(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export function getRecommend(){
  return request({
    url:'/recommend',

  })
}

export class detailGoods{
  constructor(itemInfo,columns,services){
    this.title=itemInfo.title
    this.price=itemInfo.price
    this.oldPrice=itemInfo.oldPrice
    this.discountDesc=itemInfo.discountDesc
    this.salesNum=columns[0]
    this.collection=columns[1]
    this.services=services
    this.realyPrice=itemInfo.lowNowPrice
  }
}

export class getShop{
  constructor(shopInfo){
    this.shopLogo=shopInfo.shopLogo
    this.shopName=shopInfo.name
    this.shopSells=shopInfo.cSells
    this.shopNum=shopInfo.cGoods
    this.core=shopInfo.score
    this.shopUrl=shopInfo.shopUrl

  }
}

