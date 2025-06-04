import "./Login.css";
import homeimg from "../../assets/Home.svg";
import logo from '../../assets/logo.svg';
import { useNavigate, Link } from 'react-router-dom';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import axios from 'axios';
import { useState } from 'react';

function LoginPage() {
  const navigate = useNavigate();
  const signIn = useSignIn();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3000/api/login', { email, senha });
  
      if (response.data.success) {
        const ok = signIn({
          auth: {
            token: response.data.token,
            type: 'Bearer'
          },
          userState: { email }
        });
  
        if (ok) {
          navigate('/'); // Redireciona para a página inicial após o login
        } else {
          alert('Erro ao salvar autenticação. Tente novamente.');
        }
      } else {
        alert('Credenciais inválidas.');
      }
    } catch (error) {
      console.error('Erro ao realizar login:', error);
      alert('Erro ao realizar login. Tente novamente.');
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
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Faça seu login</h2>
          <label>Email</label>
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
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