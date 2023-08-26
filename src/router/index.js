import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "@/pages/HomePage";
import AboutUs from "@/pages/AboutUs.vue";
import Services from "@/pages/Services.vue";
import ProjectPlanePage from "@/pages/ProjectPlanePage.vue";
import ServicesWrapper from "@/pages/ServicesWrapper.vue";




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
		path: "/:pathMatch(.*)*",
		name: '404',
		beforeEnter: (to, from, next) => {
			next({name: 'authorization'});
		}
	},
];

// creating Vue-Router instance with normal history mode
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;