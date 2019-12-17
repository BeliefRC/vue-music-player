<template>
  <transition name="slide">
    <MusicList />
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import MusicList from "components/MusicList/MusicList";
export default {
  components: {
    MusicList
  },
  data() {
    return {};
  },
  created() {
    console.log(this.singer);
  },
  computed: {
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
