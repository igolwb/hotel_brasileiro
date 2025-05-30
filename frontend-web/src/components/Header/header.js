import React from 'react'; 
import logo from '../../assets/logo.svg';
import './Header.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Header() {

  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para rolagem/navegação híbrida
  function handleScrollOrNavigate(id) {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      scrollToSection(id);
    } else {
      navigate('/');
      setTimeout(function() {
        scrollToSection(id);
      }, 100);
    }
  }

  // Função de rolagem suave
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Alternar visibilidade do menu mobile
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    React.createElement('header', { className: 'header' },
      React.createElement('div', { className: 'header-container' },
        // Logo
        React.createElement('div', { className: 'logo' },
          React.createElement('img', { className: 'logo-img', src: logo, alt: 'Logo' }),
          React.createElement('div', { className: 'logo-text' },
            React.createElement('div', null, 'Hotel'),
            React.createElement('div', null, 'Brasileiro')
          )
        ),

        // Menu Hamburguer
        React.createElement('div', { className: 'menu-toggle', onClick: toggleMenu },
          React.createElement('span', null),
          React.createElement('span', null),
          React.createElement('span', null)
        ),

        // Links de navegação
        React.createElement('nav', { className: `nav-links ${isMenuOpen ? 'active' : ''}` },
          React.createElement('button', { 
            className: 'hint1', 
            onClick: () => handleScrollOrNavigate('quartos') 
          }, 'Ir para Quartos'),
          
          React.createElement('button', { 
            className: 'hint1', 
            onClick: () => handleScrollOrNavigate('experiencias') 
          }, 'Ir para Experiências'),
          
          React.createElement('button', { 
            className: 'login-button', 
            onClick: () => {
              setIsMenuOpen(false);
              navigate('/login');
            }
          }, 'Faça seu login')
        )
      )
    )
  );
}

export default Header;