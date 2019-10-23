import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/recommend"
  },
  {
    path: "/recommend",
    name: "recommend",
    component: () =>
      import(
        /* webpackChunkName: "recommend" */ "../views/Recommend/Recommend.vue"
      )
  },
  {
    path: "/singer",
    name: "singer",
    component: () =>
      import(/* webpackChunkName: "singer" */ "../views/Singer/Singer.vue")
  },
  {
    path: "/rank",
    name: "rank",
    component: () =>
      import(/* webpackChunkName: "rank" */ "../views/Rank/Rank.vue")
  },
  {
    path: "/search",
    name: "search",
    component: () =>
      import(/* webpackChunkName: "search" */ "../views/Search/Search.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
