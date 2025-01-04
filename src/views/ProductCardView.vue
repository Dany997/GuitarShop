<script setup>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';
import Modal from '@/components/Modal.vue'; // Modal z potwierdzeniem
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router'; // Pobieranie ID produktu z URL
import { useCartStore } from '@/stores/cart';
import { useProductStore } from '@/stores/product'; // Store z danymi produktów

// Store i inne dane
const route = useRoute(); // Parametry URL
const cartStore = useCartStore();
const productStore = useProductStore(); // Store produktów
const modalRef = ref(null); // Referencja do modala

// Obliczany produkt na podstawie ID z URL
const product = computed(() =>
	productStore.products.find(
		(guitar) => guitar.id === parseInt(route.params.id)
	)
);

// Pobieranie danych o produktach (jeśli jeszcze nie załadowane)
onMounted(() => {
	productStore.fetchProducts();
});

// Funkcja dodawania do koszyka
const addProductToCart = (product) => {
	if (product && product.stock > 0) {
		cartStore.addToCart(product); // Dodanie do koszyka
		modalRef.value.showModal(); // Wywołanie modala z potwierdzeniem
	} else {
		alert('Produkt jest niedostępny!');
	}
};
</script>

<template>
	<Navigation />

	<!-- Szczegóły produktu -->
	<section v-if="product" class="cardView">
		<div class="cardView__container">
			<div class="cardView__image-wrapper">
				<img :src="product.image" :alt="product.name" class="cardView__image" />
			</div>

			<div class="cardView__details">
				<h1 class="cardView__title">{{ product.name }}</h1>
				<p class="cardView__description">{{ product.description }}</p>
				<p class="cardView__price">
					Cena: <span>{{ product.price }} zł</span>
				</p>

				<!-- Wyświetlanie stanu magazynowego -->
				<p class="cardView__stock">
					Dostępna ilość: <strong>{{ product.stock }}</strong>
				</p>

				<!-- Przycisk dodawania do koszyka -->
				<button
					@click="addProductToCart(product)"
					class="cardView__button"
					:disabled="product.stock <= 0">
					{{ product.stock > 0 ? 'Dodaj do koszyka' : 'Brak na stanie' }}
				</button>
			</div>
		</div>
	</section>

	<!-- Informacja o ładowaniu -->
	<p v-else>Ładowanie danych produktu...</p>

	<!-- Modal z potwierdzeniem -->
	<Modal ref="modalRef" />

	<Footer />
</template>
