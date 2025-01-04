<script setup>
import { ref } from 'vue';
import { computed } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cart';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();

// Stan nawigacji
const isMenuOpen = ref(false);

// Funkcja obsługująca kliknięcie burgera
const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;

	// Dodaj lub usuń klasę blokującą przewijanie
	if (isMenuOpen.value) {
		document.body.classList.add('no-scroll');
	} else {
		document.body.classList.remove('no-scroll');
	}
};

// Usuń klasę no-scroll przy każdej zmianie widoku
router.afterEach(() => {
	document.body.classList.remove('no-scroll');
	isMenuOpen.value = false; // Zamknij menu burgera
});

const cartStore = useCartStore();
const totalItems = computed(() => cartStore.totalItems);
const authStore = useAuthStore();
const isLoggedIn = computed(() => !!authStore.user);
</script>

<template>
	<header class="header">
		<nav class="nav">
			<RouterLink to="/" class="nav__logo"
				><i class="fa-solid fa-guitar"></i>GuitarShop</RouterLink
			>

			<!-- Przycisk burgera -->
			<button
				class="nav__burger"
				aria-label="Toggle navigation"
				@click="toggleMenu">
				<i class="fa-solid" :class="isMenuOpen ? 'fa-xmark' : 'fa-bars'"></i>
			</button>

			<!-- Menu -->
			<ul
				class="nav__list nav__list--main"
				:class="{ 'nav__list--open': isMenuOpen }">
				<li class="nav__item">
					<RouterLink to="/" class="nav__link">Home</RouterLink>
				</li>
				<li class="nav__item">
					<RouterLink to="/products" class="nav__link">Produkty</RouterLink>
				</li>

				<li class="nav__item">
					<RouterLink v-if="isLoggedIn" to="/account" class="nav__link">
						Twoje Konto
					</RouterLink>
					<RouterLink v-else to="/auth" class="nav__link"> Zaloguj </RouterLink>
				</li>

				<li class="nav__item">
					<RouterLink to="/about-company" class="nav__link"
						>O Firmie</RouterLink
					>
				</li>
				<li class="nav__item">
					<RouterLink to="/contact" class="nav__link">Kontakt</RouterLink>
				</li>

				<!-- Koszyk w menu wysuwanym -->
				<li class="nav__item nav__item--cart-mobile">
					<RouterLink to="/cart" class="nav__link nav__link--cart">
						<i class="fa-solid fa-cart-shopping"></i>
						<span v-if="totalItems > 0" class="cart-badge">{{
							totalItems
						}}</span>
					</RouterLink>
				</li>
			</ul>
		</nav>
	</header>
</template>
