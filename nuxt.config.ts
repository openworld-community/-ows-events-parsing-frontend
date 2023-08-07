// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/eslint-module', 'nuxt-quasar-ui'],
    css: ['~/assets/base.pcss'],
    postcss: {
        plugins: {
            'tailwindcss/nesting': {},
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    devtools: { enabled: false }
});
