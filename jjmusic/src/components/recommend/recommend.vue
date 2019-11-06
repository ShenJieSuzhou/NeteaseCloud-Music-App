<template>
    <div class="recommend" ref="recommend">
        <Scroll class="recommend-content" ref="scroll">
            <div>
                <div v-show="banner.length" class="decorate" v-if="banner.length"></div>
                <div v-if="banner.length" class="slider-wrapper">
                    <van-swipe :autoplay="3000" indicator-color="white">
                        <van-swipe-item v-for="(image, index) in banner" :key="index">
                            <img :src="image" />
                        </van-swipe-item>
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
        </Scroll>
    </div>
</template>

<script>
import Scroll from '../scroll/scroll';
  export default {
    data () {
        return {
            banner: [
                '/Users/shenjie/Documents/Myproject/VueProj/NeteaseCloud-Music-App/jjmusic/src/assets/images/test/banner/1.jpeg',
                '/Users/shenjie/Documents/Myproject/VueProj/NeteaseCloud-Music-App/jjmusic/src/assets/images/test/banner/2.jpeg',
                '/Users/shenjie/Documents/Myproject/VueProj/NeteaseCloud-Music-App/jjmusic/src/assets/images/test/banner/3.jpeg',
                '/Users/shenjie/Documents/Myproject/VueProj/NeteaseCloud-Music-App/jjmusic/src/assets/images/test/banner/4.jpeg',
                '/Users/shenjie/Documents/Myproject/VueProj/NeteaseCloud-Music-App/jjmusic/src/assets/images/test/banner/5.jpeg',
                '/Users/shenjie/Documents/Myproject/VueProj/NeteaseCloud-Music-App/jjmusic/src/assets/images/test/banner/6.jpeg',
                '/Users/shenjie/Documents/Myproject/VueProj/NeteaseCloud-Music-App/jjmusic/src/assets/images/test/banner/7.jpeg',
                '/Users/shenjie/Documents/Myproject/VueProj/NeteaseCloud-Music-App/jjmusic/src/assets/images/test/banner/8.jpeg',
            ]
        }
    },
    created () {

    },
    methods: {
        onChange(index) {
            console.log('当前 Swipe 索引：' + index);
        }
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
    display: absolute;
    width: 100%;
    height: 100%;

    .recommend-content {
        width: 100%;
        height: 100%;
        overflow: hidden;
        .decorate {
            z-index: -10;
            background: $color-theme;
            width: 100%;
            height: 8rem;
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
