<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      addToCart() {
        this.$emit('addCart')
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    height: 49px;
    background-color: #ffffff;

    position: relative;
    /*bottom: 49px;*/
    z-index: 1000;
    /*position: fixed;*/
    /*right: 0;*/
    /*left: 0;*/
    /*bottom: 0;*/
  }
  .bar-item {
    flex: 1;
    display: flex;
    float: left;
  }
  .bar-item > div {
    flex: 1;
    height: 49px;
  }
  .bar-left > div {
    width: 36.5px;
  }
  .bar-left .text {
    font-size: 13px;
    margin-left: 4px;
  }
  .bar-left .icon{
    display: block;
    width: 22px;
    height: 22px;
    margin: 6px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }
  .bar-left .service {
    background-position: 0 -53px;
  }
  .bar-left .shop{
    background-position: 0 -98px;
  }
  .bar-right{
    font-size: 15px;
    text-align: center;
    color: #ffffff;
    line-height: 58px;
  }
  .bar-right > div {
    width: 105.2px;
  }
  .bar-right .cart{
    background-color: #ffe817;
    color: #333;
  }
  .bar-right .buy{
    background-color: #f69;
  }
  .sport-ball {
    position: absolute;
    left: 225px;
    bottom: 20px;
  }
</style>
