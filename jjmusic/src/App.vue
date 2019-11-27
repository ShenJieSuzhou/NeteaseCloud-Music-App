<template>
  <div id="app">
      <Tabbar></Tabbar>
      <router-view></router-view>
  </div>
</template>

<script>
import Tabbar from './components/tabbar/tab'
export default {
  name: 'baseview',
  components: {
    Tabbar
  }
}
</script>


<style lang="scss">
@import './style/scss/index.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#rootview {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
