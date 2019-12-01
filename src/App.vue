<template>
  <div id="app">
    <PageHeader></PageHeader>
    <Tab></Tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import PageHeader from "components/PageHeader/PageHeader";
import Tab from "components/Tab/Tab";
export default {
  components: {
    PageHeader,
    Tab
  }
};
</script>
<style lang="stylus">
@import "common/stylus/variable.styl"
#app
    color $color-theme
</style>
