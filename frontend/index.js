const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;

// Middlewares para JSON e urlencoded (se precisar)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos da pasta public (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Rotas para páginas HTML (views)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/game/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/game.html'));
});

app.get('/form/:id?', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/form.html'));
});

app.listen(PORT, () => {
  console.log(`Frontend rodando em http://localhost:${PORT}`);
});
