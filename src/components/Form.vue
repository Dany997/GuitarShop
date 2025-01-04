<script setup></script>

<template>
	<form class="contact__form" action="#" method="post">
		<div class="contact__form-group">
			<label for="name">Imię i nazwisko</label>
			<input
				type="text"
				id="name"
				name="name"
				placeholder="Twoje imię i nazwisko"
				required />
		</div>
		<div class="contact__form-group">
			<label for="email">Adres e-mail</label>
			<input
				type="email"
				id="email"
				name="email"
				placeholder="Twój e-mail"
				required />
		</div>
		<div class="contact__form-group">
			<label for="message">Wiadomość</label>
			<textarea
				id="message"
				name="message"
				placeholder="Twoja wiadomość..."
				rows="5"
				required></textarea>
		</div>
		<button type="submit" class="contact__button">Wyślij</button>
	</form>
</template>
