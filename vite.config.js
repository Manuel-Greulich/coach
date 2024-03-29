import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
    plugins: [

        vue({
            template: {
                transformAssetUrls: { base: null, includeAbsolute: false },
                // compilerOptions: {
                //     isCustomElement: (tag) => tag.startsWith('v-'),
                // },
            },
        }),

        vuetify(),
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
    resolve: {

        alias: {

            vue: 'vue/dist/vue.esm-bundler.js',

        },

    },
});

