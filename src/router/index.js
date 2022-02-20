import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
store.commit('onStart');
import Home from '../views/Home.vue';
import DiscountCode from '../views/DiscountCode.vue';
import Products from '../views/Products.vue';
import Users from '../views/Users.vue';
import Orders from '../views/Orders.vue';
import Amarha from '../views/Amarha.vue';
import login from '../views/login.vue';
import onProcess from '../views/Orders/onProcess.vue';
import sended from '../views/Orders/sended.vue';
import delivered from '../views/Orders/delivered.vue';
import canceled from '../views/Orders/canceled.vue';
import returned from '../views/Orders/returned.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: { logInRequired: true },
	},
	{
		path: '/amarha',
		name: 'Amarha',
		component: Amarha,
		meta: { logInRequired: true },
	},
	{
		path: '/orders',
		name: 'Orders',
		component: Orders,
		meta: { logInRequired: true },
		children: [
			{
				path: '',
				name: 'onProcess',
				component: onProcess,
				meta: { logInRequired: true },
			},
			{
				path: 'sended',
				name: 'sended',
				component: sended,
				meta: { logInRequired: true },
			},
			{
				path: 'delivered',
				name: 'delivered',
				component: delivered,
				meta: { logInRequired: true },
			},
			{
				path: 'canceled',
				name: 'canceled',
				component: canceled,
				meta: { logInRequired: true },
			},
			{
				path: 'returned',
				name: 'returned',
				component: returned,
				meta: { logInRequired: true },
			},
		],
	},
	{
		path: '/DiscountCode',
		name: 'DiscountCode',
		component: DiscountCode,
		meta: { logInRequired: true },
	},
	{
		path: '/products',
		name: 'Products',
		component: Products,
		meta: { logInRequired: true },
	},
	{
		path: '/users',
		name: 'Users',
		component: Users,
		meta: { logInRequired: true },
	},
	{
		path: '/login',
		name: 'login',
		component: login,
		meta: { logInRedirect: true },
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to, from) => {
	
	if (to.meta.logInRequired && !store.state.isAuthentic) {
		return {
			path: '/login',
			query: { redirect: to.fullPath },
		};
	}else if(to.meta.logInRedirect && store.state.isAuthentic){
		return {
			path: '/',
			query: { redirect: to.fullPath },
		};
	}
});

export default router;
