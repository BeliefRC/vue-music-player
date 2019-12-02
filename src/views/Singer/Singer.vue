<template>
  <div class="singer">
    <ListView :data="singers" />
  </div>
</template>

<script>
import ListView from "components/Listview/Listview";
import { getSingerList } from "api/singer";
import { ERR_OK } from "api/config";
import Singer from "common/js/Singer";

const HOT_SINGER_LEN = 10;
const HOT_NAME = "热门";
export default {
  name: "Singer",
  components: {
    ListView
  },
  data() {
    return {
      singers: []
    };
  },
  created() {
    this._getSingerList();
  },
  methods: {
    _getSingerList() {
      getSingerList().then(res => {
        if (res.code === ERR_OK) {
          this.singers = this._normalizeSinger(res.data.list);
          console.log(this.singers);
        }
      });
    },
    _normalizeSinger(list) {
      const map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      };
      list.forEach((item, index) => {
        const singer = new Singer({
          name: item.Fsinger_name,
          id: item.Fsinger_mid
        });
        if (index < HOT_SINGER_LEN) {
          map.hot.items.push(singer);
        }
        const key = item.Findex;
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          };
        }
        map[key].items.push(singer);
      });
      let ret = [];
      let hot = [];
      for (let key in map) {
        if (map.hasOwnProperty(key)) {
          let val = map[key];
          if (val.title.match(/[a-zA-Z]/)) {
            ret.push(val);
          } else if (val.title === HOT_NAME) {
            hot.push(val);
          }
        }
      }
      // A-Z排序
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0);
      });
      return hot.concat(ret);
    }
  }
};
</script>

<style scoped lang="stylus">
.singer
  position: fixed
  top: 88px
  bottom: 0
  width: 100%
</style>
