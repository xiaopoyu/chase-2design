import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ProjectsView from '@/views/ProjectsView.vue';
import ServiceView from '@/views/ServiceView.vue';
import ContactView from '@/views/ContactView.vue';
import AboutView from '@/views/AboutView.vue';


const routes = [
    {
        name: 'home', path: '/', component: HomeView
    },
    {
        name: 'projects', path: '/projects', component: ProjectsView
    },
    {
        name: 'service', path: '/service', component: ServiceView
    },
    {
        name: 'contact', path: '/contact', component: ContactView
    },
    {
        name: 'about', path: '/about', component: AboutView
    },
    // {
    //     path: '/:pathMatch(.*)*', // 使用通配符 * 匹配所有路径
    //     redirect: '/', // 重定向到首页
    // },
];

const router = createRouter({
    history: createWebHistory('/chase-2design/'),
    routes
});

export default router;
