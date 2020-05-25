<template>
  <div id="home">
    <h1>測試是否有成功部署</h1>
    <router-link :to="{name: 'NPS_EN'}">
      <p>NPS EN</p>
    </router-link>
     <router-link :to="{name: 'NPS_TW'}">
      <p>NPS TW</p>
    </router-link>
  </div>
</template>

<script>
import HelloWorld from '../../components/HelloWorld'
import MenuBtn from '../../components/MenuBtn'
export default {
  name: 'home',
  components: {
    HelloWorld,
    MenuBtn
  }
}
</script>
