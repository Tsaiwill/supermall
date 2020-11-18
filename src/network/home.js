// 做一个请求数据的外层
import {request} from './request'

//请求数据不传参数
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

//请求数据传参写法
export function getHomeGoods(type, page) {
  return request({
    url: './home/data',
    params: {
      type,
      page
    }
  })
}
