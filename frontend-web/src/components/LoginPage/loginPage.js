import "./Login.css";
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
          Só precisamos de duas coisas: <br />
         seu email e sua vontade de relaxar.
        </p>
      </div>
      <div className="right-panel">
        <form className="login-form">
          <h2>Faça seu login</h2>
          <label>Nome</label>
          <input type="nome" placeholder="Digite seu nome" />
          <label>Email</label>
          <input type="email" placeholder="Digite seu email" />
          <label>Senha</label>
          <input type="password" placeholder="Digite sua senha" />
          <Link className="hint" to="/cadastro" onClick={() => navigate('/cadastro')}>
            Crie sua conta e desvende o hotel
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