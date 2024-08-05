import './assets/index.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n, useI18n } from 'vue-i18n';
import { languages, defaultLocale } from './i18n/i18n';
import App from './App.vue';
import router from './router';
const app = createApp(App, {
    setup() {
        const { t } = useI18n();
        return { t };
    }
});
const messages = Object.assign(languages);
const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: 'Ua',
    messages
});
app.use(createPinia());
app.use(router);
app.use(i18n);
app.mount('#app');
