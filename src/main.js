import { createApp } from 'vue';
import App from './App.vue';
import './styles/main.scss';
import router from './router';
import { createPinia } from 'pinia';
import { auth } from './firebase'; // Import konfiguracji Firebase (autoryzacja)
import { useAuthStore } from '@/stores/auth';

const app = createApp(App);

app.use(createPinia());

app.use(router);

const authStore = useAuthStore();
authStore.initializeAuthListener(); // Inicjalizujemy listener autoryzacji
app.mount('#app');

console.log('Firebase Auth:', auth);
