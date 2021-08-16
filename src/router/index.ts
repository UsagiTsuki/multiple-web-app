import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Index from "../pages/Index.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/count",
    name: "Count",
    component: () => import("../pages/Count.vue")
  },
  {
    path: "/input-boxes",
    name: "InputBoxes",
    component: () => import("../pages/InputBoxes.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
