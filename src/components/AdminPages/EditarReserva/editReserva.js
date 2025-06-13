import React, { useEffect, useState } from 'react';
import useApiStore from '../../../services/api.js';
import { useNavigate, useParams } from 'react-router-dom';
import useAuthAdmin from '../../../hooks/adminAuth.js';
import './formReserva.css';

function EditarReserva() {
  const { authUser, authHeader } = useAuthAdmin();
  const { id } = useParams();
  const navigate = useNavigate();
  const { getReservaById, updateReserva, loading } = useApiStore();

  const [form, setForm] = useState({
    quarto_id: '',
    cliente_id: '',
    hospedes: '',
    inicio: '',
    fim: ''
  });

  useEffect(() => {
    async function fetchData() {
      const data = await getReservaById(id);
      if (data) {
        setForm({
          quarto_id: data.quarto_id || '',
          cliente_id: data.cliente_id || '',
          hospedes: data.hospedes || '',
          inicio: data.inicio ? data.inicio.slice(0, 10) : '',
          fim: data.fim ? data.fim.slice(0, 10) : ''
        });
      }
    }
    fetchData();
  }, [id, getReservaById]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateReserva(id, form, authHeader);
      navigate('/admin/reservas');
    } catch (error) {
      console.error('Erro ao salvar as alterações:', error);
      alert('Não foi possível salvar as alterações. Tente novamente.');
    }
  };

  return (
    <div className="editar-reserva-container">
      <h1 className="editar-reserva-title">Editar Reserva</h1>
      <form className="editar-reserva-form" onSubmit={handleSubmit}>
        <label>
          ID do Quarto:
          <input
            type="number"
            name="quarto_id"
            value={form.quarto_id}
            onChange={handleChange}
            className="editar-reserva-input"
            required
          />
        </label>
        <label>
          ID do Cliente:
          <input
            type="number"
            name="cliente_id"
            value={form.cliente_id}
            onChange={handleChange}
            className="editar-reserva-input"
            required
          />
        </label>
        <label>
          Hóspedes:
          <input
            type="number"
            name="hospedes"
            value={form.hospedes}
            onChange={handleChange}
            className="editar-reserva-input"
            required
          />
        </label>
        <label>
          Início:
          <input
            type="date"
            name="inicio"
            value={form.inicio}
            onChange={handleChange}
            className="editar-reserva-input"
            required
          />
        </label>
        <label>
          Fim:
          <input
            type="date"
            name="fim"
            value={form.fim}
            onChange={handleChange}
            className="editar-reserva-input"
            required
          />
        </label>
        <div className="editar-reserva-actions">
          <button
            type="button"
            className="editar-reserva-cancelar"
            onClick={() => navigate('/admin/reservas')}
            disabled={loading}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="editar-reserva-salvar"
            disabled={loading}
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditarReserva;
