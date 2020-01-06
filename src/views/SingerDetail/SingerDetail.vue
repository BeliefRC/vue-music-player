<template>
  <transition name="slide">
    <MusicList :songs="songs" :title="title" :bg-image="bgImage" />
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import MusicList from "components/MusicList/MusicList";
import { createSong } from "common/js/Song";
import { getSingerDetail } from "api/singer";
import { ERR_OK } from "api/config";

export default {
  components: {
    MusicList
  },
  data() {
    return {
      songs: []
    };
  },
  created() {
    this._getDetail();
  },
  methods: {
    _getDetail() {
      if (this.singer.id) {
        getSingerDetail(this.singer.id).then(res => {
          if (res.code === ERR_OK) {
            this.songs = this._normalizeSongs(res.data.list);
          }
        });
      } else {
        this.$router.push("/singer");
      }
    },
    _normalizeSongs(list) {
      let ret = [];
      list.forEach(item => {
        let { musicData } = item;
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData));
        }
      });
      return ret;
    }
  },
  computed: {
    title() {
      return this.singer.name;
    },
    bgImage() {
      return this.singer.avatar;
    },
    ...mapGetters(["singer"])
  }
};
</script>

<style scoped lang="stylus">
.slide-enter-active, .slide-leave-active
    transition: all 0.3s

.slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
