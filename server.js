import express from 'express';
import path from 'path';
import { promises as fs } from 'fs';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware do obsługi statycznych plików (np. obrazków)
const distPath = path.join(path.resolve(), 'dist');
app.use(express.static(distPath));

// Middleware do obsługi obrazków w folderze public (jeśli masz obrazy)
const publicPath = path.join(path.resolve(), 'public');
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
const guitarsFilePath = path.join(path.resolve(), 'data', 'guitars.json');
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

// Przekierowanie na frontend (dla aplikacji SPA)
app.get('*', (req, res) => {
	res.sendFile(path.join(distPath, 'index.html'));
});

// Nasłuchiwanie na porcie
app.listen(PORT, () => {
	console.log(`Serwer działa na porcie ${PORT}`);
});
