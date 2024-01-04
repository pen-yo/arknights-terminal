import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.+)",
      redirect: encodeURI("/首页"),
    },
    {
      path: "/",
      redirect: encodeURI("/首页"),
    },
    {
      path: encodeURI("/首页"),
      component: () => import("@/views/Welcome.vue"),
    },
    {
      path: encodeURI("/掉率参考"),
      component: () => import("@/views/DropRateRefe.vue"),
    },
    {
      path: encodeURI("/死线计算"),
      component: () => import("@/views/DeadlineCalc.vue"),
    },
    {
      path: encodeURI("/模拟罗德岛"),
      component: () => import("@/views/SimuRhodes.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${decodeURI(to.path).slice(
    1,
  )} | 明日方舟 :: 终端 - 博士的控制台`;
  next();
});

export default router;
