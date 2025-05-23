import { Routes, Route } from 'react-router-dom';

// Import your pages:
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
      <Route path="/reserva/:roomId" element={<ReservaPage />} />

      {/* exemplo de como adicionar mais paginas: */}
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
}

export default AppRoutes;