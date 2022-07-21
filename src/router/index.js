import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import index from "../views/index.vue";
import store from "@/store/index";
const routes = [
  {
    path: "/",
    name: "主页",
    component: index,
  },
  {
    path: "/login",
    name: "登录页",
    component: () => import("@/views/logIn.vue"),
  },
];

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.path === "/login") return next();
  if (store.state.info) {
    next();
  } else {
    next({ path: '/login' })
  }
});
export default router;
