import './assets/main.css'
import {CUSTOM_ELEMENTS} from '../../jrg-ui/target/jrg-ui.esm.mjs';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App, {
    compilerOptions: {
        isCustomElement: tag => CUSTOM_ELEMENTS.includes(tag)
    }
})

app.use(createPinia())
app.use(router)

app.mount('#app')
