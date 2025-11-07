const apiUrl = 'http://localhost:3000/games';
const token = 'meu-token-teste';

const form = document.getElementById('game-form');
const gameId = document.getElementById('game-id');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    title: document.getElementById('title').value,
    console: document.getElementById('console').value,
    genre: document.getElementById('genre').value,
    startDate: document.getElementById('startDate').value,
    finishDate: document.getElementById('finishDate').value,
    timePlayed: document.getElementById('timePlayed').value,
    rating: parseInt(document.getElementById('rating').value),
    condition: document.getElementById('condition').value,
    mission: document.getElementById('mission').value
  };

  try {
    let res;
    if (gameId.value) {
      res = await fetch(`${apiUrl}/${gameId.value}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': token },
        body: JSON.stringify(data)
      });
    } else {
      res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': token },
        body: JSON.stringify(data)
      });
    }

    if (res.ok) {
      alert('Jogo salvo com sucesso!');
      window.location.href = '/';
    } else {
      const err = await res.json();
      alert('Erro: ' + err.message);
    }
  } catch (err) {
    alert('Erro: ' + err.message);
  }
});
