import {debounce} from "./utils";

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
