import logo from '../../../assets/logo.svg';
import './adminheader.css';
import { useNavigate } from 'react-router-dom';

const AdminHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img className="logo-img" src={logo} alt="Logo" />
          <div className="logo-text">
            <div>Hotel</div>
            <div>Brasileiro</div>
          </div>
        </div>
        <nav className="nav-links">
          <span className="nav-link" onClick={() => navigate('/')}>Início</span>
          <span className="nav-link" onClick={() => navigate('/admin/clientes')}>Clientes</span>
          <span className="nav-link" onClick={() => navigate('/admin/quartos')}>Quartos</span>
          <span className="nav-link" onClick={() => navigate('/admin/reservas')}>Reserva</span>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;