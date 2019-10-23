<template>
  <div id="app">
    <PageHeader></PageHeader>
    <Tab></Tab>
    <router-view></router-view>
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
