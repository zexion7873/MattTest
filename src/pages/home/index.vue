<template>
  <div id="home">
    <h1>登入</h1>
    <router-link :to="{name: 'login'}">
      <p>Login</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    HelloWorld,
    MenuBtn
  }
}
</script>

