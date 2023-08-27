import {createRouter, createWebHistory} from 'vue-router';
import HomePage from "@/pages/HomePage";
import AboutUs from "@/pages/AboutUs.vue";
import Services from "@/pages/Services.vue";
import ProjectPlanePage from "@/pages/ProjectPlanePage.vue";
import ServicesWrapper from "@/pages/ServicesWrapper.vue";
import PricingPage from "@/pages/PricingPage.vue";
import ProjectPage from "@/pages/ProjectPage.vue";
import SeparateProjectPage from "@/pages/SeparateProjectPage.vue";
import NewsPage from "@/pages/NewsPage.vue";


// creating routes to all pages
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'about',
        component: AboutUs
    },
    {
        path: '/services',
        name: 'ServicesRouter',
        component: ServicesWrapper,
        children: [
            {
                path: 'services-page',
                name: 'ServicesPage',
                component: Services
            },
            {
                path: 'project-plan',
                name: 'ProjectPlanPage',
                component: ProjectPlanePage
            },
        ]
    },
    {
        path: '/pricing',
        name: 'pricing',
        component: PricingPage
    },
    {
        path: '/project',
        name: 'project',
        component: ProjectPage,
    },
    {
        path: '/separate-project-page',
        name: 'SeparateProjectPage',
        component: SeparateProjectPage
    },
    {
        path: '/news',
        name: 'news',
        component: NewsPage
    },

    // {
    // 	path: "/:pathMatch(.*)*",
    // 	name: '404',
    // 	beforeEnter: (to, from, next) => {
    // 		next({name: 'authorization'});
    // 	}
    // },
];

// creating Vue-Router instance with normal history mode
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;