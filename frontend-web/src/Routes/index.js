import { Routes, Route } from 'react-router-dom';

import HomePage from '../components/HomePage/homePage.js';
import LoginPage from '../components/LoginPage/loginPage.js';
import CadastroPage from '../components/CadastroPage/cadastro.js';
import ReservaPage from '../components/ReservaPage/reservaPage.js';
import ClientePage from '../components/adm/clientesPage.js';
import ReservasPage from '../components/adm/reservasPage.js';
import QuartosPage from '../components/adm/quartosPage.js';
import CadastroQuartoPage from '../components/adm/cadastroQuarto.js';
import CadastroReservaPage from '../components/adm/cadastroReservaPage.js';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro" element={<CadastroPage />} />
      <Route path="/reserve/:roomId" element={<ReservaPage />} />

      {/* Rotas de adm */}
      <Route path="/adm/clientes" element={<ClientePage />} />
      <Route path="/adm/reservas" element={<ReservasPage />} />
      <Route path="/adm/quartos" element={<QuartosPage />} />

      <Route path="/adm/cadastrar-quarto" element={<CadastroQuartoPage />} />
      <Route path="/adm/cadastrar-reserva" element={<CadastroReservaPage />} />
    </Routes>
  );
}

export default AppRoutes;
