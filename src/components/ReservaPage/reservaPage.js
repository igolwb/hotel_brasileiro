import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import './ReservaPage.css';

const ReservaPage = () => {
  const { roomId } = useParams();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [loading, setLoading] = useState(true);

  const authUser = useAuthUser();
  const authHeader = useAuthHeader();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authUser) {
      alert('Você precisa estar logado para fazer uma reserva.');
      navigate('/login');
      return;
    }
  }, [authUser, navigate]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/quartos/${roomId}`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) setSelectedRoom(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [roomId]);

  const handleReserva = async () => {
    if (!checkInDate || !checkOutDate || !guests) {
      alert('Preencha todos os campos!');
      return;
    }
    if (new Date(checkInDate) >= new Date(checkOutDate)) {
      alert('A data de início deve ser anterior à data de fim.');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/reservas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authHeader
        },
        body: JSON.stringify({
          quarto_id: selectedRoom.id,
          hospedes: guests,
          inicio: checkInDate,
          fim: checkOutDate
        })
      });

      if (res.ok) {
        alert('Reserva criada com sucesso!');
        navigate('/minhas-reservas');
      } else {
        const err = await res.json();
        alert(err.error || 'Erro ao criar reserva');
      }
    } catch (error) {
      alert('Erro ao criar reserva');
    }
  };

  if (loading) return <div className="loading">Carregando...</div>;
  if (!selectedRoom) return <div className="loading">Quarto não encontrado.</div>;

  return (
    <div className="reservation-container">
      <div className="reservation-steps">
        {/* Step 1: Datas e Hóspedes */}
        <div className="step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h2>Sua estadia vai além de uma reserva</h2>
            <h3>Escolha suas datas</h3>
            
            <div className="date-picker">
              <div className="date-field">
                <label>Quando seu descanso começa?</label>
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                />
              </div>
              
              <div className="date-field">
                <label>Quando a saudade vai bater?</label>
                <input
                  type="date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                />
              </div>
            </div>

            <div className="guest-counter">
              <h3>Quantidade de pessoas</h3>
              <select 
                value={guests} 
                onChange={(e) => setGuests(parseInt(e.target.value))}
              >
                {[...Array(selectedRoom.quantidade || 4).keys()].map(i => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>

            <div style={{ marginTop: '20px' }}>
              <h3>Experiência Adicional:</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Alvorada Secreta</p>
            </div>
          </div>
        </div>

        {/* Step 2: Quarto Escolhido */}
        <div className="step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h2>Quarto escolhido</h2>
            <div className="room-card">
              <img 
                src={selectedRoom.imagem_url} 
                alt={selectedRoom.nome} 
                className="room-image" 
              />
              <div className="room-info">
                <h3>{selectedRoom.nome}</h3>
                <p>{selectedRoom.descricao}</p>
                {/* Aqui você pode adicionar detalhes do quarto se necessário */}
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Checkout */}
        <div className="step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h2>Checkout</h2>
            <div className="checkout-summary">
              <h3>Total</h3>
              
              {checkInDate && checkOutDate && (
                <div className="dates-summary">
                  <p>Check-in: {new Date(checkInDate).toLocaleDateString('pt-BR')}</p>
                  <p>Check-out: {new Date(checkOutDate).toLocaleDateString('pt-BR')}</p>
                  <p>Hóspedes: {guests}</p>
                </div>
              )}

              <div className="price-total">
                <h2>Investimento Total: R$ {selectedRoom.preco ? Number(selectedRoom.preco).toFixed(2) : '2.300'}</h2>
              </div>

              <div className="payment-section">
                <h3>Pagamento</h3>
                <p>Faça seu pagamento via PIX</p>
                <div className="pix-key">
                  <h4>Chave aleatória</h4>
                  <code>4fc206fb-cacb-4858-8d1e-06be251bdc78</code>
                </div>

                <button className="confirm-button" onClick={handleReserva}>
                  Confirmar reserva
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservaPage;
