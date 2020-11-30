import {debounce} from "./utils";
import BackTop from "../components/content/backTop/BackTop";

export const itemListenerMixin = {
  components: {},
  methods: {},
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    // 将refresh作为参数传到debounce
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    // 图片加载完成的事件监听
    // 定义变量用于记载事件
    this.itemImgListener = () => {
      refresh()
    }
    // 对我们监听的事件进行保存
    this.$bus.$on('itemImageLoad', this.itemImgListener)
  }
}

export const backTopMix = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick() {
      // 先通过this.$refs.scroll拿到scroll组件
      // 再拿scroll变量也就是整个滚动的部分
      // 再调用scrollTo方法
      // this.$refs.scroll.scroll.scrollTo(0, 0);

      // 将滚动部分的方法封装到scroll组件中，这里只做调用
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    listenBackShow(position) {
      // 1. 判断BackTop是否显示
      this.isShowBackTop = -position.y > 600
    }
  }
}
