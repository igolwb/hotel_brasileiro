import { Routes, Route } from 'react-router-dom';

import HomePage from '../components/HomePage/homePage.js';
import LoginPage from '../components/LoginPage/loginPage.js';
import CadastroPage from '../components/CadastroPage/cadastro.js';
import ReservaPage from '../components/ReservaPage/reservaPage.js';


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro" element={<CadastroPage />} />
      <Route path="/reserve/:roomId" element={<ReservaPage />} />

    </Routes>
  );
}

export default AppRoutes;
