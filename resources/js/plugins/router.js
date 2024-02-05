import { createRouter, createWebHashHistory } from "vue-router";

import Dashboard from "../pages/Dashboard.vue";
import Calendar from "../components/Calendar.vue";
import Tools from "../components/Tools.vue";
import Klienten from "../components/Klienten.vue";
import Firmen from "../components/Company/Company.vue";


const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
    },

    {
        path: '/calendar',
        name: 'Calendar',
        component: Calendar,
    },

    {
        path: '/firmen',
        name: 'Firmen',
        component: Firmen,
    },

    {
        path: '/tools',
        name: 'Tools',
        component: Tools,
    },

    {
        path: '/user',
        name: 'Klienten',
        component: Klienten,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;