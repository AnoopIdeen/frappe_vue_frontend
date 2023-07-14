// import './index.css'

// import { createApp } from 'vue'
// import router from './router'
// import App from './App.vue'
// import store from "./store";
// import { Button, setConfig, frappeRequest, resourcesPlugin, onOutsideClickDirective } from 'frappe-ui'

// let app = createApp(App)


// // Vuetify
// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'
// // import { resourcesPlugin } from 'frappe-ui'
// const vuetify = createVuetify({
//     components,
//     directives,
// })



// setConfig('resourceFetcher', frappeRequest)
// app.use(store);
// app.use(router)
// app.use(vuetify)
// app.use(resourcesPlugin)
// app.directive("on-outside-click", onOutsideClickDirective);
// app.directive("focus", {
//     mounted: (el) => el.focus(),
// });
// app.component('Button', Button)
// app.mount('#app')


import { createApp } from "vue";
import {
    FrappeUI,
    Button,
    onOutsideClickDirective,
    setConfig,
    frappeRequest,
} from "frappe-ui";
import store from "./store";
import router from "./router";
import App from "./App.vue";
import mitt from "mitt";
import "./index.css";

setConfig("resourceFetcher", frappeRequest);
const emitter = mitt();
const app = createApp(App);
app.config.unwrapInjectedRef = true;
app.config.globalProperties.emitter = emitter;
app.use(router);
app.use(store);
app.use(FrappeUI);
app.directive("on-outside-click", onOutsideClickDirective);
app.directive("focus", {
    mounted: (el) => el.focus(),
});
app.component("Button", Button);
app.mount("#app");
