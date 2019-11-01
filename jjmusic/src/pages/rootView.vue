<template>
  <div class="rootview">
    <Tabbar></Tabbar>
  </div>
</template>


<script>
import Tabbar from '../components/tabbar/tab'
export default {
  name: 'baseview',
  components: {
    Tabbar
  }
}
</script>

<style lang="scss">
#rootview {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>

