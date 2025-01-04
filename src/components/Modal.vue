<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

// Lokalna zmienna widoczności modala
const isVisible = ref(false);

// Funkcje do zarządzania modalem
const showModal = () => {
	isVisible.value = true;
};

const closeModal = () => {
	isVisible.value = false;
};

// Eksportuj funkcję `showModal` jako zdarzenie
defineExpose({
	showModal,
});
</script>

<template>
	<div v-if="isVisible" class="modal">
		<div class="modal__content">
			<h2>Produkt został dodany do koszyka!</h2>
			<button class="modal__button" @click="closeModal">
				Kontynuuj zakupy
			</button>
			<RouterLink to="/cart" :click="closeModal"
				><button class="modal__button">Przejdź do koszyka</button></RouterLink
			>
		</div>
		<div class="modal__overlay" @click="closeModal"></div>
	</div>
</template>
