import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// 👇 función para estilos dinámicos
const linkClass = ({ isActive }) =>
    isActive
        ? "text-yellow-400 font-bold border-b-2 border-yellow-400 pb-1"
        : "hover:text-yellow-300 transition-colors";

export default function NavBar({ restauranteCayda = "Restaurante" }) {
    return (
        <nav style={{ borderBottom: "2px solid gray", padding: "10px" }}>
            <h1>{restauranteCayda}</h1>

            <div>
                <NavLink to="/" end className={linkClass}>Carta</NavLink> |{" "}
                <NavLink to="/mesas" className={linkClass}>Mesas</NavLink> |{" "}
                <NavLink to="/carrito" className={linkClass}>Comandas</NavLink>
            </div>
        </nav>
    );
}

NavBar.propTypes = {
    restauranteCayda: PropTypes.string
};