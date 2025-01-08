<script setup>
import { RouterLink } from 'vue-router';
import { useCartStore } from '@/stores/cart';
import { useProductStore } from '@/stores/product';

defineProps({
	guitar: {
		type: Object,
		required: true,
	},
});

const cartStore = useCartStore();
const productStore = useProductStore();

const addToCart = (product) => {
	cartStore.addToCart(product); // Dodaj do koszyka
};

// Zbuduj pełną ścieżkę do obrazka
const imageUrl = `https://guitarshop-production.up.railway.app/images/${guitar.image}`;
</script>

<template>
	<div class="product-card">
		<!-- Użyj pełnej ścieżki URL -->
		<img :src="imageUrl" :alt="guitar.name" class="product-card__image" />
		<div class="product-card__info">
			<h2 class="product-card__name">{{ guitar.name }}</h2>
			<h3 class="product-card__type">{{ guitar.type }}</h3>
			<p class="product-card__text">{{ guitar.description }}</p>
			<p class="product-card__price">{{ guitar.price }} PLN</p>

			<p class="product-card__stock">
				Dostępna ilość: <strong>{{ guitar.stock }}</strong>
			</p>

			<RouterLink
				:to="`/product-card/${guitar.id}`"
				class="product-card__button">
				Zobacz szczegóły
			</RouterLink>

			<button
				@click="addToCart(guitar)"
				class="product-card__button"
				:disabled="guitar.stock <= 0">
				{{ guitar.stock > 0 ? 'Dodaj do koszyka' : 'Brak na stanie' }}
			</button>
		</div>
	</div>
</template>
