import { Routes, Route } from 'react-router-dom';
//<Route path="/admin/quartos/:quartoId" element={<Quartos />} />
import HomePage from '../components/HomePage/homePage.js';
import LoginPage from '../components/LoginPage/loginPage.js';
import CadastroPage from '../components/CadastroPage/cadastro.js';
import ReservaPage from '../components/ReservaPage/reservaPage.js';
import Clientes from '../components/AdminPages/ClientePage/clientePage.js';
import Quartos from '../components/AdminPages/QuartoPage/quartoPage.js';
import EditarQuarto from '../components/AdminPages/EditarQuarto/editQuarto.js';
import AddQuarto from '../components/AdminPages/EditarQuarto/addQuarto.js';


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro" element={<CadastroPage />} />
      <Route path="/reserva/:roomId" element={<ReservaPage />} />
      <Route path="/admin/clientes" element={<Clientes />} />
      <Route path="/admin/quartos" element={<Quartos />} />
      <Route path="/admin/quartos/:id" element={<EditarQuarto />} />
      <Route path="/admin/quartos/addQuarto" element={<AddQuarto />} />
    </Routes>
  );
}

export default AppRoutes;
