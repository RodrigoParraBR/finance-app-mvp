// Mock implementation for MVP
exports.register = (req, res) => {
  const { email, password } = req.body;
  // TODO: validar e salvar em banco (in-memory por enquanto)
  res.status(201).json({ message: 'Usuário cadastrado', user: { email } });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  // TODO: autenticar (in-memory)
  res.json({ message: 'Login bem-sucedido', user: { email }, token: 'fake-jwt-token' });
};
