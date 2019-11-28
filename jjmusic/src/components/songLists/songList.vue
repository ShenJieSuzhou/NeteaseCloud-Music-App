<template>
  <div class="song-list">
   <ul>
     <li v-for="(song, index) in songs" :key="song.id" class="item" @click="selectItem(song, index)">
       <p class="count">{{ index + 1 }}</p>
       <div class="content">
         <h2 class="name">{{ song.name }}</h2>
         <p class="desc">{{ song.ar[0].name }} - {{ song.al[0].name }}</p>
       </div>
     </li>
   </ul>
  </div>
</template>

<script>
export default {
    props: {
    songs: Array,
  },
  computed: {
  },
  methods: {
    selectItem (item, index) {
      this.$emit('select', item, index)
    },
    getDesc (song) {
      if (song.al.name) {
          console.log('11111111')
        return `${song.ar.name} - ${song.al.name}`
      } else {
          console.log('222222222')
        return `${song.ar.name}`
      }
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../../style/scss/variable.scss";
@import "../../style/scss/mixin.scss";

.song-list {
  .item {
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 60px;
    border-bottom: 1px solid rgb(228, 228, 228);
    .count {
      flex: 0 0 50px;
      width: 50px;
      text-align: center;
      color: $color-text-g;
    }
    .content {
      flex: 1;
      line-height: 20px;
      overflow: hidden;
      .name {
        margin-top: 4px;
        width: 80%;
        @include no-wrap();
        color: $color-text;
      }
      .desc {
        @include no-wrap();
        // margin-top: 3px;
        width: 80%;
        font-size: 12px;
        color: $color-text-g;
      }
    }
  }
}
</style>
