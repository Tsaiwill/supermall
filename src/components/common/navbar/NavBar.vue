<template>
<!--  组件肯定有根-->
<!--  这里起id不好，因为可能存在多个导航栏，所以用class-->
  <div class="nav-bar">
<!--    这里需要对slot进行布局，布局我们需要用div包起来-->
<!--    这里用具名插槽-->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center">购物街</slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,0.15);
  }
  .left, .right {
    width: 60px;

  }
  .center {
    flex: 1;

  }
</style>
