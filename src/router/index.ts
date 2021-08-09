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
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
});