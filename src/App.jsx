import NavBar from "./components/NavBar.jsx";
import Home from "./pages/home.jsx";
import MesasPage from "./pages/MesasPage.jsx";

import ComandasPage from "./pages/ComandasPage.jsx";
import CarritoPage from "./pages/CarritoPage.jsx";


function App() {
  return (
    <div>
      <h1>Restaurante</h1>
      <NavBar restauranteCayda="Restaurante Cayda" />
      <Home />
      <MesasPage />

      <ComandasPage />
      <CarritoPage />
    </div>
  );
}

export default App;


