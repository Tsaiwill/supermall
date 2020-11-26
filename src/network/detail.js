// 导入request，request返回的是Promise
import {request} from './request'

// 点击其中一项时，出发事件itemClick(),通过路由this.$router.push('detail/' + '1m7rp9w')进行跳转
// 跳转路径index.js中，跳转到组件Detail
// Detail组件中，通过变量iid存储路由$route里的获取到的参数:this.iid = this.$route.params.iid
// 通过导入detail.js里的getDetail方法，import {getDetail} from 'network/detail'
// 此时就可以通过getDetail方法获取数据了，返回的是一个Promise
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

// 将多个地方的数据提取出来构建一个对象，以对象作为载体
// 这样DetailBaseInfo获取值时以goods对象来获取即可
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

// 商家信息对象
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
export  function getRecommend() {
  return request({
    url: '/recommend'
  })
}
