import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AppLayout from "../layouts/AppLayout";
import DefaultLayout from "../layouts/DefaultLayout";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        layout: DefaultLayout,
      },
    },

    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About.vue"),
      meta: {
        layout: AppLayout,
      },
    },

    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
