<script setup>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';
import Card from '@/components/Card.vue';
import SearchBar from '@/components/SearchBar.vue'; // Import wyszukiwarki
import { useProductStore } from '@/stores/product';
import { ref, computed, onMounted } from 'vue';

// Produkt Store
const productStore = useProductStore();

// Filtrowanie wg wyszukiwania i typów gitar
const searchQuery = ref('');
const selectedTypes = ref([]); // Typy gitar wybrane przez użytkownika

// Pobieranie listy produktów
onMounted(() => {
	productStore.fetchProducts(); // Pobierz produkty z JSON
});

const filteredGuitars = computed(() => {
	return productStore.products.filter((guitar) => {
		// Filtrowanie wg wyszukiwania
		const matchesSearch = guitar.name
			.toLowerCase()
			.includes(searchQuery.value.toLowerCase());

		// Filtrowanie wg typów (jeśli coś zaznaczono)
		const matchesType =
			selectedTypes.value.length === 0 ||
			selectedTypes.value.includes(guitar.type);

		return matchesSearch && matchesType;
	});
});

// Aktualizacja frazy wyszukiwania
const updateSearchQuery = (query) => {
	searchQuery.value = query;
};

// Obsługa checkboxów
const toggleType = (type) => {
	if (selectedTypes.value.includes(type)) {
		selectedTypes.value = selectedTypes.value.filter((t) => t !== type); // Usuń, jeśli już zaznaczone
	} else {
		selectedTypes.value.push(type); // Dodaj, jeśli niezaznaczone
	}
};
</script>

<template>
	<Navigation />

	<section class="products">
		<h1 class="products__title">Nasze Produkty</h1>

		<!-- Komponent wyszukiwarki -->
		<SearchBar @update-search="updateSearchQuery" />

		<!-- Checkboxy typów gitar -->
		<div class="filters">
			<label>
				<input
					type="checkbox"
					value="Electric"
					@change="toggleType('Elektryczna')" />
				Elektryczna
			</label>
			<label>
				<input type="checkbox" value="Bass" @change="toggleType('Bas')" />
				Bas
			</label>
			<label>
				<input
					type="checkbox"
					value="Acoustic"
					@change="toggleType('Akustyczna')" />
				Akustyczna
			</label>
		</div>

		<!-- Lista przefiltrowanych produktów -->
		<div class="products__container">
			<Card
				v-for="guitar in filteredGuitars"
				:key="guitar.id"
				:guitar="guitar" />
		</div>
	</section>

	<Footer />
</template>
