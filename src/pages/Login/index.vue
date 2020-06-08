<template>
  <div id="home">
    <h1>登入</h1>
    <div class="type-area">
      <label>
        <small>Account</small>
        <div>
          <input type="text" v-model="account">
        </div>
      </label>
    </div>
  <div class="type-area">
    <label>
      <small>password</small>
      <div>
        <input type="password" v-model="password">
      </div>
    </label>
  </div>
  <button @click="confirm">送出</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    confirm: function () {
      if (this.account !== 'matt' || this.password !== 'matt') {
        alert('登入失敗')
      } else {
        this.$router.push({name: 'success'})
      }
    }
  }
}
</script>
<style scoped>

.type-area {
  margin: 15px 0
}
</style>
