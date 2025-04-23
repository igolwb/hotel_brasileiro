import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your pages:
import GuestPage from '../components/GuestPage'; 
import LoginPage from '../components/LoginPage';
import CadastroPage from '../components/CadastroPage';
import ReservationPage from '../components/ReservationPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<GuestPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro" element={<CadastroPage />} />
      <Route path="/reserve/:roomId" element={<ReservationPage />} />

      {/* exemplo de como adicionar mais paginas: */}
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
}

export default AppRoutes;