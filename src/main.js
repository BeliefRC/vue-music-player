import Vue from "vue";
import VueLazyload from "vue-lazyload";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import fastClick from "fastclick";
import "common/stylus/index.styl";

Vue.config.productionTip = false;

fastClick.attach(document.body);

Vue.use(VueLazyload, {
  loading: require("common/image/loading.png")
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
