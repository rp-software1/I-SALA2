import NavBar from "./components/NavBar.jsx";
import Home from "./pages/home.jsx";
import MesasPage from "./pages/MesasPage.jsx";
import OrderForm from "./components/OrderForm.jsx";
import ComandasPage from "./pages/ComandasPage.jsx";

function App() {
  return (
    <div>
      <h1>Restaurante</h1>
      <NavBar restauranteCayda="Restaurante Cayda" />
      <Home />
      <MesasPage />
      <OrderForm />
      <ComandasPage />
    </div>
  );
}

export default App;


