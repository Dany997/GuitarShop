<script setup>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();

// Funkcja do usuwania produktu z koszyka
const removeProduct = (productId) => {
	cartStore.removeFromCart(productId);
};

// Funkcja do czyszczenia koszyka
const clearCart = () => {
	cartStore.clearCart();
};
</script>

<template>
	<Navigation />
	<section class="cart">
		<h1 class="cart__title">Twój koszyk</h1>

		<!-- Sprawdź, czy koszyk nie jest pusty -->
		<div v-if="cartStore.items.length > 0" class="cart__container">
			<!-- Lista produktów w formie kart -->
			<div class="cart__items">
				<div v-for="item in cartStore.items" :key="item.id" class="cart__item">
					<img :src="item.image" :alt="item.name" class="cart__item-image" />
					<div class="cart__item-details">
						<h2 class="cart__item-title">{{ item.name }}</h2>
						<p class="cart__item-price">
							Cena jednostkowa: {{ item.price }} zł
						</p>
						<p class="cart__item-quantity">Ilość: {{ item.quantity }}</p>
						<p class="cart__item-total">
							Łączna cena: {{ item.price * item.quantity }} zł
						</p>
					</div>
					<div class="cart__item-actions">
						<button @click="removeProduct(item.id)" class="cart__remove-button">
							Usuń
						</button>
					</div>
				</div>
			</div>

			<!-- Podsumowanie -->
			<div class="cart__summary">
				<p>Całkowita ilość produktów: {{ cartStore.totalItems }}</p>
				<p>Łączna kwota: {{ cartStore.totalPrice }} zł</p>
				<button @click="clearCart" class="cart__clear-button">
					Wyczyść koszyk
				</button>
			</div>
		</div>

		<!-- Jeśli koszyk jest pusty -->
		<p v-else class="cart__empty-message">Twój koszyk jest pusty.</p>
	</section>
	<Footer />
</template>
