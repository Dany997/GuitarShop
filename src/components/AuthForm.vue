<script setup>
import { ref } from 'vue';
import { auth } from '../firebase';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter(); // Umożliwia nawigację

// Dane użytkownika
const email = ref('');
const password = ref('');
const error = ref('');
const isLogin = ref(true); // Tryb logowania/rejestracji

// Przełączanie między logowaniem a rejestracją
const toggleAuthMode = () => {
	isLogin.value = !isLogin.value;
};

// Obsługa logowania/rejestracji
const handleAuth = async () => {
	try {
		if (isLogin.value) {
			// Logowanie
			await signInWithEmailAndPassword(auth, email.value, password.value);
			alert('Zalogowano pomyślnie!');
			router.push('/'); // Przekierowanie na stronę główną
		} else {
			// Rejestracja
			await createUserWithEmailAndPassword(auth, email.value, password.value);
			alert('Rejestracja zakończona sukcesem!');
		}
		error.value = '';
	} catch (err) {
		error.value = err.message;
	}
};
</script>

<template>
	<div class="auth-form">
		<h2>{{ isLogin ? 'Zaloguj się' : 'Zarejestruj się' }}</h2>
		<form @submit.prevent="handleAuth">
			<input v-model="email" type="email" placeholder="Email" required />
			<input v-model="password" type="password" placeholder="Hasło" required />
			<button type="submit">
				{{ isLogin ? 'Zaloguj się' : 'Zarejestruj się' }}
			</button>
		</form>
		<p v-if="error" class="error">{{ error }}</p>
		<button @click="toggleAuthMode">
			{{
				isLogin ? 'Nie masz konta? Zarejestruj się' : 'Masz konto? Zaloguj się'
			}}
		</button>
	</div>
</template>
