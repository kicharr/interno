import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "@/pages/HomePage";
import AboutUs from "@/pages/AboutUs.vue";


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
];

// creating Vue-Router instance with normal history mode
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;