import { createApp } from "vue";

import "./styles/index.css";
import App from "./app.vue";
import { router } from './router';

const app = createApp(App);

app.use(router);
app.mount("#app");
