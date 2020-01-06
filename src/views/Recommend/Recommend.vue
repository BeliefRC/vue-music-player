<template>
  <div class="recommend" ref="recommend">
    <Scroll class="recommend-content" :data="discList">
      <div>
        <div
          v-if="recommends.length"
          class="slider-wrapper"
          ref="sliderWrapper"
        >
          <Slider>
            <div v-for="item in recommends" :key="item.id">
              <a :href="item.linkUrl">
                <img class="needsclick" @load="loadImage" :src="item.picUrl" />
              </a>
            </div>
          </Slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="item in discList" :key="item.dissid" class="item">
              <div class="icon">
                <!--eslint-disable-next-line-->
              <img width="60" height="60" v-lazy="item.imgurl" :key="item.imgurl" />
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name" />
                <p class="desc" v-html="item.dissname" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!discList.length">
        <loading></loading>
      </div>
    </Scroll>
  </div>
</template>

<script>
import { getRecommend, getDiscList } from "api/recommend";
import Slider from "components/Slider/Slider.vue";
import Scroll from "components/Scroll/Scroll.vue";
import Loading from "components/Loading/Loading.vue";
import { ERR_OK } from "api/config";
export default {
  name: "Recommend",
  components: {
    Slider,
    Scroll,
    Loading
  },
  data() {
    return {
      recommends: [],
      discList: []
    };
  },
  created() {
    this._getRecommend();
    this._getDiscList();
  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider;
        }
      });
    },
    _getDiscList() {
      getDiscList().then(res => {
        if (res.code === ERR_OK) {
          this.discList = res.data.list;
        }
      });
    },
    loadImage() {
      if (!this.checkloaded) {
        this.checkloaded = true;
        this.$refs.scroll.refresh();
      }
    }
  }
};
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable"

.recommend
  position: fixed
  width: 100%
  top: 88px
  bottom: 0
  .recommend-content
    height: 100%
    overflow: hidden
    .slider-wrapper
      position: relative
      width: 100%
      overflow: hidden
    .recommend-list
      .list-title
        height: 65px
        line-height: 65px
        text-align: center
        font-size: $font-size-medium
        color: $color-theme
      .item
        display: flex
        box-sizing: border-box
        align-items: center
        padding: 0 20px 20px 20px
        .icon
          flex: 0 0 60px
          width: 60px
          padding-right: 20px
        .text
          display: flex
          flex-direction: column
          justify-content: center
          flex: 1
          line-height: 20px
          overflow: hidden
          font-size: $font-size-medium
          .name
            margin-bottom: 10px
            color: $color-text
          .desc
            color: $color-text-d
    .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
