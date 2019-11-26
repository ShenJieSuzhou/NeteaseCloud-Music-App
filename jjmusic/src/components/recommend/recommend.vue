<template>
    <div class="recommend" ref="recommend">
        <Scroll class="recommend-content" ref="scroll">
            <div>
                <div v-show="banner.length" class="decorate" v-if="banner.length"></div>
                <div v-if="banner.length" class="slider-wrapper">
                    <van-swipe :autoplay="3000" indicator-color="white">
                        <van-swipe-item v-for="(item, index) in banner" :key="index" @click="selectBanner(item)">
                            <img :src="item.imageUrl" />
                        </van-swipe-item>
                    </van-swipe>
                </div>
                <div class="quickMenus">
                    <span>
                        <button class="quickButton" @click="selectPrivateFM()">
                            <svg t="1573115479890" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7898" width="32" height="32"><path d="M686.204229 674.873182c10.915585 0 20.791494-4.351089 27.911644-11.385282l0.159636-0.167822c7.037263-7.127313 11.396538-16.972523 11.396538-27.896294 0-10.903306-4.44114-20.764888-11.556174-27.889132-7.116057-7.145733-16.996059-11.560267-27.915737-11.560267-10.99745-0.01535-20.835496 4.351089-27.872759 11.400632l-0.156565 0.155542c-7.041356 7.01782-11.403701 16.895775-11.403702 27.893225 0.004093 10.888979 4.401231 20.773074 11.560267 27.900388 7.119127 7.12015 16.996059 11.556174 27.872759 11.556173l0.004093-0.007163z m107.012032 67.556494c-27.388736 27.376456-65.224383 44.329536-107.016125 44.329536-41.749786-0.004093-79.624319-16.933637-106.978263-44.325443-27.392829-27.393852-44.350002-65.21722-44.350002-107.008962 0-41.784578 16.95308-79.616133 44.350002-107.004869 27.358037-27.388736 65.224383-44.328513 106.978263-44.328512 41.795835-0.013303 79.624319 16.948987 107.016125 44.328512 27.395899 27.373386 44.311116 65.22029 44.311116 107.004869 0.004093 41.768206-16.914194 79.620226-44.311116 107.008962v-0.004093zM123.962042 817.350889c-11.162202 0-20.199001-9.040892-20.199001-20.20207 0-11.165272 9.037822-20.203094 20.194908-20.203094l313.094232-0.01535c11.161178 0 20.237886 9.063405 20.237886 20.218444 0 11.149922-9.080801 20.206164-20.237886 20.206164l-313.090139-0.004094z m0-80.858424c-11.162202 0-20.199001-9.040892-20.199001-20.206164 0-11.161178 9.037822-20.207187 20.194908-20.207187l276.383195-0.007163c11.157085 0 20.194907 9.060335 20.194907 20.21435 0.004093 11.152992-9.040892 20.210257-20.194907 20.210257l-276.379102-0.004093z m0-80.87275c-11.162202 0-20.199001-9.037822-20.199001-20.194908 0-11.173458 9.037822-20.203094 20.194908-20.203094l265.22611-0.007163c11.158108 0 20.194907 9.053172 20.194907 20.210257 0 11.142759-9.036799 20.206164-20.199 20.206164l-265.217924-0.011256z m0-80.858425c-11.162202 0-20.199001-9.037822-20.199001-20.190814 0-11.177551 9.037822-20.21435 20.194908-20.21435l276.383195-0.016373c11.157085 0 20.194907 9.068521 20.194907 20.230723 0.004093 11.138666-9.040892 20.197977-20.194907 20.197977l-276.379102-0.007163z m0-80.858424c-11.162202 0-20.199001-9.044985-20.199001-20.203094 0-11.163225 9.037822-20.207187 20.194908-20.207187l313.094232-0.00921c11.161178 0 20.237886 9.058288 20.237886 20.216397 0 11.151969-9.080801 20.212304-20.237886 20.212304l-313.090139-0.00921z" fill="#ffffff" p-id="7899"></path><path d="M845.36998 794.586465v0.016373c40.748995-40.744901 65.942743-97.022537 65.942743-159.178031s-25.193748-118.436199-65.946836-159.167798c-40.706016-40.748995-96.979558-65.937626-159.165751-65.937626-62.147308-0.008186-118.416757 25.197841-159.165751 65.937626-40.711132 40.735692-65.907951 97.009234-65.907951 159.167798 0 62.140145 25.197841 118.440293 65.907951 159.178031 40.756158 40.725459 97.018443 65.9233 159.165751 65.927393 62.189263-0.008186 118.455642-25.197841 159.165751-65.931486l0.004093-0.01228z m-159.165751 13.641668l-0.004093 0.004093c-47.708486 0-90.899085-19.351705-122.17433-50.61467s-50.63002-74.480169-50.630019-122.192749 19.354775-90.929784 50.630019-122.186609c31.275245-31.269105 74.465843-50.631043 122.17433-50.622856 47.747372 0 90.94104 19.339425 122.216285 50.622856 31.271152 31.265012 50.62695 74.462773 50.588064 122.186609 0 47.720766-19.316912 90.918527-50.588064 122.192749-31.275245 31.266035-74.46482 50.610577-122.212192 50.610577z" fill="#ffffff" p-id="7900"></path><path d="M187.988136 960.41802v14.993452c0 14.441892-11.719902 26.154631-26.158724 26.154631-14.433705-0.008186-26.154631-11.711716-26.154631-26.151561l0.004093-14.996522h-23.838893c-27.271056 0-52.027853-11.134572-69.985818-29.067978-17.909869-17.936475-29.072071-42.704529-29.072071-69.969445v-451.932046c0-27.245473 11.154015-52.010457 29.072071-69.950002 17.956941-17.945685 42.709645-29.065931 69.985818-29.065931l21.839357-0.017396 227.350554-87.820986c5.076612-1.945301 10.356861-2.09982 15.277931-0.799201l149.449478-57.761426a20.177511 20.177511 0 0 1 16.8354 1.130751l148.765911-57.475924c3.761666-1.438766 7.760739-1.013071 11.037359 0.82376l161.047607-62.227126c-0.116657-9.646688 4.32039-18.261886 15.235976-22.456409 10.880793-4.216013 25.993972 1.358948 30.716521 13.606875 4.756318 12.233601-2.721989 26.531207-13.598689 30.73801-10.872607 4.186337-19.956478 0.81455-26.354175-6.406907l-161.08854 62.206659c-1.199312 3.581565-3.917208 6.611568-7.677851 8.06466l-148.68814 57.425783c-1.917672 5.396906-6.080473 9.978239-11.840653 12.186529l-149.359427 57.690818c-2.764968 4.264108-6.845905 7.756645-11.966519 9.711156l-107.133805 41.361954h640.46765c27.271056 0 52.067762 11.149922 69.981724 29.083328 17.918056 17.922149 29.076164 42.709645 29.076165 69.969444l0.004093 451.900324c0 27.272079-11.162202 52.048319-29.080258 69.981725-17.913963 17.929312-42.709645 29.076164-69.985817 29.076164l-23.834801-0.008187v14.993453c0 14.441892-11.715809 26.154631-26.155654 26.154631-14.433705-0.008186-26.154631-11.711716-26.154631-26.151561v-14.996523H187.988136v0.001024z m705.01256-153.217285l-0.004094 0.008187c-19.316912 0-34.992909 15.66474-34.992909 35.008258 0 19.336355 15.68009 34.997002 34.992909 35.008259 19.354775 0 35.034864-15.675996 35.030771-35.008259 0-19.332262-15.675996-35.016445-35.026677-35.016445z m19.15523-444.488531H111.838958c-12.833257 0-24.514274 5.284343-32.993373 13.76651-8.475005 8.477052-13.754231 20.167278-13.754231 32.98928v451.900324c0 12.822001 5.280249 24.522461 13.754231 33.001558 8.483191 8.469888 20.160115 13.754231 32.993373 13.754232l800.316968-0.004094c12.833257 0 24.510181-5.26797 32.989279-13.751161 8.482168-8.483191 13.758324-20.168302 13.758325-32.989279V409.448551c0-12.812791-5.280249-24.488692-13.758325-32.969837-8.475005-8.494448-20.156022-13.754231-32.993372-13.754231l0.004093-0.012279z" fill="#ffffff" p-id="7901"></path><path d="M893.000696 463.634553c-19.316912 0-34.997002-15.669856-34.997003-35.002119 0-19.345565 15.675996-35.008258 34.992909-35.005189 19.354775-0.01535 35.030771 15.671903 35.030771 35.005189 0.004093 19.328169-15.675996 35.006212-35.030771 35.006212l0.004094-0.004093zM893.000696 807.200735c19.350682 0 35.026678 15.684183 35.026677 35.016445 0.004093 19.332262-15.675996 35.008258-35.030771 35.008259-19.312819-0.011256-34.992909-15.671903-34.992909-35.008259 0-19.343518 15.675996-35.008258 34.992909-35.008258l0.004094-0.008187z" fill="#ffffff" p-id="7902"></path></svg>
                        </button>
                        <p>私人FM</p>
                    </span>
                    <span>
                        <button class="quickButton" @click="selectDailyRecommend()">
                            <svg t="1573115345904" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5668" width="32" height="32"><path d="M832 57.6c-19.2 0-32 12.8-32 32s12.8 32 32 32c57.6 0 102.4 44.8 102.4 102.4l0 64L89.6 288l0-64c0-57.6 44.8-102.4 102.4-102.4 19.2 0 32-12.8 32-32S211.2 57.6 192 57.6c-89.6 0-166.4 70.4-166.4 166.4l0 633.6C32 953.6 102.4 1024 192 1024L832 1024c89.6 0 166.4-70.4 166.4-166.4L998.4 224C992 134.4 921.6 57.6 832 57.6zM832 966.4 192 966.4c-57.6 0-102.4-44.8-102.4-102.4l0-512 844.8 0 0 512C934.4 915.2 889.6 966.4 832 966.4z" p-id="5669" fill="#ffffff"></path><path d="M300.8 166.4c19.2 0 32-12.8 32-32L332.8 32C332.8 12.8 320 0 300.8 0 281.6 0 268.8 12.8 268.8 32l0 102.4C268.8 153.6 281.6 166.4 300.8 166.4z" p-id="5670" fill="#ffffff"></path><path d="M499.2 166.4c19.2 0 32-12.8 32-32L531.2 32C524.8 12.8 512 0 499.2 0 480 0 467.2 12.8 467.2 32l0 102.4C467.2 153.6 480 166.4 499.2 166.4z" p-id="5671" fill="#ffffff"></path><path d="M691.2 166.4c19.2 0 32-12.8 32-32L723.2 32c0-19.2-12.8-32-32-32s-32 12.8-32 32l0 102.4C665.6 153.6 678.4 166.4 691.2 166.4z" p-id="5672" fill="#ffffff"></path><path d="M390.4 480c0 12.8 12.8 25.6 25.6 25.6l166.4 0C569.6 537.6 550.4 569.6 537.6 595.2 524.8 627.2 512 652.8 499.2 684.8c-12.8 32-19.2 57.6-32 89.6-6.4 12.8-6.4 32-12.8 44.8-6.4 19.2 12.8 38.4 32 38.4 19.2 0 32-12.8 32-25.6 6.4-25.6 12.8-44.8 19.2-70.4 6.4-32 19.2-64 32-89.6C582.4 640 595.2 608 614.4 576c12.8-32 32-64 44.8-89.6L659.2 454.4 422.4 454.4C403.2 454.4 390.4 467.2 390.4 480z" p-id="5673" fill="#ffffff"></path></svg>
                        </button>
                        <p>每日推荐</p>
                    </span>
                    <span>
                        <button class="quickButton" @click="selectMusicList()">
                            <svg t="1573115400015" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6091" width="32" height="32"><path d="M964.608 234.496c-46.08-52.565333-104.789333-93.696-169.642667-118.784a34.030933 34.030933 0 0 0-46.421333 31.744v420.352a178.005333 178.005333 0 0 0-110.933333-38.741333c-98.816 0-179.2 80.384-179.2 179.2S538.794667 887.466667 637.610667 887.466667s179.2-80.384 179.2-179.2c0-1.877333-0.170667-3.754667-0.341334-5.632 0-1.024 0.341333-1.877333 0.341334-2.901334V201.216c36.181333 20.309333 69.12 46.933333 96.597333 78.165333 12.458667 14.165333 34.133333 15.530667 48.128 3.072 14.165333-12.288 15.530667-33.792 3.072-47.957333zM637.610667 819.2c-61.098667 0-110.933333-49.834667-110.933334-110.933333s49.834667-110.933333 110.933334-110.933334 110.933333 49.834667 110.933333 110.933334-49.834667 110.933333-110.933333 110.933333zM185.344 307.2h392.533333c18.773333 0 34.133333-15.36 34.133334-34.133333s-15.36-34.133333-34.133334-34.133334h-392.533333a34.133333 34.133333 0 1 0 0 68.266667zM424.277333 460.8h-238.933333c-18.773333 0-34.133333 15.36-34.133333 34.133333s15.36 34.133333 34.133333 34.133334h238.933333c18.773333 0 34.133333-15.36 34.133334-34.133334s-15.36-34.133333-34.133334-34.133333zM321.877333 682.666667h-136.533333c-18.773333 0-34.133333 15.36-34.133333 34.133333s15.36 34.133333 34.133333 34.133333h136.533333c18.773333 0 34.133333-15.36 34.133334-34.133333s-15.36-34.133333-34.133334-34.133333z" p-id="6092" fill="#ffffff"></path></svg>
                        </button>
                        <p>歌单</p>
                    </span>
                    <span>
                        <button class="quickButton" @click="selectRankingList()">
                            <svg t="1573115452255" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6809" width="32" height="32"><path d="M318.696727 973.870545H35.863273V484.328727h282.810182v489.541818z m-236.288-46.545454h189.719273V530.874182H82.408727v396.450909zM988.113455 973.870545H705.303273V282.507636h282.810182v691.362909z m-236.264728-46.545454h189.719273V329.053091h-189.719273v598.272zM653.381818 973.870545H370.594909V31.488h282.810182v942.382545z m-236.241454-46.545454h189.719272V78.033455h-189.719272v849.291636z" p-id="6810" fill="#ffffff"></path><path d="M161.28 926.976h803.560727v47.243636H161.28z" p-id="6811" fill="#ffffff"></path></svg>
                        </button>
                        <p>排行榜</p>
                    </span>
                </div>
                <div class="recommend-list">
                    <div class="section-header">
                        <h1 class="title">推荐歌单</h1>
                        <svg t="1573096972838" class="arrow" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2043" width="200" height="200"><path d="M720.2816 490.752L347.1872 117.76a30.72 30.72 0 1 0-43.4688 43.4688l351.6416 351.232-351.6416 351.3856a30.72 30.72 0 1 0 43.4688 43.4176l373.0944-373.0944a30.72 30.72 0 0 0 0-43.4176z" fill="#2c2c2c" p-id="2044"></path></svg>
                    </div>
                    <ul>
                        <li class="item" v-for="item in playList" :key="item.id">
                            <div class="icon" @click="selectList(item)">
                                <div class="gradients"></div>
                                <img :src="item.picUrl">
                                 
                            </div>
                            <p class="play-count">
                                <i class="fa fa-headphones"></i>
                                {{ Math.floor(item.playCount / 10000) }}万
                            </p>
                            <div class="text">
                                <p class="name">{{ item.name }}</p>
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
                        <li class="item" v-for="item in latestSongs" :key="item.id">
                            <div class="icon" @click="selectLatestMusic(item)">
                                <div class="gradients"></div>
                                <img :src="item.picUrl" alt="">
                            </div>
                            <div class="text">
                                <p class="name">{{ item.name }}</p>
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
                        <li class="item" v-for="item in hostRadio" :key="item.id">
                            <div class="icon" @click="selectRadio(item)">
                                <div class="gradients"></div>
                                <img :src="item.picUrl" alt="">
                            </div>
                            <p class="play-count">
                                <i class="fa fa-headphones"></i>
                                {{ Math.floor(item.subCount / 10000) }}万
                            </p>
                            <div class="text">
                                <p class="name">{{ item.name }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Scroll>
        <router-view></router-view>
    </div>
</template>

<script>
import Scroll from '../scroll/scroll';
import {getBanner, getRecommendLists, getLatestMusic, getHostRadio} from '../../api/recommend.js'
import {ERR_OK} from '../../utils/config.js'
import { mapMutations, mapActions } from 'vuex';

  export default {
    data () {
        return {
            banner: [],
            playList: [],
            latestSongs: [],
            hostRadio: []
        }
    },
    created () {
        this.getScrollBanner()
        this.getRecommendList()
        this.getLatestSongs()
        this.getHostRadio()
    },
    methods: {
        onChange(index) {
            console.log('当前 Swipe 索引：' + index);
        },

        selectBanner (item) {
            console.log(item)
        },

        selectPrivateFM () {
            console.log("selectPrivateFM")
        },

        selectDailyRecommend () {
            console.log("selectDailyRecommend")
        },

        selectMusicList () {
            console.log("selectMusicList")
        },
        
        selectRankingList () {
            console.log("selectRankingList")
        },

        selectList (item) {
            console.log(item)
            this.$router.push({
                path: `/discovery/${item.id}`
            })
            this.setMusicList(item)
        },

        // 获取轮播图
        getScrollBanner () {
            getBanner().then((res) => {
                if (res.status === ERR_OK) {
                    let list = res.data.banners
                    this.banner = list.splice(4)
                } else {
                    console.error('Banner 获取失败') 
                }
            })
        },

        // 获取每日推荐列表
        getRecommendList () {
            getRecommendLists().then((res) => {
                if (res.status === ERR_OK) {
                    this.playList = res.data.result
                } else {
                    console.error('getRecommendList 获取失败')
                }
            })
        },

        getLatestSongs () {
            getLatestMusic().then((res) => {
                if(res.status === ERR_OK) {
                    this.latestSongs = res.data.albums
                } else {
                    console.error('getLatestMusic 获取失败')
                }
            })
        },

        getHostRadio () {
            getHostRadio().then((res) => {
                if(res.status === ERR_OK) {
                    this.hostRadio =  res.data.djRadios
                } else {
                    console.error('getHostRadio 获取失败')
                }
            })
        },
        ...mapMutations({
            setMusicList: 'SET_MUSIC_LIST',
            setFullScreen: 'SET_FULL_SCREEN'
        }),
        ...mapActions([
            'insertSong'
        ])

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
    bottom: 3rem;
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
            display: flex;
            width: 100%;
            height: 6rem;
            background-color: white;

            span {
                width: 25%;
                height: 100%;
                .quickButton {
                    margin: 10px 0%;
                    height: 50px;
                    width: 50px;
                    background-color: #F6584A;
                    border: #F6584A 1px solid;
                    border-radius: 25px;
                }
                p {
                    font-size: 12px;
                    color: #504F53;
                }
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
