import { defineStore } from 'pinia';
import { useProductStore } from './product'; // Import product store

export const useCartStore = defineStore('cart', {
	state: () => ({
		items: [], // Lista produktów w koszyku
	}),
	getters: {
		totalItems: (state) =>
			state.items.reduce((total, item) => total + item.quantity, 0),
		totalPrice: (state) =>
			state.items.reduce(
				(total, item) => total + item.price * item.quantity,
				0
			),
	},
	actions: {
		addToCart(product) {
			const productStore = useProductStore(); // Odwołanie do productStore

			if (product.stock > 0) {
				const existingItem = this.items.find((item) => item.id === product.id);

				if (existingItem) {
					existingItem.quantity += 1;
				} else {
					this.items.push({ ...product, quantity: 1 });
				}

				productStore.decrementStock(product.id); // Zmniejsz stan magazynowy
			} else {
				alert('Brak produktu na stanie!');
			}
		},
		removeFromCart(productId) {
			const productStore = useProductStore();
			const item = this.items.find((item) => item.id === productId);

			if (item) {
				productStore.incrementStock(productId); // Przywróć produkt do magazynu
				this.items = this.items.filter((item) => item.id !== productId);
			}
		},
		clearCart() {
			const productStore = useProductStore();

			this.items.forEach((item) => {
				productStore.incrementStock(item.id); // Przywróć wszystkie produkty
			});

			this.items = [];
		},
	},
});
