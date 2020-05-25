<template>
  <div id="home">
    <h1>測試是否有成功部署</h1>
    <div class="type-area">
      <label>
        <small>Account</small>
        <div>
          <input v-model="account">
        </div>
      </label>
    </div>
  <div class="type-area">
    <label>
      <small>password</small>
      <div>
        <input v-model="password">
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
      if (this.account !== 'matt' && this.password !== 'matt') {
        this.$router.push({name: 'success'})
      } else {
        alert('登入成功')
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
