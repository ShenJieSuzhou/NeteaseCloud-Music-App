<template>
  <div id="discovery">
    <TopNav></TopNav>
    <div class="headerMenus">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="个性推荐" name="first">
          <Recommend v-if="isRecommend"></Recommend>
        </el-tab-pane>
        <el-tab-pane label="主播电台" name="second">
          <Radio v-if="isRadio"></Radio>
        </el-tab-pane>
    </el-tabs>
    </div>
    
    
    
  </div>
</template>

<script>
import TopNav from '../components/header/commonHeader'
import Recommend from '../components/recommend/recommend'
import Radio from '../components/radio/radio'

export default {
  data() {
      return {
        activeName: 'first',
        isRecommend: true,
        isRadio: false
      };
    },
    methods: {
      handleClick(tab) {
        if (tab.name == "first") {
          this.isRecommend = true;
          this.isRadio = false;
        } else if (tab.name == "second") {
          this.isRecommend = false;
          this.isRadio = true;
        }
      }
    },
    components: {
      TopNav,
      Recommend,
      Radio
    }
}
</script>



<style lang="scss">
@import "../style/scss/variable.scss";
@import '../style/scss/mixin.scss';
  #discovery {
    background-color: $color-theme;
  }

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
        background-color: $color-theme;
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

      .el-tabs__content {
        margin-top: -5px;
        width: 100%;
        margin-left: -1px;
        margin-right: auto;  
        background-color: white;
        margin-bottom: 2.45rem;
      }
    }

  }

</style>