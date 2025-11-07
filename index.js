// index.js

const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./resources/swagger.json');

const cors = require('cors');

// Permite qualquer origem - para desenvolvimento, depois restrinja
app.use(cors({
  origin: 'http://localhost:4000'
}));

// Middlewares
app.use(express.json());

// Rotas
const gamesRoutes = require('./routes/games');
app.use('/games', gamesRoutes);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Swagger UI disponível em http://localhost:${PORT}/api-docs`);
});
