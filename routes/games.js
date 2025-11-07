// routes/games.js

const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/gamesController');
const authMiddleware = require('../middleware/auth');

// GET /games → listar todos os jogos (com filtros opcionais)
router.get('/', gamesController.getAllGames);

// GET /games/:id → obter jogo por ID
router.get('/:id', gamesController.getGameById);

// POST /games → criar novo jogo (autenticado)
router.post('/', authMiddleware, gamesController.createGame);

// PUT /games/:id → atualizar jogo (autenticado)
router.put('/:id', authMiddleware, gamesController.updateGame);

// DELETE /games/:id → remover jogo (autenticado)
router.delete('/:id', authMiddleware, gamesController.deleteGame);

module.exports = router;
