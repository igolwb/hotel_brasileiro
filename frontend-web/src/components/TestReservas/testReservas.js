import React, { useEffect, useState } from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';

function MinhasReservas() {
  const authUser = useAuthUser();
  const authHeader = useAuthHeader();
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/reservas/minhas-reservas', {
      headers: {
        Authorization: authHeader
      }
    })
      .then(res => res.json())
      .then(data => setReservas(data));
  }, [authHeader]);

  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <div>
        <img src="/user-icon.svg" alt="user" style={{ width: 80, marginBottom: 20 }} />
      </div>
      <h1>Olá, {authUser && authUser.nome ? authUser.nome : 'Usuário'}</h1>
      <h2>Suas reservas</h2>
      <div style={{
        display: 'flex', 
        justifyContent: 'center', 
        gap: 32, 
        marginTop: 32, 
        background: '#fff', 
        borderRadius: 24, 
        boxShadow: '0 4px 32px #0002', 
        padding: 32
      }}>
        {reservas.map(reserva => (
          <div key={reserva.reserva_id} style={{
            width: 220, 
            borderRadius: 16, 
            boxShadow: '0 2px 12px #0001',
            overflow: 'hidden',
            background: '#fff'
          }}>
            <img src={reserva.imagem_url} alt={reserva.quarto_nome} style={{ width: '100%', height: 140, objectFit: 'cover' }} />
            <div style={{ padding: 16, textAlign: 'left' }}>
              <strong>{reserva.quarto_nome}</strong>
              <div style={{ fontSize: 13, color: '#555', margin: '6px 0' }}>
                {reserva.descricao}
              </div>
              <div style={{ fontSize: 13, color: '#888' }}>
                {new Date(reserva.inicio).toLocaleDateString()} - {new Date(reserva.fim).toLocaleDateString()}
              </div>
              <div style={{ fontSize: 13, color: '#888' }}>
                Hóspedes: {reserva.hospedes}
              </div>
            </div>
          </div>
        ))}
        {reservas.length === 0 && <p>Você ainda não fez reservas.</p>}
      </div>
    </div>
  );
}

export default MinhasReservas;
