import {
  // 将mutation-types的常量导入，用[types-name]来使用
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {
  // mutations唯一的目的就是修改state中状态
  // 可以做一系列跟踪记录
  // mutations中的每个方法尽可能完成的事件比较单一
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_TO_CART](state, payload) {
    // 添加到购物车后同时修改选中状态
    payload.isChecked = true
    state.cartList.push(payload)
  }
}
