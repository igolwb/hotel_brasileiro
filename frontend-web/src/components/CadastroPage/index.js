import React from "react";
import "./Cadastro.css";
import homeimg from "../../assets/Home.svg";
import logo from '../../assets/logo.svg'
import { useNavigate, Link } from 'react-router-dom';

function LoginPage() {
      const navigate = useNavigate();
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
          Só precisamos de duas coisas: seu email <br />
          e sua vontade de relaxar.
        </p>
      </div>
      <div className="right-panel">
        <form className="login-form">
          <h2>Cadastre-se</h2>
          <label>Email</label>
          <input type="email" placeholder="Digite seu email" />
          <label>Telefone</label>
          <input type="tel" placeholder="Digite seu telefone" />
          <label>Senha</label>
          <input type="password" placeholder="Digite sua senha" />
          <Link className="hint" to="/login" onClick={() => navigate('/login')}>
            Ja tem uma conta? Faça o login
          </Link>
          <button type="submit">Desbloquear estadia</button>
          <div className="back-home">
            <p>Volte para o início</p>
            <img className="home-icon" src={homeimg} alt="Home" onClick={() => navigate('/')} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;