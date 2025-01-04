<script setup>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
	<Navigation />
	<section class="about">
		<div class="about__container">
			<h1 class="about__title">O GuitarShop</h1>
			<p class="about__tagline">Twój rockowy świat w jednym miejscu.</p>

			<div class="about__content">
				<div class="about__text">
					<h2>Kim jesteśmy?</h2>
					<p>
						GuitarShop to pasjonaci muzyki i instrumentów. Zajmujemy się
						dostarczaniem najwyższej jakości gitar i akcesoriów dla muzyków na
						każdym poziomie zaawansowania. Niezależnie od tego, czy dopiero
						zaczynasz swoją przygodę z muzyką, czy jesteś profesjonalnym
						artystą, u nas znajdziesz coś dla siebie.
					</p>

					<h2>Nasza historia</h2>
					<p>
						Rozpoczęliśmy działalność w 2020 roku jako mały sklep muzyczny. Z
						czasem rozwijaliśmy naszą ofertę, by stać się jednym z najbardziej
						zaufanych dostawców gitar w Polsce. Inspirujemy się potrzebami
						naszych klientów, dostarczając produkty, które łączą jakość z pasją
						do muzyki.
					</p>

					<h2>Dlaczego my?</h2>
					<p>
						Dbamy o każdy szczegół, oferujemy szeroki wybór instrumentów i
						profesjonalne doradztwo. Naszym celem jest, by każdy klient czuł się
						wyjątkowo, odkrywając swoją muzyczną pasję.
					</p>
				</div>
				<div class="about__image-wrapper">
					<img
						src="../assets/img/GuitarShopStaff.jpg"
						alt="Zespół GuitarShop"
						class="about__image" />
				</div>
			</div>
		</div>
	</section>

	<Footer />
</template>
