import { Routes, Route } from 'react-router-dom';

// Import your pages:
import GuestPage from '../components/GuestPage/homePage.js'; 
import LoginPage from '../components/LoginPage/loginPage.js';
import CadastroPage from '../components/CadastroPage/cadastro.js';
import ReservationPage from '../components/ReservationPage/reservationPage.js';

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