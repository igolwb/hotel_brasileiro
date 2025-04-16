import React from 'react';
import logo from '../../assets/logo.svg'
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <button className="hint" onClick={() => scrollToSection('quartos')}>Ir para Quartos</button>
          <button className="hint" onClick={() => scrollToSection('experiencias')}>Ir para Experiências</button>
        {/* Login Button */}
          <button className="login-button" onClick={() => navigate('/login')}>Faça seu login</button>
          </nav>
      </div>
    </header>
  );
};

export default Header;