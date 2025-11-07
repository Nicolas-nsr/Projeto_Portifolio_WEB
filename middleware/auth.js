// middleware/auth.js
module.exports = function (req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  // Validação simples para teste
  if (token !== 'meu-token-teste') {
    return res.status(403).json({ message: 'Token inválido' });
  }

  next();
};
