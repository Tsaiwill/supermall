<template>
  <div class="check-button" :class="{checked: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .check-button {
    background-color: #ff8198;
    border-radius: 50%;
    border: 2px solid #aaa;
  }

  .checked {
    border-color: red;
  }
</style>
