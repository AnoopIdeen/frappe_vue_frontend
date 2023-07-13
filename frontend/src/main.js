import './index.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import store from "./store";
import { Button, setConfig, frappeRequest, resourcesPlugin } from 'frappe-ui'

let app = createApp(App)


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// import { resourcesPlugin } from 'frappe-ui'
const vuetify = createVuetify({
    components,
    directives,
})



setConfig('resourceFetcher', frappeRequest)
app.use(store);
app.use(router)
app.use(vuetify)
app.use(resourcesPlugin)

app.component('Button', Button)
app.mount('#app')
