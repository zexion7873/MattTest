<template>
  <div id="app">
    <div id="content">
      <div class="content-header">
        <div class="update-time-area">（Last Update: 2020/06/17）</div>
      </div>
      <div class="content-body">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBtn from './components/MenuBtn'
import Menu from './components/Menu/index.vue'
export default {
  name: 'App',
  components: {
    MenuBtn,
    Menu
  },
  data () {
    return {
      menuDatas: [
        { path: '/pageList', name: 'PageList' },
        { path: '/', name: 'Home' },
        { path: '/asyncAwait', name: 'Async' },
        { path: '/translate', name: 'Translate' },
        { path: '/NPS_EN', name: 'NPS_EN' },
        { path: '/NPS_TW', name: 'NPS_TW' }
      ]
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.side {
  width: 6.875vw;
  height: 100vh;
  float: left;
  background-color: #F0F8FF;
}

.content-header {
  padding: 50px;
  margin-bottom: 10px;
  font-size: 2.5em;
  background-color: rgb(197, 224, 255);
}
.update-time-area {
  text-align: right;
  float: right;
  font-size: 0.3em;
}

</style>
