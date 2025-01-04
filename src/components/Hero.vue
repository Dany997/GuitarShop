<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
	<section class="hero">
		<div class="hero__video-overlay">
			<video class="hero__video" autoplay muted loop playsinline>
				<source src="../assets/video/guitar-movie1.mp4" type="video/mp4" />
			</video>
			<div class="hero__gradient"></div>
		</div>
		<div class="hero__content">
			<h1 class="hero__title">GuitarShop</h1>
			<p class="hero__subtitle">Importujemy najlepsze gitary od 2019 roku!</p>
			<RouterLink to="/products" class="hero__cta">Zobacz ofertę</RouterLink>
		</div>
	</section>
</template>
