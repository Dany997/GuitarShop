import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ProductsView from '@/views/ProductsView.vue';
import AboutCompanyView from '@/views/aboutCompanyView.vue';
import ContactView from '../views/ContactView.vue';
import ProductCardView from '@/views/ProductCardView.vue';
import CartView from '@/views/CartView.vue';
import AuthView from '@/views/AuthView.vue';
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/products',
			name: 'products',
			component: ProductsView,
		},
		{
			path: '/about-company',
			name: 'about-company',
			component: AboutCompanyView,
		},
		{
			path: '/contact',
			name: 'contact',
			component: ContactView,
		},

		{
			path: '/product-card/:id',
			name: 'product-card',
			component: ProductCardView,
		},
		{
			path: '/cart',
			name: 'Cart',
			component: CartView,
		},
		{
			path: '/auth',
			name: 'Auth',
			component: AuthView,
		},
		{
			path: '/account',
			name: 'account',
			component: () => import('@/views/AccountView.vue'),
			beforeEnter: (to, from, next) => {
				const authStore = useAuthStore();
				if (!authStore.user) {
					next('/auth'); // Przekierowanie na stronę logowania, jeśli nie jesteś zalogowany
				} else {
					next(); // Kontynuuj trasę
				}
			},
		},
	],
});

export default router;
