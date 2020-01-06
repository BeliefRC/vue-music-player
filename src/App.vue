<template>
  <div id="app">
    <PageHeader />
    <Tab />
    <keep-alive>
      <RouterView />
    </keep-alive>
    <Player />
  </div>
</template>
<script>
import PageHeader from "components/PageHeader/PageHeader";
import Tab from "components/Tab/Tab";
import Player from "components/Player/Player";
export default {
  components: {
    PageHeader,
    Tab,
    Player
  }
};
</script>
<style lang="stylus">
@import "common/stylus/variable.styl"
#app
    color $color-theme
</style>
