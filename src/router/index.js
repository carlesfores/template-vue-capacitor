import { createMemoryHistory, createRouter } from "vue-router";

import MenuHome from "@/views/menu/home.vue";
import MenuOptions from "@/views/menu/options.vue";
import MenuCards from "@/views/menu/cards.vue";

const routes = [
  { path: "/", component: MenuHome },
  { path: "/options", component: MenuOptions },
  { path: "/cards", component: MenuCards },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
