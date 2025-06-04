import React, { useEffect, useState } from 'react';
import useApiStore from '../../../services/api.js';
import AdminHeader from '../HeaderAdmin/adminHeader.js';
import './clientePage.css';

const USERS_PER_PAGE = 10;

function Clientes() {
  const {
    clientes,
    loading,
    fetchClientes,
    deleteCliente,
  } = useApiStore();

  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [clienteSelecionado, setClienteSelecionado] = useState(null);

  useEffect(() => {
    fetchClientes();
  }, [fetchClientes]);

  // Calcular índices para a página atual
  const indexOfLastUser = currentPage * USERS_PER_PAGE;
  const indexOfFirstUser = indexOfLastUser - USERS_PER_PAGE;
  const currentUsers = clientes.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(clientes.length / USERS_PER_PAGE);

  const abrirModal = (cliente) => {
    setClienteSelecionado(cliente);
    setShowModal(true);
  };

  const fecharModal = () => {
    setShowModal(false);
    setClienteSelecionado(null);
  };

  const confirmarExclusao = () => {
    if (clienteSelecionado) {
      deleteCliente(clienteSelecionado.id);
      fecharModal();
    }
  };

  // Para preencher linhas vazias na tabela
  const linhasVazias = Math.max(0, USERS_PER_PAGE - currentUsers.length);

  return (
    <>
      <AdminHeader /> {/* Header renderizado no topo */}
      <div className="clientes-container">
        <h1 className="clientes-title">Clientes</h1>
        <table className="clientes-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Senha</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center' }}>Carregando...</td>
              </tr>
            ) : (
              <>
                {currentUsers.map((cliente) => (
                  <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.email}</td>
                    <td>{cliente.telefone}</td>
                    <td>{cliente.senha.length > 19
                        ? cliente.senha.slice(0, 19) + '...'
                        : cliente.senha}
                    </td>
                    <td>
                      <button
                        className="btn-trash"
                        onClick={() => abrirModal(cliente)}
                        aria-label="Excluir"
                      >
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <rect width="24" height="24" fill="none"/>
                          <path d="M7 6V4.5A1.5 1.5 0 0 1 8.5 3h7A1.5 1.5 0 0 1 17 4.5V6M4 6h16M5 6v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 11v6M14 11v6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
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
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>

        {/* Paginação */}
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

        {showModal && (
          <div className="modal-bg" onClick={fecharModal}>
            <div className="modal" onClick={e => e.stopPropagation()}>
              <h2>Confirmar Exclusão</h2>
              <p>Deseja realmente excluir o cliente <b>{clienteSelecionado?.nome}</b>?</p>
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

export default Clientes;