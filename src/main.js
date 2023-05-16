import 'reset-css';
import '@/styles/main.scss';

import Vue from 'vue';
import App from './App.vue';

import '@/plugins/api';
import '@/plugins/cookie';

import store from './store';
import router from './router';
// Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount('#app');
