<template>
  <div id="app">
    <PageHeader />
    <Tab />
    <keep-alive>
      <RouterView />
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
