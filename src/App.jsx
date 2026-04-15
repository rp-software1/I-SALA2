import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MenuPage from './pages/MenuPage';
import MesasPage from './pages/MesasPage';
import CarritoPage from './pages/CarritoPage';
import NavBar from './components/NavBars';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Ruta pública */}
        <Route path="/login" element={<LoginPage />} />

        {/* Rutas principales */}
        <Route path="/" element={<MenuPage />} />
        <Route path="/mesas" element={<MesasPage />} />
        <Route path="/carrito" element={<CarritoPage />} />
      </Routes>
    </BrowserRouter>
  );
}