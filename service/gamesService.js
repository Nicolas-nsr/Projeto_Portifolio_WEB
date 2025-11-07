// service/gamesService.js
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/games.json');

function readGames() {
  const data = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(data);
}

function writeGames(games) {
  fs.writeFileSync(dataPath, JSON.stringify(games, null, 2));
}

exports.getAllGames = (filters) => {
  let games = readGames();

  if (filters.console) {
    games = games.filter(g => g.console.toLowerCase() === filters.console.toLowerCase());
  }
  if (filters.genre) {
    games = games.filter(g => g.genre.toLowerCase() === filters.genre.toLowerCase());
  }
  if (filters.rating) {
    games = games.filter(g => g.rating >= parseInt(filters.rating));
  }

  return games;
};

exports.getGameById = (id) => {
  const games = readGames();
  return games.find(g => g.id === id);
};

exports.createGame = (gameData) => {
  const games = readGames();
  const newGame = { id: games.length + 1, ...gameData };
  games.push(newGame);
  writeGames(games);
  return newGame;
};

exports.updateGame = (id, gameData) => {
  const games = readGames();
  const index = games.findIndex(g => g.id === id);
  if (index === -1) return null;

  games[index] = { ...games[index], ...gameData };
  writeGames(games);
  return games[index];
};

exports.deleteGame = (id) => {
  const games = readGames();
  const index = games.findIndex(g => g.id === id);
  if (index === -1) return false;

  games.splice(index, 1);
  writeGames(games);
  return true;
};
