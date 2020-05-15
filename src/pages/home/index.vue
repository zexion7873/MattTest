<template>
  <div id="home">
    <hello-world></hello-world>
    <a href="/scb/nps_close"><button>關閉視窗</button></a>
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
