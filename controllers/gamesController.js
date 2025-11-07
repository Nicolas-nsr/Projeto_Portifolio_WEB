// controllers/gamesController.js
const gamesService = require('../service/gamesService');

exports.getAllGames = (req, res) => {
  const filters = req.query; // console, genre, rating
  const games = gamesService.getAllGames(filters);
  res.json(games);
};

exports.getGameById = (req, res) => {
  const game = gamesService.getGameById(parseInt(req.params.id));
  if (game) res.json(game);
  else res.status(404).json({ message: 'Jogo não encontrado' });
};

exports.createGame = (req, res) => {
  const newGame = gamesService.createGame(req.body);
  res.status(201).json(newGame);
};

exports.updateGame = (req, res) => {
  const updatedGame = gamesService.updateGame(parseInt(req.params.id), req.body);
  if (updatedGame) res.json(updatedGame);
  else res.status(404).json({ message: 'Jogo não encontrado' });
};

exports.deleteGame = (req, res) => {
  const deleted = gamesService.deleteGame(parseInt(req.params.id));
  if (deleted) res.json({ message: 'Jogo removido' });
  else res.status(404).json({ message: 'Jogo não encontrado' });
};
