import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [balance, setBalance] = useState('0,00');

  useEffect(() => {
    // TODO: buscar dados reais do backend
    setBalance('3.500,00');
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Olá, Usuário!</h1>
      <h2>Saldo consolidado: R$ {balance}</h2>
      {/* Aqui entra os cards de gráficos e metas */}
    </div>
  );
}
