// backend/controllers/authController.js

// In-memory users store
const users = [];

// Register
exports.register = (req, res) => {
  const { email, password } = req.body;
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: 'E-mail já cadastrado' });
  }
  const user = { email, password };
  users.push(user);
  return res.status(201).json({ message: 'Usuário cadastrado', user: { email } });
};

// Login
exports.login = (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }
  // Retornamos um token falso só para o MVP
  return res.json({ message: 'Login bem-sucedido', user: { email }, token: 'fake-jwt-token' });
};
