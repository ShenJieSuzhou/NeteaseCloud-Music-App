<template>
  <div id="discovery">
    <TopNav></TopNav>
    <div class="headerMenus">
      <button class="recomendBtn" type="text" value="">个性推荐</button>
      <button class="radio" type="text">主播电台</button>
    </div>
    
    
    
  </div>
</template>

<script>
import TopNav from '../components/header/commonHeader'

export default {
  components: {
    TopNav
  }
}
</script>



<style lang="scss">
@import "../style/scss/variable.scss";
@import '../style/scss/mixin.scss';

  .headerMenus {
    display: flex;
    width: 100%;
    height: 50px;
    background-color: $color-theme;
    border: $color-theme 1px solid; 
    margin-top: -1px;
    padding: 0%;
    .recomendBtn {
      display: flex;
      width: 50%; 
      height: 100%;
      color: white;
      font-size: 1rem;
      font-family: Arial, Helvetica, sans-serif;
      text-align: center;
      font-weight: bold;
      display: inline-block;
    }
    .radio {
      display: flex;
      width: 50%; 
      height: 100%;
      text-align: center;
      display: inline-block;
      color: white;
      font-size: 1rem;
      font-weight: bold;
      font-family: Arial, Helvetica, sans-serif;
    }
  }

</style>