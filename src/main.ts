import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueGtag from 'vue-gtag-next';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).use(VueGtag, {property: {id: 'UA-177194469-2', router}}).mount("#app");
