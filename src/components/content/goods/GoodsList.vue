<template>
  <div class="goods">
<!--    遍历出来的item绑定到goods-item上，作为传递给子组件GoodsListItem的数据-->
    <goods-list-item v-for="item in goods" :goods-item="item"/>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";

  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
  //  这里需要Home传递一个需要展示的商品数组过来
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    /*设置布局为flex包裹*/
    /*GoodsListItem宽度设置为48%即可每行显示两个*/
    flex-wrap: wrap;
    /*均等分，justify*/
    justify-content: space-around;

    padding: 2px;
  }

</style>
