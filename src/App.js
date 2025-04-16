import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRoutes from './Routes/index.js';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer/>
    </Router>
  );
}

export default App;