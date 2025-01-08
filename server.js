import express from 'express';
import path from 'path';
import { promises as fs } from 'fs';
import cors from 'cors';

// Uzyskujemy ścieżkę do katalogu bieżącego skryptu
const __dirname = new URL('.', import.meta.url).pathname;

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware CSP
app.use((req, res, next) => {
	res.setHeader(
		'Content-Security-Policy',
		"default-src 'self'; img-src 'self' https:; script-src 'self' https://kit.fontawesome.com; style-src 'self' https: 'unsafe-inline';"
	);
	next();
});

// Middleware do obsługi statycznych plików (np. obrazków)
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// Middleware do obsługi obrazków w folderze public (jeśli masz obrazy)
const publicPath = path.join(__dirname, 'public');
app.use('/images', express.static(publicPath));

// CORS - dostosuj, by działało w lokalnym i produkcyjnym środowisku
app.use(
	cors({
		origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Adres frontendu
		methods: ['GET', 'POST', 'PUT', 'DELETE'], // Zezwalaj na te metody
		credentials: true, // Jeśli używasz ciasteczek
	})
);

// Ścieżka do pliku JSON
const guitarsFilePath = path.join(__dirname, 'data', 'guitars.json');
console.log('Ścieżka do pliku JSON:', guitarsFilePath); // Logowanie w celach debugowania

// Trasa podstawowa
app.get('/', (req, res) => {
	res.send('<h1>Serwer działa!</h1>');
});

// Trasa API - zwraca dane z pliku JSON
app.get('/api/guitars', async (req, res) => {
	try {
		const data = await fs.readFile(guitarsFilePath, 'utf-8');
		res.json(JSON.parse(data));
	} catch (error) {
		console.error('Błąd podczas odczytu pliku JSON:', error.message);
		res.status(500).send('Nie udało się załadować danych.');
	}
});

// Nasłuchiwanie na porcie
app.listen(PORT, () => {
	console.log(`Serwer działa na porcie ${PORT}`);
});

// stary kod który działa
// import express from 'express';
// import path from 'path';
// import { promises as fs } from 'fs';
// import cors from 'cors';

// const app = express();
// const PORT = 3000;

// app.use(express.static('public'));

// // Zezwalaj na żądania z frontendowego serwera (np. localhost:5173)
// app.use(
// 	cors({
// 		origin: 'http://localhost:5173', // Adres frontendu
// 		methods: ['GET', 'POST', 'PUT', 'DELETE'], // Zezwalaj na te metody
// 		credentials: true, // Jeśli używasz ciasteczek
// 	})
// );

// // Ścieżka do pliku JSON
// const guitarsFilePath = path.join(path.resolve(), 'data', 'guitars.json');
// console.log('Ścieżka do pliku JSON:', guitarsFilePath); // dodanie logowania

// // Trasa podstawowa
// app.get('/', (req, res) => {
// 	res.send('<h1>Serwer działa!</h1>');
// });

// // Trasa API
// app.get('/api/guitars', async (req, res) => {
// 	try {
// 		const data = await fs.readFile(guitarsFilePath, 'utf-8');
// 		res.json(JSON.parse(data));
// 	} catch (error) {
// 		console.error('Błąd podczas odczytu pliku JSON:', error.message);
// 		res.status(500).send('Nie udało się załadować danych.');
// 	}
// });

// // Nasłuchiwanie na porcie
// app.listen(PORT, () => {
// 	console.log(`Serwer działa na http://localhost:${PORT}`);
// });
