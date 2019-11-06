<template>
    <div class="recommend" ref="recommend">
        <scroll class="recommend-content" ref="scroll">
            <div>
                <div v-show="banner.length" class="decorate" v-if="banner.length"></div>
                <div v-if="banner.length" class="slider-wrapper">
                    <van-swipe :autoplay="3000" indicator-color="white">
                        <van-swipe-item>1</van-swipe-item>
                        <van-swipe-item>2</van-swipe-item>
                        <van-swipe-item>3</van-swipe-item>
                        <van-swipe-item>4</van-swipe-item>
                    </van-swipe>
                </div>
                <div class="quickMenus">
                    <button>私人FM</button>
                    <button>每日推荐</button>
                    <button>歌单</button>
                    <button>排行榜</button>
                </div>
                <div class="recommend-list">
                    <h1 class="title">推荐歌单</h1>
                    <ul>
                        <li>1111</li>
                    </ul>
                </div>
                <div class="latestsong-list">
                    <h1 class="title">最新音乐</h1>
                    <ul>
                        <li>2222</li>
                    </ul>
                </div>
                <div class="hostradio-list">
                    <h1 class="title">主播电台</h1>
                    <ul>
                        <li>3333</li>
                    </ul>
                </div>
            </div>
        </scroll>
    </div>
</template>

<script>
import Scroll from '../scroll/scroll';
  export default {
    data () {
        return {
            banner: [
                '../../assets/images/test/banner/1.jpeg',
                '../../assets/images/test/banner/2.jpeg',
                '../../assets/images/test/banner/3.jpeg',
                '../../assets/images/test/banner/4.jpeg',
                '../../assets/images/test/banner/5.jpeg',
                '../../assets/images/test/banner/6.jpeg',
                '../../assets/images/test/banner/7.jpeg',
                '../../assets/images/test/banner/8.jpeg',
            ]
        }
    },
    created () {

    },
    methods: {

    },
    components: {
        Scroll
    }
  }
</script>

<style lang="scss" scoped>
@import "../../style/scss/mixin.scss";
@import "../../style/scss/variable.scss";

.recommend {
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
    z-index: 100;

    .recommend-content {
        width: 100%;
        height: 100%;
        overflow: hidden;
        .decorate {
            position: absolute;
            top: -30vh;
            z-index: -10;
            background: $color-theme;
            width: 100%;
            height: 50vh;
            vertical-align: inherit;
        }
        .slider-wrapper {
            width: 96%;
            margin: 0 auto;
            border-radius: 5px;
            overflow: hidden;
        }
    }
}


</style>
