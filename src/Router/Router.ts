import { createRouter, createWebHistory } from "vue-router";
import Home from "@/Views/Home.vue";
import About from "@/Views/About.vue";
import Jobs from "@/Views/Jobs/Jobs.vue";
import JobDetails from "@/Views/Jobs/JobDetails.vue";
import NotFound from "@/Views/Jobs/NotFound.vue";

type Route = {
  path: string;
  name: string;
  component: any;
};

const routes: Route[] = [
  {
    path: "/",
    name: 'Home',
    component: Home,
  },
  {
    path: "/about",
    name: 'About',
    component: About,
  },
  {
    path: "/jobs",
    name: 'Jobs',
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: 'JobDetails',
    component: JobDetails,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
];

export default createRouter({
  history: createWebHistory(),
  routes: routes,
});
