import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: tag => tag.startsWith('jrg-')
                }
            }
        }),
        vueJsx(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            'vue': 'vue/dist/vue.esm-bundler.js' // Add this line
        }
    },
    build: {
        rollupOptions: {
            external: ['/js/jrg-ui.min.esm.mjs'],
            output: {
                manualChunks: undefined,
            },
        },
    }
})
