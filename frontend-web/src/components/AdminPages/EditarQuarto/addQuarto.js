import React, { useState } from 'react';
import useApiStore from '../../../services/api.js';
import { useNavigate } from 'react-router-dom';
import './formQuarto.css';

function AddQuarto() {
  const navigate = useNavigate();
  const { createQuarto, loading } = useApiStore();

  const [form, setForm] = useState({
    nome: '',
    descricao: '',
    preco: '',
    quantidade: '',
    imagem_url: ''
  });

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
      await createQuarto(form); // Adiciona o novo quarto
      navigate('/admin/quartos'); // Redireciona para a página de quartos
    } catch (error) {
      console.error('Erro ao criar o quarto:', error);
      alert('Não foi possível criar o quarto. Tente novamente.');
    }
  };

  return (
    <div className="editar-quarto-container">
      <h1 className="editar-quarto-title">Adicionar Quarto</h1>
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

export default AddQuarto;