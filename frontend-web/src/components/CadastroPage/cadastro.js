import "./Cadastro.css";
import homeimg from "../../assets/Home.svg";
import logo from '../../assets/logo.svg'
import { useNavigate, Link } from 'react-router-dom';
import React, { useState } from 'react';
import useApiStore from '../../services/api.js';

function CadastroPage() {
  const navigate = useNavigate();
  const { createCliente, loading } = useApiStore();

  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    senha: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    // Validação simples
    if (!form.nome || !form.email || !form.telefone || !form.senha) {
      setError('Preencha todos os campos.');
      return;
    }
    try {
      await createCliente(form);
      setSuccess('Cadastro realizado com sucesso!');
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      setError('Erro ao cadastrar. Tente novamente.');
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <div className="logo-title-row">
          <div className="logo">
            <img className='logo-img-login' src={logo} alt="Logo" />
          </div>
          <h1>
            Hotel <br /> Brasileiro
          </h1>
        </div>
        <h2>Sua próxima jornada começa aqui</h2>
        <p>
          Só precisamos de duas coisas: <br />
          seu email e sua vontade de relaxar.
        </p>
      </div>
      <div className="right-panel">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Cadastre-se</h2>
          <label>Nome</label>
          <input
            type="text"
            name="nome"
            placeholder="Digite seu nome"
            value={form.nome}
            onChange={handleChange}
            autoComplete="off"
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            value={form.email}
            onChange={handleChange}
            autoComplete="off"
          />
          <label>Telefone</label>
          <input
            type="tel"
            name="telefone"
            placeholder="Digite seu telefone"
            value={form.telefone}
            onChange={handleChange}
            autoComplete="off"
          />
          <label>Senha</label>
          <input
            type="password"
            name="senha"
            placeholder="Digite sua senha"
            value={form.senha}
            onChange={handleChange}
            autoComplete="off"
          />
          {error && <div style={{ color: 'red', margin: '8px 0' }}>{error}</div>}
          {success && <div style={{ color: 'green', margin: '8px 0' }}>{success}</div>}
          <Link className="hint" to="/login" onClick={() => navigate('/login')}>
            Já tem uma conta? Faça o login
          </Link>
          <button type="submit" disabled={loading}>
            {loading ? 'Cadastrando...' : 'Desbloquear estadia'}
          </button>
          <div className="back-home">
            <p>Volte para o início</p>
            <img className="home-icon" src={homeimg} alt="Home" onClick={() => navigate('/')} />
          </div>
        </form>
      </div>
    </div>
  );
}
export default CadastroPage;