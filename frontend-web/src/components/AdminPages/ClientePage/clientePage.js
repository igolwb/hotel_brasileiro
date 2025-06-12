import React, { useEffect, useState } from 'react';
import useApiStore from '../../../services/api.js';
import AdminHeader from '../HeaderAdmin/adminHeader.js';
import useAuthAdmin from '../../../hooks/adminAuth.js';
import './clientePage.css';

const USERS_PER_PAGE = 10;

function Clientes() {
  const { authUser, authHeader } = useAuthAdmin();
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
    if (authUser) {
      fetchClientes(authHeader);
    }
  }, [fetchClientes, authUser, authHeader]);

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
      deleteCliente(clienteSelecionado.id, authHeader);
      fecharModal();
    }
  };

  const linhasVazias = Math.max(0, USERS_PER_PAGE - currentUsers.length);

  return (
    <>
      <AdminHeader />
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
              <th>Role</th>
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
                    <td>{cliente.senha.length > 19 ? cliente.senha.slice(0, 19) + '...' : cliente.senha}</td>
                    <td>{cliente.role}</td>
                  </tr>
                ))}
                {Array.from({ length: linhasVazias }).map((_, idx) => (
                  <tr key={`empty-${idx}`}>
                    <td>&nbsp;</td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>

        <div className="pagination">
          <button className="pagination-btn" onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>Anterior</button>
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button key={idx} className={`pagination-btn ${currentPage === idx + 1 ? 'active' : ''}`} onClick={() => setCurrentPage(idx + 1)}>{idx + 1}</button>
          ))}
          <button className="pagination-btn" onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>Próxima</button>
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
