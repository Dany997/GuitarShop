import express from 'express';
import path from 'path';
import { promises as fs } from 'fs';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.static('public'));

// Zezwalaj na żądania z frontendowego serwera (np. localhost:5173)
app.use(
	cors({
		origin: 'http://localhost:5173', // Adres frontendu
		methods: ['GET', 'POST', 'PUT', 'DELETE'], // Zezwalaj na te metody
		credentials: true, // Jeśli używasz ciasteczek
	})
);

// Ścieżka do pliku JSON
const guitarsFilePath = path.join(path.resolve(), 'data', 'guitars.json');
console.log('Ścieżka do pliku JSON:', guitarsFilePath); // dodanie logowania

// Trasa podstawowa
app.get('/', (req, res) => {
	res.send('<h1>Serwer działa!</h1>');
});

// Trasa API
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
	console.log(`Serwer działa na http://localhost:${PORT}`);
});
