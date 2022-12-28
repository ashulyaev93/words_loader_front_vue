import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import App from '@/views/App.vue';
import Logout from '@/views/Logout.vue';

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/app', component: App},
    {path: '/logout', component: Logout},
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
