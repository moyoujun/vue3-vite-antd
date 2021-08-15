import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import("/@/components/Login.vue"),
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import("/@/components/Home.vue"),
        children: [

        ]
    },
    {
        path: '/setting',
        name: 'Setting',
        component: () => import("/@/components/Setting.vue"),
    },
]

export default createRouter({
    history: createWebHistory(),
    routes,
});