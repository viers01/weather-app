import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/components/Main.vue';
import CitiesList from '@/components/cities/CitiesList.vue';
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main,
        },
        {
            path: '/cities',
            name: 'CitiesList',
            component: CitiesList,
        },
    ],
});

export default router;
