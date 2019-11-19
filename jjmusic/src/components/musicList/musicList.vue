<template>
    <transition name="slide" mode="out-in">
        <div class="music-list">
            <div class="header" ref="header">
                <div class="back" @click="back">
                    <i class="fa fa-angle-left"></i>
                </div>
                <div class="text">
                    <h1 class="title">{{headerTitle}}</h1>
                </div>
            </div>
            <scroll class="list" @scroll="scroll" :probe-type="probeType" :listen-scroll="listenScroll" :data="listDetail" ref="list">
                <div class="music-list-wrapper">
                    <div class="bg-image" :style="bgStyle" ref="bgImage">
                        <div class="filter"></div>
                        <div class="text">
                            <h2 class="list-title">{{title}}</h2>
                            <p class="play-count" v-if="playCount">
                                <i class="fa fa-headphones"></i>
                                {{playCount}}
                            </p>
                        </div>
                    </div>
                    <div class="song-list-wrapper">
                        <div class="sequence-play" v-show="listDetail.length" @click="sequence">
                            <i class="iconfont icon-bofangicon"></i>
                            <span class="text">播放全部</span>
                            <span class="count">(共{{listDetail.length}}首)</span>
                        </div>
                        <song-list @select="selectItem" :songs="listDetail"></song-list>
                    </div>
                </div>
            </scroll>
            <div v-show="!listDetail.length" class="loading-content">
                <loading></loading>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    
}
</script>


<style lang="scss">


</style>
