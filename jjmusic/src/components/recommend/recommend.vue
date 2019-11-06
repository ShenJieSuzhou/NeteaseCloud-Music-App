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
                'http://p1.music.126.net/v9HRHiUWjx43IfF5t6VpHw==/109951164470689529.jpg?imageView&quality=89',
                'http://p1.music.126.net/KP4T1dHHiH0nYdTI0ublVg==/109951164470734422.jpg?imageView&quality=89',
                'http://p1.music.126.net/-wDwFA0g2up2N5DXQnJzlQ==/109951164470472507.jpg?imageView&quality=89',
                'http://p1.music.126.net/k4vd0A0dBwJ-w16x-t-6Vw==/109951164471342210.jpg?imageView&quality=89',
                'http://p1.music.126.net/A9HPyPW-JWplFLZm2x2cBA==/109951164471348282.jpg?imageView&quality=89',
                'http://p1.music.126.net/vdYlz6MPauUO99ByMUlJbw==/109951164471752672.jpg?imageView&quality=89',
                'http://p1.music.126.net/vwwJwWnl5LbjZ0F5KZdLCg==/109951164471359634.jpg?imageView&quality=89',
                'http://p1.music.126.net/VaMj97k0TfiRcZlU19xxvA==/109951164471363119.jpg?imageView&quality=89',
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
    width: 100%;
    height: 100%;
    
    .recommend-content {
        width: 100%;
        height: 100%;
        overflow: hidden;
        .decorate {
            display: absolute;
            background: $color-theme;
            width: 100%;
            height: 8rem;
        }
        .slider-wrapper {
            width: 96%;
            margin-top: -120px;
            margin-left: auto;
            margin-right: auto; 
            border-radius: 5px;
            overflow: hidden;
        }
        img {
            width: 98%;
            border-radius: 5px;
        }
        .quickMenus {
            width: 100%;
            height: 4rem;
            background-color: white;

            button {
                width: 25%;
                height: 4rem;
                background-color: $color-theme;
                color: white;
            }
        }
    }
}


</style>
