import { createMemoryHistory, createRouter } from "vue-router";

import Home from "@/views/home.vue";
import Options from "@/views/options.vue";
import Cards from "@/views/cards.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/options", component: Options },
  { path: "/cards", component: Cards },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
