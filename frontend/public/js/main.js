const apiUrl = 'http://localhost:3000/games';

const gamesContainer = document.getElementById('gamesContainer');
const alertBox = document.getElementById('alert');
const gameModal = document.getElementById('gameModal');
const closeModalBtn = document.getElementById('closeModal');
const btnAddGame = document.getElementById('btnAddGame');
const saveGameBtn = document.getElementById('saveGameBtn');
const cancelBtn = document.getElementById('cancelBtn');
const gameForm = document.getElementById('gameForm');
let editingGameId = null;

// Função para exibir alert
function showAlert(message) {
  alertBox.textContent = message;
  alertBox.classList.remove('is-hidden');
  setTimeout(() => alertBox.classList.add('is-hidden'), 3000);
}

// Abrir modal
function openModal() {
  gameModal.classList.add('is-active');
}

// Fechar modal
function closeModal() {
  gameModal.classList.remove('is-active');
  gameForm.reset();
  editingGameId = null;
}

// Renderizar cards de jogos
function renderGames(games) {
  gamesContainer.innerHTML = '';
  games.forEach(game => {
    const card = document.createElement('div');
    card.classList.add('column', 'is-one-quarter');
    card.innerHTML = `
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">${game.title}</p>
        </header>
        <div class="card-content">
          <p><strong>Console:</strong> ${game.console}</p>
          <p><strong>Gênero:</strong> ${game.genre}</p>
          <p><strong>Nota:</strong> ${game.rating}</p>
          <p><strong>Missão:</strong> ${game.mission}</p>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item" onclick="editGame(${game.id})">Editar</a>
          <a href="#" class="card-footer-item" onclick="deleteGame(${game.id})">Deletar</a>
        </footer>
      </div>
    `;
    gamesContainer.appendChild(card);
  });
}

// Carregar jogos da API
async function loadGames() {
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error('Erro ao carregar jogos');
    const data = await res.json();
    renderGames(data);
  } catch (err) {
    showAlert(err.message);
  }
}

// Salvar novo jogo ou atualizar existente
async function saveGame() {
  const formData = Object.fromEntries(new FormData(gameForm));
  const method = editingGameId ? 'PUT' : 'POST';
  const url = editingGameId ? `${apiUrl}/${editingGameId}` : apiUrl;

  try {
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (!res.ok) throw new Error('Falha ao salvar jogo');
    closeModal();
    loadGames();
  } catch (err) {
    showAlert(err.message);
  }
}

// Editar jogo
async function editGame(id) {
  try {
    const res = await fetch(`${apiUrl}/${id}`);
    if (!res.ok) throw new Error('Jogo não encontrado');
    const game = await res.json();
    Object.keys(game).forEach(key => {
      if (gameForm[key]) gameForm[key].value = game[key];
    });
    editingGameId = id;
    openModal();
  } catch (err) {
    showAlert(err.message);
  }
}

// Deletar jogo
async function deleteGame(id) {
  if (!confirm('Deseja realmente deletar este jogo?')) return;
  try {
    const res = await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Falha ao deletar jogo');
    loadGames();
  } catch (err) {
    showAlert(err.message);
  }
}

// Eventos
btnAddGame.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);
saveGameBtn.addEventListener('click', saveGame);

// Inicializar
loadGames();
