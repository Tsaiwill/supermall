<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick(index)" ref="nav"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo"/>
      <detail-param-info ref="params" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <!--复用goodslist组件用作推荐商品-->
      <goods-list ref="recommend" :goods="recommends"/>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"/>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailBottomBar from './childComps/DetailBottomBar'

  import Scroll from "../../components/common/scroll/Scroll";
  import GoodsList from "../../components/content/goods/GoodsList";

  //导入mixin
  import {itemListenerMixin, backTopMix} from 'common/mixin'
  import {getDetail, Goods, Shop, GoodsParam, getRecommend} from 'network/detail'
  import {debounce} from "common/utils";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      GoodsList,
      Scroll
    },
    mixins: [itemListenerMixin, backTopMix],
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        themeTopYs: [],
        getThemeTopY: null,
        currentIndex: 0
      }
    },
    created() {
      // 1.保存传入的iid
      this.iid = this.$route.params.iid

      // 2.根据iid请求详情数据
      // 将方法抽离到network的js中
      // request返回的是Promise
      getDetail(this.iid).then(res => {
        // res是返回的大的对象
        // 2.1 获取顶部的图片轮播数据
        const data = res.result;
        this.topImages = data.itemInfo.topImages

        // 3.获取商品信息
        this.goodsInfo = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 4.导入店铺信息
        this.shopInfo = new Shop(data.shopInfo)

        // 5.保存商品的详情数据
        this.detailInfo = data.detailInfo;

        // 6.获取参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        // 7.取出评论信息
        if(data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }

      })

      // 3.请求推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list
      })

      // 4.给getThemeTopY变量赋值
      // 防抖函数，将赋值操作作为参数传入到debounce中，返回的是一个函数
      // 返回的函数就可以拿来调用了
      this.getThemeTopY = debounce(() => {
        // Number.MAX_VALUE
        this.themeTopYs = []
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        this.themeTopYs.push(Number.MAX_VALUE)
      }, 100)
    },
    mounted() {
    },
    destroyed() {
      this.$bus.$off('itemImgLoad')
    },
    methods: {
      detailImageLoad() {
        this.getThemeTopY()
      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500)
      },
      contentScroll(position) {
        this.listenBackShow(position)

        // 1.获取Y值
        const positionY = -position.y
        // 2.positionY和主题中的值进行对比
        let length = this.themeTopYs.length
        for(let i = 0;i < length-1; i++){
          // if(this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTopYs[i] && positionY <  this.themeTopYs[i+1]) || (i === length - 1 && positionY > this.themeTopYs[i]))) {
          if (this.currentIndex !== i && (positionY >= this.themeTopYs[i]) && (positionY < this.themeTopYs[i+1])) {
            this.currentIndex = i;
            // 传值到DetailNavBar组件中
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
      },
      addToCart() {
        // 1.获取购物车需要展示的信息
        const product = {}
        product.image = this.topImages[0];
        product.title = this.goodsInfo.title;
        product.desc = this.goodsInfo.desc;
        product.price = this.goodsInfo.realPrice;
        product.iid = this.iid

        // 2.将商品添加到购物车
        this.$store.dispatch('addCart', product)
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .content {
    /* 100%是参照父元素的，如果不给父元素高度，会由内容直接撑起来，高度会较大 */
    height: calc(100% - 44px - 49px);
  }
  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #ffffff;
  }
</style>
