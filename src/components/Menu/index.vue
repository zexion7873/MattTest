<template>
  <div class="menu">
    <!-- <div v-for="(item, index) in items" :key="item.name" >
      <div id="link-item"  v-if="index !== (items.length - 1)">
        <router-link :to="item.path">{{item.name}}</router-link> |
      </div>
      <div id="link-item"  v-else>
        <router-link :to="item.path">{{item.name}}</router-link>
      </div>
    </div> -->
    <ul v-for="(item, index) in items" :key="item.name" >
       <li id="link-item"  v-if="index !== (items.length - 1)">
          <router-link :to="item.path">{{item.name}}</router-link>
        </li>
        <li id="link-item"  v-else>
          <router-link :to="item.path">{{item.name}}</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    items: {
      type: Array,
      item: {
        path: String,
        name: String
      }
    }
  }
}
</script>

<style scoped>
ul {
  text-align: left
}
a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #42b983;
}

</style>
