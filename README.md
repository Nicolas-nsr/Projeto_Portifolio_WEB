# 🎮 Catálogo de Jogos Zerados

Aplicação completa (API + Web) para gerenciar e visualizar um catálogo pessoal de jogos finalizados.

---

## 🚀 Funcionalidades

- Listar todos os jogos zerados  
- Filtrar por console, gênero ou nota mínima  
- Adicionar, editar e remover jogos  
- Autenticação JWT (somente usuários autenticados podem alterar dados)  
- Interface web estilizada com **Bulma**  
- Documentação interativa com **Swagger UI**

---

## 🧱 Estrutura do Projeto

📁 Catalogo-Jogos-Zerados
┣ 📂 data/ # Banco em memória (games.json)
┣ 📂 routes/ # Rotas Express
┣ 📂 controllers/ # Lógica dos endpoints
┣ 📂 services/ # Regras de negócio
┣ 📂 models/ # Modelo do jogo
┣ 📂 middleware/ # Autenticação JWT
┣ 📂 resources/ # Swagger.json e recursos
┣ 📂 public/ # Frontend estático (CSS, JS)
┣ 📂 views/ # Templates HTML
┣ 📄 index.js # Servidor principal (porta 3000)
┣ 📄 frontend.js # Servidor do frontend (porta 4000)
┣ 📄 README.md
┗ 📄 package.json

---

## ⚙️ Instalação

### 1️⃣ Clonar o repositório

git clone https://github.com/seu-usuario/catalogo-jogos-zerados.git
cd catalogo-jogos-zerados
2️⃣ Instalar dependências
npm install

3️⃣ Iniciar a API
npm start
Acesse 👉 http://localhost:3000/api-docs

4️⃣ Iniciar o Frontend
node frontend.js
Acesse 👉 http://localhost:4000

🧰 Tecnologias Principais

Node.js + Express
Swagger UI (documentação da API)
Bulma (frontend CSS)
JWT (autenticação)
Fetch API (consumo da API no frontend)


🧪 Testes e Documentação Técnica
O plano completo de testes automatizados e guias técnicos estão disponíveis na Wiki:
📘 → Acesse a Wiki do Projeto


🛠️ Próximos Passos

Implementar testes com Jest e Supertest
Adicionar login no frontend
Adicionar paginação e busca
Criar modo “estatísticas de jogatina”


📜 Licença
Distribuído sob a licença MIT.
Feito com ❤️ por Nicolas Seabra.

---
