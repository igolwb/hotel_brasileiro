import { Routes, Route } from 'react-router-dom';

import HomePage from '../components/HomePage/homePage.js';
import LoginPage from '../components/LoginPage/loginPage.js';
import CadastroPage from '../components/CadastroPage/cadastro.js';
import ReservaPage from '../components/ReservaPage/reservaPage.js';
import Clientes from '../components/AdminPages/ClientePage/clientePage.js';


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro" element={<CadastroPage />} />
      <Route path="/reserva/:roomId" element={<ReservaPage />} />
      <Route path="/admin/clientes" element={<Clientes />} />
    </Routes>
  );
}

export default AppRoutes;
