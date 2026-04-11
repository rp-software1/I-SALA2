import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/loginpage';
import MenuPage from './pages/MenuPage';
import CarritoPage from './pages/CarritoPage';
import ProtectedRoute from './components/ProtectedRoute';
import NavBar from './components/NavBars';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/menu' element={
          <MenuPage />
        } />
        <Route path='/carrito' element={
          <CarritoPage />
        } />
        <Route path='/' element={<Navigate to='/menu' replace />} />
      </Routes>
    </BrowserRouter>
  );
}

