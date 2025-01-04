import { defineStore } from 'pinia';
import { monitorAuthState } from '@/firebase';

export const useAuthStore = defineStore('auth', {
	state: () => ({
		user: null, // Przechowywanie zalogowanego użytkownika
	}),
	actions: {
		initializeAuthListener() {
			monitorAuthState((user) => {
				this.user = user; // Aktualizacja użytkownika w store
			});
		},
	},
});
