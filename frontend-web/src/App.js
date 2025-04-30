import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AppRoutes from './Routes/index.js';
import Header from './components/Header';
import Footer from './components/Footer';

function AppContent() {
  const location = useLocation();
  const hideHeader = location.pathname === '/login' || location.pathname === '/cadastro';
  const hideFooter = location.pathname === '/login' || location.pathname === '/cadastro';
  

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