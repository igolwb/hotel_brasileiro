import React from 'react';
import logo from '../../assets/logo.svg';
import './Header.css';
// Import useLocation along with useNavigate
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  // Get the current location object
  const location = useLocation();

  const handleScrollOrNavigate = (id) => {
    // Check if we are already on the homepage (assuming homepage path is '/')
    if (location.pathname === '/') {
      // If on homepage, just scroll
      scrollToSection(id);
    } else {
      // If not on homepage, navigate first, then scroll after a short delay
      navigate('/');
      // Use setTimeout to allow navigation and rendering to occur before scrolling
      setTimeout(() => {
        scrollToSection(id);
      }, 100); // Adjust delay (in ms) if needed, 100ms is often enough
    }
  };

  // Keep the original scroll logic separate for clarity
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    console.log(`Attempting to scroll to section: ${id}`, section); // Debug log
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' }); // 'block: start' can sometimes help ensure it scrolls to the top of the section
    } else {
      console.warn(`Section with ID "${id}" not found.`); // Warning if element doesn't exist
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
          {/* Use the new handler function */}
          <button className="hint" onClick={() => handleScrollOrNavigate('quartos')}>Ir para Quartos</button>
          <button className="hint" onClick={() => handleScrollOrNavigate('experiencias')}>Ir para Experiências</button>
          {/* Login Button */}
          <button className="login-button" onClick={() => navigate('/login')}>Faça seu login</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;