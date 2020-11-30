<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
    components: {
      NavBar
    },
    computed: {
      // 直接将getters.js里的拿出来用会方便一点
      // 两种语法
      // ...mapGetters(['cartLength','cartList'])
      ...mapGetters({
        length: 'cartLength',
        list: 'cartList'
      })


      // 封装getters再拉到计算属性里：比较多余
      // cartLength() {
      //  return this.$store.getters.cartLength
      // },
      // 直接定义计算属性
      // cartLength() {
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
