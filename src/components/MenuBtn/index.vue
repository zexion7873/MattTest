<template>
  <div class="test">
    <div class='container'>
      <div class='wrap'>
        <input type='checkbox' id='checking' style='display:none;' />
        <!-- 按鈕 -->
        <button class='blob' @click="routerTo('asyncAwait')">&#8987;</button>
        <button class='blob' style="display: none;">&#x2699;</button>
        <button class='blob' style="display: none;">&#x2764;</button>
        <button class='blob' @click="routerTo('pageList')">&#11088;</button>
        <button class='blob' @click="routerTo('/')">&#9962;</button>
        <button class='blob' style="display: none;">&#x270E;</button>
        <button class='blob' style="display: none;">&#x266B;</button>
        <button class='blob' style="display: none;">&#x2706;</button>
        <!-- 按鈕三條槓 -->
        <label class='blob' for='checking'>
          <span class='bar'></span>
          <span class='bar'></span>
          <span class='bar'></span>
        </label>
      </div>
    </div>
    <svg>
      <defs>
        <filter id="filt">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="filt" />
          <feBlend in2="filt" in="SourceGraphic" result="mix" />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'MenuBtn',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    routerTo: function (toName) {
      this.$router.push(toName)
    }
  }
}
</script>

<style scoped>
@import './../../assets/css/_dmaku';

</style>
