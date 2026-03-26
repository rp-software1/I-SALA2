import NavBar from "./components/NavBar.jsx";
import Home from "./pages/home.jsx";
import MesasPage from "./pages/MesasPage.jsx";

function App() {
  return (
    <div>
      <h1>Restaurante</h1>
      <NavBar restauranteCayda="Restaurante Cayda" />
      <Home />
      <MesasPage />

    </div>
  );
}

export default App;


