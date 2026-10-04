import { createMemoryHistory, createRouter } from "vue-router";

import Home from "@/views/home.vue";
import Options from "@/views/options.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/options", component: Options },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
