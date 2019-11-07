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
                    <div class="section-header">
                        <h1 class="title">推荐歌单</h1>
                        <svg t="1573096972838" class="arrow" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2043" width="200" height="200"><path d="M720.2816 490.752L347.1872 117.76a30.72 30.72 0 1 0-43.4688 43.4688l351.6416 351.232-351.6416 351.3856a30.72 30.72 0 1 0 43.4688 43.4176l373.0944-373.0944a30.72 30.72 0 0 0 0-43.4176z" fill="#2c2c2c" p-id="2044"></path></svg>
                    </div>
                    <ul>
                        <li class="item" v-for="item in PlayList" :key="item.id">
                            <div class="icon">
                                <div class="gradients"></div>
                                <img :src="item.image" alt="">
                            </div>
                            <p class="play-count">
                                <i class="fa fa-headphones"></i>
                                {{ item.playAmount }} 万
                            </p>
                            <div class="text">
                                <p class="name">{{ item.desc }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="latestsong-list">
                    <div class="section-header">
                        <h1 class="title">最新音乐</h1>
                        <svg t="1573096972838" class="arrow" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2043" width="200" height="200"><path d="M720.2816 490.752L347.1872 117.76a30.72 30.72 0 1 0-43.4688 43.4688l351.6416 351.232-351.6416 351.3856a30.72 30.72 0 1 0 43.4688 43.4176l373.0944-373.0944a30.72 30.72 0 0 0 0-43.4176z" fill="#2c2c2c" p-id="2044"></path></svg>
                    </div>
                    <ul>
                        <li class="item" v-for="item in LatestSongs" :key="item.id">
                            <div class="icon">
                                <div class="gradients"></div>
                                <img :src="item.image" alt="">
                            </div>
                            <p class="play-count">
                                <i class="fa fa-headphones"></i>
                                {{ item.playAmount }} 万
                            </p>
                            <div class="text">
                                <p class="name">{{ item.desc }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="hostradio-list">
                    <div class="section-header">
                        <h1 class="title">主播电台</h1>
                        <svg t="1573096972838" class="arrow" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2043" width="200" height="200"><path d="M720.2816 490.752L347.1872 117.76a30.72 30.72 0 1 0-43.4688 43.4688l351.6416 351.232-351.6416 351.3856a30.72 30.72 0 1 0 43.4688 43.4176l373.0944-373.0944a30.72 30.72 0 0 0 0-43.4176z" fill="#2c2c2c" p-id="2044"></path></svg>
                    </div>
                    <ul>
                        <li class="item" v-for="item in HostRadio" :key="item.id">
                            <div class="icon">
                                <div class="gradients"></div>
                                <img :src="item.image" alt="">
                            </div>
                            <p class="play-count">
                                <i class="fa fa-headphones"></i>
                                {{ item.playAmount }} 万
                            </p>
                            <div class="text">
                                <p class="name">{{ item.desc }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Scroll>
    </div>
</template>

<script>
import Scroll from '../scroll/scroll';
import PlayList from '../../mock/recommendList.js'
import LatestSongs from '../../mock/latestMusic.js'
import HostRadio from '../../mock/hostRadio.js'
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
            ],
            PlayList,
            LatestSongs,
            HostRadio
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
    position: fixed;
    width: 100%;
    top: 114px;
    bottom: 0;
    z-index: 100;

    .recommend-content {
        width: 100%;
        height: 100%;
        overflow: hidden;
        .decorate {
            position: absolute;
            height: 8rem;
            z-index: -10;
            background: $color-theme;
            width: 100%;
            vertical-align: inherit;
        }
        .slider-wrapper {
            width: 96%;
            margin: 0 auto;
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
        .recommend-list {
            position: relative;
            box-sizing: border-box;
            width: 100%;
            text-align: center;
        
        .item {
            display: inline-block;
            position: relative;
            box-sizing: border-box;
            width: 33%;
            padding: 0 1%;
            .icon {
                position: relative;
                display: inline-block;
                width: 100%;
                margin-bottom: 5px;
                .gradients {
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 35px;
                    border-radius: 3px;
                    background: linear-gradient(rgba(109, 109, 109, 0.4),rgba(255, 255, 255, 0));
                }
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 3px;
                }
            }
            .play-count {
                position: absolute;
                top: 5px;
                right: 8px;
                font-size: $font-size-small-s;
                color: $color-text-l
            }
            .text {
                float: left;
                line-height: 16px;
                text-align: left;
                height: 40px;
                margin-bottom: 10px;
                color: black;
                font-size: 12px;
                font-family: Arial, Helvetica, sans-serif;
            }
        }
    }

    .latestsong-list {
            position: relative;
            box-sizing: border-box;
            width: 100%;
            text-align: center;

        .item {
            display: inline-block;
            position: relative;
            box-sizing: border-box;
            width: 33%;
            padding: 0 1%;
            .icon {
                position: relative;
                display: inline-block;
                width: 100%;
                margin-bottom: 5px;
                .gradients {
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 35px;
                    border-radius: 3px;
                    background: linear-gradient(rgba(109, 109, 109, 0.4),rgba(255, 255, 255, 0));
                }
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 3px;
                }
            }
            .play-count {
                position: absolute;
                top: 5px;
                right: 8px;
                font-size: $font-size-small-s;
                color: $color-text-l
            }
            .text {
                float: left;
                line-height: 16px;
                text-align: left;
                height: 40px;
                line-height: 16px;
                margin-bottom: 10px;
                font-size: $font-size-small;
                color: black;
                font-size: 12px;
                font-family: Arial, Helvetica, sans-serif;
            }
        }
    }

        .hostradio-list {
            position: relative;
            box-sizing: border-box;
            width: 100%;
            text-align: center;
        
        .item {
            display: inline-block;
            position: relative;
            box-sizing: border-box;
            width: 33%;
            padding: 0 1%;
            .icon {
                position: relative;
                display: inline-block;
                width: 100%;
                margin-bottom: 5px;
                .gradients {
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 35px;
                    border-radius: 3px;
                    background: linear-gradient(rgba(109, 109, 109, 0.4),rgba(255, 255, 255, 0));
                }
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 3px;
                }
            }
            .play-count {
                position: absolute;
                top: 5px;
                right: 8px;
                font-size: $font-size-small-s;
                color: $color-text-l
            }
            .text {
                float: left;
                line-height: 16px;
                text-align: left;
                height: 40px;
                line-height: 16px;
                margin-bottom: 10px;
                color: black;
                font-size: 12px;
                font-family: Arial, Helvetica, sans-serif;
            }
        }
    }

    .section-header {
        display: inline-block;
        position: relative;
        height: 65px;
        width: 100%;
        .title {
            position: absolute;
            height: 65px;
            width: 30%;
            line-height: 65px;
            padding-left: 1.5%;
            text-align: left;
            font-size: $font-size-large-s;
            font-weight: bold;
            color: $color-text;
            @include center;
            left: 16%;
        }
        .arrow {
            position: absolute;
            height: 20px;
            width: 20px;
            @include center;
            left: 25%;
        }
    }

    }
}


</style>
