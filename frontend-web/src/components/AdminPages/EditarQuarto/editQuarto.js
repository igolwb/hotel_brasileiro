import React, { useEffect, useState } from 'react';
import useApiStore from '../../../services/api.js';
import { useNavigate, useParams } from 'react-router-dom';
import useAuthAdmin from '../../../hooks/adminAuth.js';
import './formQuarto.css';

function EditarQuarto() {
  const { authUser, authHeader } = useAuthAdmin();
  const { id } = useParams();
  const navigate = useNavigate();
  const { getQuartoById, updateQuarto, loading } = useApiStore();

  const [form, setForm] = useState({
    nome: '',
    descricao: '',
    preco: '',
    quantidade: '',
    imagem_url: ''
  });

  useEffect(() => {
    async function fetchData() {
      const data = await getQuartoById(id, authHeader);
      if (data) {
        setForm({
          nome: data.nome || '',
          descricao: data.descricao || '',
          preco: data.preco || '',
          quantidade: data.quantidade || '',
          imagem_url: data.imagem_url || ''
        });
      }
    }
    if(authUser) fetchData();
  }, [id, getQuartoById, authHeader, authUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateQuarto(id, form, authHeader);
      navigate('/admin/quartos');
    } catch (error) {
      alert('Erro ao salvar as alterações. Tente novamente.');
    }
  };
  return (
    <div className="editar-quarto-container">
      <h1 className="editar-quarto-title">Editar quarto</h1>
      <form className="editar-quarto-form" onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            className="editar-quarto-input"
            required
          />
        </label>
        <label>
          Descrição:
          <input
            type="text"
            name="descricao"
            value={form.descricao}
            onChange={handleChange}
            className="editar-quarto-input"
            required
          />
        </label>
        <label>
          Preço:
          <input
            type="number"
            name="preco"
            value={form.preco}
            onChange={handleChange}
            className="editar-quarto-input"
            required
          />
        </label>
        <label>
          Quantidade:
          <input
            type="number"
            name="quantidade"
            value={form.quantidade}
            onChange={handleChange}
            className="editar-quarto-input"
            required
          />
        </label>
        <label>
          Foto:
          <input
            type="text"
            name="imagem_url"
            value={form.imagem_url}
            onChange={handleChange}
            className="editar-quarto-input"
            required
          />
        </label>
        <div className="editar-quarto-actions">
          <button
            type="button"
            className="editar-quarto-cancelar"
            onClick={() => navigate('/admin/quartos')}
            disabled={loading}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="editar-quarto-salvar"
            disabled={loading}
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditarQuarto;
