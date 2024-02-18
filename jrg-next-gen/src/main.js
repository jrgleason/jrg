import './assets/main.css'
import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import "../../jrg-ui/target/jrg-ui.esm.mjs";

const bootstrap = async () => {
    const app = createApp(App)
    app.config.compilerOptions.isCustomElement = tag => tag.startsWith('jrg-')
    app.use(createPinia())
    app.use(router)
    app.mount('#app')
};
(() => {
    bootstrap().catch(console.error);
})();
