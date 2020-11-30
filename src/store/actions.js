import {
  // 将mutation-types的常量导入，用[types-name]来使用
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {// (context, payload)
  // 有比较复杂的逻辑时放在actions里会更好
  addCart(context, payload) {
    // 1.查找之前数组中是否有该商品
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

    // 2.判断oldProduct
    if (oldProduct) {
      // oldProduct.count += 1
      context.commit(ADD_COUNTER, oldProduct)
    } else {
      payload.count = 1
      // payload.cartList.push(payload)
      context.commit(ADD_TO_CART, payload)
    }
  }
}
