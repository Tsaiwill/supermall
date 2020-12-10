import {
  // 将mutation-types的常量导入，用[types-name]来使用
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {// (context, payload)
  // 有比较复杂的逻辑时放在actions里会更好
  addCart(context, payload) {
    // 加入购物车的弹窗
    // a.直接在这里返回一个Promise，
    return new Promise((resolve, reject) => {
      // 1.查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      // 2.判断oldProduct
      if (oldProduct) {
        // oldProduct.count += 1
        // 提交到mutations
        context.commit(ADD_COUNTER, oldProduct)
        // b.通过resolve返回给Detail
        resolve('当前的商品数量+1')
      } else {
        payload.count = 1
        // payload.cartList.push(payload)
        // 提交到mutations
        context.commit(ADD_TO_CART, payload)
        // b.通过resolve返回给Detail
        resolve('添加了新的商品')
      }
    })

  }
}
