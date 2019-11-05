<template>
  <div id="discovery">
    <TopNav></TopNav>
    <div class="headerMenus">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="个性推荐" name="first">个性推荐</el-tab-pane>
        <el-tab-pane label="主播电台" name="second">主播电台</el-tab-pane>
    </el-tabs>
    </div>
    
    
    
  </div>
</template>

<script>
import TopNav from '../components/header/commonHeader'

export default {
  data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick() {
        


      }
    },
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

    .el-tabs--top {
      width: 100%;
      .el-tabs__nav {
        width: 100%;
        .el-tabs__active-bar {
          background-color: white;
          width: 15% !important;
          margin-left: 17.5%;
        }
        .el-tabs__item {
          width: 50%;
        }
      }

      .el-tabs__nav-wrap::after {
          background-color: $color-theme;
      }

      .el-tabs__item {
        color: #fff;
        padding: 0;
      }

      .el-tabs__item:hover {
        color: #fff;
        cursor: pointer;
      }
    }

  }

</style>