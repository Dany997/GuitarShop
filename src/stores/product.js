import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore('product', {
	state: () => ({
		products: [], // Lista produktów
	}),
	actions: {
		async fetchProducts() {
			if (this.products.length === 0) {
				// Sprawdzamy, czy dane już są załadowane
				try {
					const response = await axios.get(
						'https://guitarshop-production.up.railway.app/api/guitars'
					);
					this.products = response.data;
				} catch (error) {
					console.error('Błąd podczas ładowania produktów:', error);
				}
			}
		},
		decrementStock(productId) {
			const product = this.products.find((p) => p.id === productId);
			if (product && product.stock > 0) {
				product.stock -= 1;
			}
		},
		incrementStock(productId) {
			const product = this.products.find((p) => p.id === productId);
			if (product) {
				product.stock += 1;
			}
		},
	},
});
