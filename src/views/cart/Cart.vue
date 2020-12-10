<template>
  <div class="cart">
<!--    导航-->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
<!--    商品的列表-->
    <cart-list></cart-list>
<!--    底部汇总-->
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartList from "./childComps/CartList";
  import CartBottomBar from "./childComps/CartBottomBar";

  import { mapGetters } from 'vuex'

  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      // *.通过vuex来获取数据
      //   这里是通过this.$store.state来获取数据的，我们将state当做参数传进去，
      //   就能在getters.js里就能直接return state.cartList.length;

      // 3.封装到getters中，直接将getters.js里的拿出来用会方便一点
      // 两种语法
      // ...mapGetters(['cartLength','cartList'])
      ...mapGetters({
        length: 'cartLength',
        // list: 'cartList'
      })


      // 2.封装getters再拉到计算属性里：比较多余
      // cartLength() {
      //  将属性封装到getters中，再用vuex去getters获取，比较多余
      //  return this.$store.getters.cartLength
      // },
      // 1.直接定义计算属性
      // cartLength() {
      //   直接获取在vuex中定义的state变量
      //   return this.$store.state.cartList.length
      // }
    }
  }
</script>


<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #ffffff;

  }
</style>
