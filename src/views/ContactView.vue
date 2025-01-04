<script setup>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';
import Form from '@/components/Form.vue';
</script>

<template>
	<Navigation />

	<section class="contact">
		<div class="contact__container">
			<h1 class="contact__title">Skontaktuj się z nami</h1>
			<p class="contact__subtitle">Masz pytania? Chętnie pomożemy!</p>

			<div class="contact__content">
				<!-- Dane kontaktowe -->
				<div class="contact__info">
					<h2>Nasze dane</h2>
					<p>
						<i class="fa-solid fa-location-dot"></i> Adres: ul. Rockowa 123,
						00-001 Warszawa
					</p>
					<p>
						<i class="fa-solid fa-envelope"></i> E-mail: kontakt@guitarshop.pl
					</p>
					<p><i class="fa-solid fa-phone"></i> Telefon: +48 123 456 789</p>
				</div>
				<Form />
			</div>
		</div>
	</section>

	<Footer />
</template>
