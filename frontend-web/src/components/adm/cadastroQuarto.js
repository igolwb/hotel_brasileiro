import React, { useState } from 'react';

function CadastroQuartoPage() {
  const [form, setForm] = useState({
    nome: '',
    descricao: '',
    preco: '',
    quantidade: '',
    foto: null,
  });
  const [preview, setPreview] = useState(null);

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === 'foto') {
      setForm({ ...form, foto: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert('Quarto cadastrado!');
    // Aqui você pode integrar com o backend futuramente
  }

  return (
    <div className="container">
      <h2>Cadastrar quarto</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <label>Nome:</label>
        <input type="text" name="nome" value={form.nome} onChange={handleChange} required />

        <label>Descrição:</label>
        <input type="text" name="descricao" value={form.descricao} onChange={handleChange} required />

        <label>Preço:</label>
        <input type="number" name="preco" value={form.preco} onChange={handleChange} required />

        <label>Quantidade:</label>
        <input type="number" name="quantidade" value={form.quantidade} onChange={handleChange} required />

        <label>Foto:</label>
        <input type="file" name="foto" accept="image/*" onChange={handleChange} />
        {preview && <img src={preview} alt="Preview" style={{ width: 100, marginTop: 10 }} />}

        <button type="submit" style={{ marginTop: 20 }}>Salvar</button>
      </form>
    </div>
  );
}

export default CadastroQuartoPage;
