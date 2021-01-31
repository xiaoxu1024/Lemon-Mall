import {request} from 'network/request'

export function getHomeDatas(){
  return request({
    url:'/home/multidata'
  })
}