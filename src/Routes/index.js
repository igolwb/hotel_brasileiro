import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your pages:
import GuestPage from '../components/GuestPage'; 

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<GuestPage />} />

      {/* exemplo de como adicionar mais paginas: */}
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
}

export default AppRoutes;