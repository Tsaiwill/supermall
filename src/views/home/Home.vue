<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']"
                 @tabClick="tabClick"
                 ref="tabControl1"
                 class="tab-control" v-show="isTabFixed"/>
<!--自定义事件再回顾：子组件Scroll通过this.$emit提交事件到父组件中，父组件通过@scroll来接受并且传到对应自身的方法中-->
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
  <!--    动态绑定数据-->
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <home-recommend-view :recommends="recommends"/>
      <feature-view/>
  <!--    v-on 语法糖:@-->
      <tab-control :titles="['流行','新款','精选']"
                    @tabClick="tabClick"
                    ref="tabControl2"/>
      <goods-list :goods="showGoods"/>
      <div><button @click="itemClick">跳转按钮</button></div>
      <ul>
        <li>li1</li>
        <li>li2</li>
        <li>li3</li>
        <li>li4</li>
        <li>li5</li>
        <li>li6</li>
        <li>li7</li>
        <li>li8</li>
        <li>li9</li>
        <li>li10</li>
        <li>li11</li>
        <li>li12</li>
        <li>li13</li>
        <li>li14</li>
        <li>li15</li>
        <li>li16</li>
        <li>li17</li>
        <li>li18</li>
        <li>li19</li>
        <li>li20</li>
        <li>li21</li>
        <li>li22</li>
        <li>li23</li>
        <li>li24</li>
        <li>li25</li>
        <li>li26</li>
        <li>li27</li>
        <li>li28</li>
        <li>li29</li>
        <li>li30</li>
        <li>li31</li>
        <li>li32</li>
        <li>li33</li>
        <li>li34</li>
        <li>li35</li>
        <li>li36</li>
        <li>li37</li>
        <li>li38</li>
        <li>li39</li>
        <li>li40</li>
        <li>li41</li>
        <li>li42</li>
        <li>li43</li>
        <li>li44</li>
        <li>li45</li>
        <li>li46</li>
        <li>li47</li>
        <li>li48</li>
        <li>li49</li>
        <li>li50</li>
      </ul>
    </scroll>
<!--    .native:监听组件根元素的原生事件-->
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommendView from "./childComps/HomeRecommendView";
  import FeatureView from "./childComps/FeatureView";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";
  import Scroll from "../../components/common/scroll/Scroll";
  // import BackTop from "../../components/content/backTop/BackTop";

  import {getHomeMultidata,getHomeGoods} from "network/home";
  // 导入封装了mixin的js
  import {itemListenerMixin, backTopMix} from 'common/mixin'

  export default {
    name: "home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      // BackTop
    },
    mixins: [itemListenerMixin, backTopMix],
    data() {
      return {
        // 1.定义一个变量用于保存请求过来的数据
        // result: null
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        tabOffsetTop: 0,
        isTabFixed: false,
        // isShowBackTop: false,
        saveY: 0
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      // 1.请求多个数据
      this.getHomeMultidata();
      // 2.请求商品数据
      // this.getHomeGoods('pop')
      // this.getHomeGoods('new')
      // this.getHomeGoods('sell')
    },
    mounted() {
      console.log('混入mixin的代码回合mounted的代码合并');
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      // 1.保存Y值
      this.saveY = this.$refs.scroll.getScrollY()

      // 2.取消全局事件的监听
      // 将事件定义为变量后，就可以取消了
      this.$bus.$off('itemImgLoad', this.itemImgListener)
    },
    methods: {
      /**
       * 事件监听相关的方法
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        // 将两个tabControl的状态保持一致，通过TabControl组件向父组件发送事件tabclick(index),
        // 通过index参数来将currentType选定并赋值到this.currentType中
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      itemClick() {
        this.$router.push('detail/' + '1m7rp9w')
        // this.$router.push('detail' + this.goodsItem.iid)
        // this.$router.push({
        //   path: '/detail',
        //   query: {
        //
        //   }
        // })
      },
      loadMore() {
        // console.log('loadMore');
        // 加载更多后要调用scroll的finishPullUp方法
        this.getHomeGoods(this.currentType)

      },
      // backClick() {
      //   // 先通过this.$refs.scroll拿到scroll组件
      //   // 再拿scroll变量也就是整个滚动的部分
      //   // 再调用scrollTo方法
      //   // this.$refs.scroll.scroll.scrollTo(0, 0);
      //
      //   // 将滚动部分的方法封装到scroll组件中，这里只做调用
      //   this.$refs.scroll.scrollTo(0, 0, 300);
      // },
      contentScroll(position) {
        // 1. 判断BackTop是否显示
        // this.isShowBackTop = (-position.y) > 600
        // 调用mixin里封装的backTop
        this.listenBackShow(position)
        // 2. 决定tabControl是否吸顶(-position.y > this.tabOffsetTop)
        // this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      swiperImageLoad() {
        // 3.获取到tab的offsetTop，吸顶的事件监听
        // 所有的组件都有一个属性$el:用于获取组件中的元素
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },
      /**
       * 网络请求相关的方法`
       */
      //将获取数据的方法封装到methods中，在created中只做调用
      getHomeMultidata() {
        //   then()就能获取到request.js的返回值，request返回的是Promise
        getHomeMultidata().then(res => {
          // console.log(res);
          // this.result = res;
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          // 拿到获取到的数据，将他存储到变量中
          this.goods[type].list.push(...res.data.list),
          // 请求完一页数据后，要将page+1
          this.goods[type].page + 1
          // 上拉加载更多，一定要调finishPullUp()才行
          this.$refs.scroll.finishPushUp();
        })
      }
    }
  }
</script>

<!--style scoped只会针对当前组件中的样式生效-->
<style scoped>
  #home{
    /*padding-top: 44px;*/
    /*vh-viewport 视口*/
    height: 100vh;
    /*position: relative;*/
  }
  .tab-control{
    position: relative;
    z-index: 9;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }
  .content {
    height: calc(100% - 44px - 44px);
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  /*.content {*/
  /*  height: calc(100% - 93px);*/
  /*  overflow: hidden;*/
  /*  margin-top: px;*/
  /*}*/
</style>
