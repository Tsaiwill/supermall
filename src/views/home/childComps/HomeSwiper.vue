<template>
  <swiper>
    <!--      遍历banners里的每一个swiper-item-->
    <swiper-item v-for="item in banners">
      <!--        所有链接，图片都是根据banners动态绑定的-->
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "HomeSwiper",
    //父类获取数据，通过props
    props: {
      banners: {
        type: Array,
        // 默认值
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isLoad: false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      imageLoad() {
        if(!this.isLoad) {
          // 只需要发送一次事件即可，能够获取到
          this.$emit('swiperImageLoad')
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>

</style>
