<template>
  <div class="cartList">
    <scroll class="content">
  <!-- 3.遍历拿到的cartList，获取到item和index，绑定key，传递item到子组件itemInfo中-->
      <cart-list-item v-for="(item, index) in cartList"
                      :key="index"
                      :item-info="item"/>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "../../../components/common/scroll/Scroll";
  import CartListItem from "./CartListItem";

  import { mapGetters } from 'vuex'

  export default {
    name: "CartList",
    components: {
      Scroll,
      CartListItem
    },
    // 2.CartList自己去getters里获取数据，拿到cartList
    computed: {
      ...mapGetters(['cartList'])
    },
    activated() {
      // 1.在数据过来后刷新页面重置scrollerHeight
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cartList {
    height: calc(100% - 44px - 49px - 40px);
  }
  .content {
    height: 100%;
    overflow: hidden;
  }
</style>
