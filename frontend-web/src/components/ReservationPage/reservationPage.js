import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import rooms from '../../data/rooms'; // Importando os dados dos quartos
import './ReservationPage.css';

const ReservationPage = () => {
  const { roomId } = useParams();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0); // Base price set dynamically below

  useEffect(() => {
    // Encontra o quarto baseado no ID da URL
    const room = rooms.find(room => room.id === parseInt(roomId));
    if (room) {
      setSelectedRoom(room);
      // Definir o preço base do quarto aqui (exemplo, use o preço real do quarto se disponível)
      // Substitua '2300' pelo valor correto, talvez vindo de room.price?
      // Para este exemplo, vou manter o preço fixo inicial, mas idealmente viria do objeto 'room'.
      const basePrice = room.price || 2300; // Use room.price if it exists, otherwise default
      setTotalPrice(basePrice);
    }
  }, [roomId]);

  // Função para adicionar experiência ao total (exemplo, ajuste conforme necessário)
  const handleExperienceSelect = (experience) => {
    // Lógica para remover o preço da experiência anterior se uma nova for selecionada
    let newTotal = totalPrice;
    if (selectedExperience) {
      newTotal -= selectedExperience.price;
    }
    newTotal += experience.price || 0;

    setSelectedExperience(experience);
    setTotalPrice(newTotal);
  };

  // Adicione aqui uma função para calcular o preço total baseado nas datas, se necessário
  // useEffect(() => {
  //    if (checkInDate && checkOutDate && selectedRoom) {
  //       // Lógica para calcular a duração da estadia
  //       const date1 = new Date(checkInDate);
  //       const date2 = new Date(checkOutDate);
  //       const timeDiff = date2.getTime() - date1.getTime();
  //       const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  //
  //       if (daysDiff > 0) {
  //           const baseRoomPrice = selectedRoom.price || 2300; // Use o preço real do quarto
  //           let calculatedPrice = baseRoomPrice * daysDiff;
  //           if (selectedExperience) {
  //               calculatedPrice += selectedExperience.price;
  //           }
  //           setTotalPrice(calculatedPrice);
  //       } else {
  //          // Resetar para o preço base se as datas forem inválidas ou iguais
  //           const baseRoomPrice = selectedRoom.price || 2300;
  //           let currentPrice = baseRoomPrice;
  //            if (selectedExperience) {
  //                currentPrice += selectedExperience.price;
  //            }
  //           setTotalPrice(currentPrice);
  //       }
  //    }
  // }, [checkInDate, checkOutDate, selectedRoom, selectedExperience]);


  if (!selectedRoom) {
    return <div className="loading">Carregando detalhes do quarto...</div>;
  }

  return (
    <div className="reservation-container">
      <div className="reservation-steps">
        {/* Step 1: Datas e Hóspedes */}
        <div className="step active">
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
              <select value={guests} onChange={(e) => setGuests(parseInt(e.target.value))}>
                {[...Array(selectedRoom.capacity || 4).keys()].map(i => ( // Usa a capacidade do quarto se disponível
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Step 2: Quarto Escolhido - MODIFIED STRUCTURE */}
        <div className="step active">
          <div className="step-number">2</div>
          <div className="step-content">
            <h2>Quarto escolhido</h2>
            {/* Using room-card structure from homePage.js */}
            <div className="room-card">
              <img src={selectedRoom.image} alt={selectedRoom.title} className="room-image" />
              <div className="room-info">
                <div> {/* Added wrapper div for title/desc/details to allow space-between */}
                  <h3>{selectedRoom.title}</h3>
                  <p>{selectedRoom.description}</p>
                  <ul>
                    {selectedRoom.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
                {/* Placeholder for potential actions or price display within the card if needed */}
                {/* <div className="room-card-actions">...</div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Checkout */}
        <div className="step active">
          <div className="step-number">3</div>
          <div className="step-content">
            <h2>Checkout</h2>
            <div className="checkout-summary">
              <h3>{selectedRoom.title}</h3>

              {selectedExperience && (
                <div className="experience-added">
                  <h4>Experiência Adicional:</h4>
                  <p>{selectedExperience.title} (R$ {selectedExperience.price.toFixed(2)})</p>
                </div>
              )}

              {/* Display Check-in/Check-out dates */}
              {checkInDate && checkOutDate && (
                <div className="dates-summary">
                    <p>Check-in: {new Date(checkInDate).toLocaleDateString('pt-BR')}</p>
                    <p>Check-out: {new Date(checkOutDate).toLocaleDateString('pt-BR')}</p>
                    <p>Hóspedes: {guests}</p>
                </div>
              )}


              <div className="price-total">
                <h3>Total</h3>
                <h2>Investimento Total: R$ {totalPrice.toFixed(2)}</h2>
              </div>

              <div className="payment-section">
                <h3>Pagamento</h3>
                <p>Faça seu pagamento via PIX</p>
                <div className="pix-key">
                  <h4>Chave aleatória</h4>
                  <code>4fc206fb-cacb-4858-8d1e-06be251bdc78</code>
                </div>

                <button className="confirm-button">Confirmar reserva</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;