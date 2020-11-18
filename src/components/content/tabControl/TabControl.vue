<template>
  <div class="tab-control">
<!--    如果只是文字不一样的话，没必要用插槽-->
<!--    可以让别人传入需要显示的文字的数组即可-->
<!--    动态点击效果:设置变量currentIndex=0，动态绑定类active，
        当index === currentIndex时添加样式active，
        因此我们在遍历和点击时需要将index也传到methods里，@click="itemClick(index)"
        -->
    <div v-for="(item, index) in titles"
         class="tab-control-item"
         :class="{active: index === currentIndex}"
          @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
      //  外面往里传数据用props，里面往外传数据用自定义事件$emit
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    background-color: #ffffff;
  }
  .tab-control-item{
    /*平均分布*/
    flex: 1;
  }
  .tab-control-item span{
    padding-top: 7px;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 3px solid var(--color-high-text);
  }
</style>
