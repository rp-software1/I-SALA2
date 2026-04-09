import PropTypes from "prop-types";

function NavBar({ restauranteCayda = "Restaurante" }) {
    return (
        <nav style={{ borderBottom: "2px solid gray", padding: "10px" }}>
            <h1>{restauranteCayda}</h1>
            <div>
                <span>Carta</span> | <span>Mesas</span> | <span>Comandas</span>
            </div>


        </nav>
    );
}

export default NavBar;