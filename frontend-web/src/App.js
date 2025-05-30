import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import AppRoutes from './Routes/index.js';
import Header from './components/Header/header.js';
import Footer from './components/Footer/footer.js';

function AppContent() {
  const location = useLocation();
  const hideHeader = location.pathname === '/login' || location.pathname === '/cadastro' || location.pathname === '/admin/clientes';
  const hideFooter = location.pathname === '/login' || location.pathname === '/cadastro' || location.pathname === '/admin/clientes' ;
  

  return (
    <>
      {!hideHeader && <Header />}
      <AppRoutes />
      {!hideFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;