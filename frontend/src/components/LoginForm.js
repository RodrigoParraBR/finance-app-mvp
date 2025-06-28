import React, { useState } from 'react';
import axios from 'axios';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:4000/api/auth/login', { email, password });
      console.log(res.data);
      // TODO: salvar token e redirecionar
      window.location.href = '/';
    } catch (err) {
      console.error(err);
      alert('Erro no login');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="E-mail"
        style={{ display: 'block', marginBottom: 10, width: '100%', height: 40, padding: 8 }}
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Senha"
        style={{ display: 'block', marginBottom: 20, width: '100%', height: 40, padding: 8 }}
      />
      <button onClick={handleLogin} style={{ width: '100%', height: 45 }}>Login</button>
      <p style={{ marginTop: 10 }}>
        <a href="#register">Cadastrar nova conta</a> | <a href="#forgot">Esqueci minha senha</a>
      </p>
    </div>
  );
}
