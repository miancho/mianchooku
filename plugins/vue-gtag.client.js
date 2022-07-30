import { createApp } from "vue";
import App from "./App.vue";
import VueGtag from "vue-gtag-next";

const app = createApp(App);

app.use(VueGtag, {
  property: {
    id: "GA_MEASUREMENT_ID"
  }
});

app.mount("#app");