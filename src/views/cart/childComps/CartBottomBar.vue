<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
           :is-checked="isSelectAll"
           class="check-button"
           @click.native="checkClick"/>
      <span>全选</span>
    </div>
    <div class="price">
      合计:{{totalPrice}}
    </div>
    <div class="calculate" @click="calcClick">
      去结算({{checkLength}})
    </div>
  </div>
</template>

<script>
  import CheckButton from "../../../components/content/checkButton/CheckButton";
  import { mapGetters } from 'vuex'

  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    methods: {
      checkClick() {
        if(this.isSelectAll) {// 全部选中
          this.cartList.forEach(item => item.checked = false)
        } else {// 部分或全部未选中
          this.cartList.forEach(item => item.checked = true)
        }
      },
      calcClick() {
        if(!this.isSelectAll){
          this.$toast.show('请选择购买的商品', 2000)
        }
      }
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        // 找出所选项
        return '￥' + this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },
      checkLength() {
        return this.cartList.filter(item => item.checked).length
      },
      isSelectAll() {
        // 没数据时默认为false
        if (this.cartList.length === 0) return false

        // 高阶数组函数
        // filter过滤没被选中的选项，当存在选项没被选中，那么length就不为0，不为0时加上!就返回false,也即不选中
        // 但是这一种方法为遍历所有，较为拖沓
        // return !(this.cartList.filter(item => !item.checked).length)

        // 用find的话会更好
        return !this.cartList.find(item => !item.checked)

        // 普通遍历方法
        for(let item of this.cartList) {
          if(!item.checked) {
            return false
          }
        }
        return true
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    position: relative;
    display: flex;

    height: 40px;
    line-height: 40px;
    font-size: 4px;

    background-color: #eeeeee;
  }
  .check-content {
    display: flex;
    align-items: center;
    margin-left: 8px;
    width: 60px;
  }
  .check-button {
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-left: 5px;
  }
  .price {
    margin-left: 30px;
    flex: 1;
  }
  .calculate {
    width: 60px;
    background-color: #ff8198;
    color: #f6f6f6;
    text-align: center;
  }
</style>
