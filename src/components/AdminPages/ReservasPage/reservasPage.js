import React, { useEffect, useState } from 'react';
import useApiStore from '../../../services/api.js';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../HeaderAdmin/adminHeader.js';
import './reservasPage.css';
import tabler_edit from '../../../assets/tabler_edit.svg';
import delete_btn from '../../../assets/delete_btn.svg';
import useAuthAdmin from '../../../hooks/adminAuth.js';

const RESERVAS_PER_PAGE = 10;

function AdminReservas() {
  const { authUser, authHeader } = useAuthAdmin();
  const {
    reservas,
    loading,
    fetchReservas,
    deleteReserva,
  } = useApiStore();

  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [reservaSelecionada, setReservaSelecionada] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (authUser) {
      fetchReservas(authHeader);
    }
  }, [fetchReservas, authUser, authHeader]);

  const indexOfLastReserva = currentPage * RESERVAS_PER_PAGE;
  const indexOfFirstReserva = indexOfLastReserva - RESERVAS_PER_PAGE;
  const currentReservas = reservas.slice(indexOfFirstReserva, indexOfLastReserva);

  const totalPages = Math.ceil(reservas.length / RESERVAS_PER_PAGE);

  const abrirModal = (reserva) => {
    setReservaSelecionada(reserva);
    setShowModal(true);
  };

  const fecharModal = () => {
    setShowModal(false);
    setReservaSelecionada(null);
  };

  const confirmarExclusao = () => {
    if (reservaSelecionada) {
      deleteReserva(reservaSelecionada.id);
      fecharModal();
    }
  };

  const linhasVazias = Math.max(0, RESERVAS_PER_PAGE - currentReservas.length);

  return (
    <>
      <AdminHeader />
      <div className="reservas-container">
        <h1 className="reservas-title">Reservas</h1>
        <table className="reservas-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>ID Quarto</th>
              <th>ID Cliente</th>
              <th>Hóspedes</th>
              <th>Início</th>
              <th>Fim</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={7} style={{ textAlign: 'center' }}>Carregando...</td>
              </tr>
            ) : (
              <>
                {currentReservas.map((reserva) => (
                  <tr key={reserva.id}>
                    <td>{reserva.id}</td>
                    <td>{reserva.quarto_id}</td>
                    <td>{reserva.cliente_id}</td>
                    <td>{reserva.hospedes}</td>
                    <td>{reserva.inicio}</td>
                    <td>{reserva.fim}</td>
                    <td>
                      <button 
                        className="btn-trash" 
                        onClick={() => abrirModal(reserva)}
                      >
                        <img src={delete_btn} alt="Excluir" style={{ width: 28, height: 28 }}/>
                      </button>
                      <button 
                        className="btn-image" 
                        onClick={() => navigate(`/admin/reservas/${reserva.id}`)}
                      >
                        <img src={tabler_edit} alt="Editar" style={{ width: 28, height: 28 }}/>
                      </button>
                    </td>
                  </tr>
                ))}
                {Array.from({ length: linhasVazias }).map((_, idx) => (
                  <tr key={`empty-${idx}`}>
                    <td>&nbsp;</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>

        <div className="pagination">
          <button 
            className="pagination-btn" 
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} 
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              className={`pagination-btn ${currentPage === idx + 1 ? 'active' : ''}`}
              onClick={() => setCurrentPage(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}
          <button 
            className="pagination-btn" 
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Próxima
          </button>
        </div>

        <button 
          className="btn-add" 
          onClick={() => navigate(`/admin/reservas/addReserva`)}
        >
          Adicionar
        </button>

        {showModal && (
          <div className="modal-bg" onClick={fecharModal}>
            <div className="modal" onClick={e => e.stopPropagation()}>
              <h2>Confirmar Exclusão</h2>
              <p>Deseja realmente excluir a reserva <b>{reservaSelecionada?.id}</b>?</p>
              <div className="modal-actions">
                <button className="btn-cancel" onClick={fecharModal}>Cancelar</button>
                <button className="btn-confirm" onClick={confirmarExclusao}>Excluir</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AdminReservas;
