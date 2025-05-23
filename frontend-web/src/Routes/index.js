import { Routes, Route } from 'react-router-dom';

// Páginas já existentes
import GuestPage from '../components/GuestPage/homePage.js';
import LoginPage from '../components/LoginPage/loginPage.js';
import CadastroPage from '../components/CadastroPage/cadastro.js';
import ReservationPage from '../components/ReservationPage/reservationPage.js';

// Páginas que você criou
import ClientePage from '../components/ClientePage/clientePage.js';
import ReservasPage from '../components/ReservasPage/reservasPage.js';
import QuartosPage from '../components/QuartosPage/quartosPage.js';

// Novas páginas de cadastro
import CadastroQuartoPage from '../components/adm/cadastroQuartoPage.js';
import CadastroReservaPage from '../components/adm/cadastroReservaPage.js';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<GuestPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro" element={<CadastroPage />} />
      <Route path="/reserve/:roomId" element={<ReservationPage />} />

      {/* Suas páginas */}
      <Route path="/clientes" element={<ClientePage />} />
      <Route path="/reservas" element={<ReservasPage />} />
      <Route path="/quartos" element={<QuartosPage />} />

      {/* Novas rotas de cadastro */}
      <Route path="/adm/cadastrar-quarto" element={<CadastroQuartoPage />} />
      <Route path="/adm/cadastrar-reserva" element={<CadastroReservaPage />} />
    </Routes>
  );
}

export default AppRoutes;
