import React from 'react';
import logo from '../../assets/logo.svg'
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img className='logo-img' src={logo} alt="Logo" />
          <div className="logo-text">
            <div>Hotel</div>
            <div>Brasileiro</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="nav-links">

    </nav>
        {/* Login Button */}
        <div>
          <button className="login-button" onClick={() => navigate('/login')}>Faça seu login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;