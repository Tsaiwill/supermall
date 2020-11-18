<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null,
        probeType: {
          type: Number,
          default: 0
        },
        pullUpLoad: {
          type: Boolean,
          default: false
        }
      }
    },
    mounted() {
      // 1.创建BScroll对象
      // 获取dom元素时，不要用document.selectSelector，这种方法不准确
      // 可以给dom元素设置一个ref,通过this.$refs.refname来获取就能准确定位
      this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          // 我们这里封装成一个可复用的组件，因此监听不能写死
          // 我们将probeType设置成一个变量在props中，通过父组件传值进来
          probeType: this.probeType,
          pullUpLoad: this.pullUpLoad
      })
      // 2.监听滚动的位置
      this.scroll.on('scroll', (position) => {
        // console.log(position);
        // 自定义事件将position发送到父组件中
        this.$emit('scroll', position)
      })

      // 3.监听上拉事件
      this.scroll.on('pullingUp', () => {
        // console.log('上拉加载更多');
        this.$emit('pullingUp')
      })
    },
    methods: {
      // 默认值time=300
      scrollTo(x, y, time=1000) {
        this.scroll.scrollTo(x, y, time)
      },
      finishPushUp() {
        this.scroll.finishPushUp()
      }
    }
  }
</script>

<style scoped>

</style>
