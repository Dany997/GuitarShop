<script setup>
import { useAuthStore } from '@/stores/auth';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase';
import Navigation from '@/components/Navigation.vue';
import { useRouter } from 'vue-router';
import Footer from '@/components/Footer.vue';

const router = useRouter(); // Umożliwia nawigację
const authStore = useAuthStore();
const user = authStore.user;

const logout = async () => {
	try {
		await signOut(auth); // Wylogowanie z Firebase
		authStore.user = null; // Reset użytkownika w stanie
		router.push('/'); // Przekierowanie na stronę główną
		alert('Zostałeś wylogowany!');
	} catch (error) {
		console.error('Błąd podczas wylogowania:', error);
	}
};
</script>

<template>
	<Navigation />
	<section class="accountView">
		<div class="account">
			<div class="account__header">
				<h1 class="account__title">Witaj, {{ user.email }}</h1>
			</div>
			<div class="account__details">
				<p class="account__info">
					<strong>Imię:</strong> {{ user.firstName || 'Nie podano' }}
				</p>
				<p class="account__info">
					<strong>Data utworzenia konta:</strong>
					{{ user.creationDate || 'Nieznana' }}
				</p>
			</div>
			<div class="account__actions">
				<button class="account__button">Edytuj Profil</button>
				<button class="account__button" @click="logout">Wyloguj się</button>
			</div>
		</div>
	</section>
	<Footer />
</template>
