<script setup>
import { ref } from 'vue';

// Funkcja `defineEmits` definiuje dostępne zdarzenia emitowane przez komponent
const emit = defineEmits(['update-search']);

// Reaktywna zmienna dla tekstu wyszukiwania
const searchQuery = ref('');

// Funkcja emitująca tekst wyszukiwania do komponentu nadrzędnego
const updateSearch = () => {
	emit('update-search', searchQuery.value);
};
</script>

<template>
	<div class="search-bar">
		<input
			type="text"
			v-model="searchQuery"
			@input="updateSearch"
			placeholder="Wyszukaj produkty..."
			class="search-bar__input" />
		<i class="fa-solid fa-magnifying-glass"></i>
	</div>
</template>
