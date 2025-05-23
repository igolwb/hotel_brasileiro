import React, { useState } from 'react';

function CadastroReservaPage() {
  const [form, setForm] = useState({
    quartoId: '',
    clienteId: '',
    inicio: '',
    fim: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert('Reserva cadastrada!');
    // Aqui você pode integrar com o backend futuramente
  }

  return (
    <div className="container">
      <h2>Cadastrar reserva</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <label>Quarto ID:</label>
        <input type="text" name="quartoId" value={form.quartoId} onChange={handleChange} required />

        <label>Cliente ID:</label>
        <input type="text" name="clienteId" value={form.clienteId} onChange={handleChange} required />

        <label>Início:</label>
        <input type="date" name="inicio" value={form.inicio} onChange={handleChange} required />

        <label>Fim:</label>
        <input type="date" name="fim" value={form.fim} onChange={handleChange} required />

        <button type="submit" style={{ marginTop: 20 }}>Salvar</button>
      </form>
    </div>
  );
}

export default CadastroReservaPage;
