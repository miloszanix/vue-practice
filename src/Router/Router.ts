import { createRouter, createWebHistory } from "vue-router";
import Home from "@/Views/Home.vue";
import About from "@/Views/About.vue";

type Route = {
  path: string;
  component: any;
};

const routes: Route[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes: routes,
});
