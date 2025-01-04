import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

// Konfiguracja Firebase
const firebaseConfig = {
	apiKey: 'AIzaSyDgTb6I9vZZJjTmkAZa29qxSuskq0p9JtI',
	authDomain: 'guitarshop-4b641.firebaseapp.com',
	projectId: 'guitarshop-4b641',
	storageBucket: 'guitarshop-4b641.firebasestorage.app',
	messagingSenderId: '493744052921',
	appId: '1:493744052921:web:b77e3f2399d44d7b279968',
};

// Inicjalizacja Firebase
const app = initializeApp(firebaseConfig);

// Eksport Auth do logowania i rejestracji
const auth = getAuth(app);

// Inicjalizacja Firestore
const db = getFirestore(app); // Dodaj to

// Funkcja do śledzenia zmiany stanu logowania
export const monitorAuthState = (callback) => {
	onAuthStateChanged(auth, (user) => {
		callback(user);
	});
};

onAuthStateChanged(auth, (user) => {
	if (user) {
		console.log('Użytkownik zalogowany:', user.email);
	} else {
		console.log('Użytkownik wylogowany');
	}
});

export { auth }; // Eksportuj również db
