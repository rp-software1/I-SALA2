import propTypes from "prop-types"
function MesaCard({ numero, capacidad, estado, comensales }) {
    const color =
        estado === "libre"
            ? "green"
            : estado === "ocupada"
                ? "red"
                : "orange";

    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", backgroundColor: color }}>
            <h3>Mesa {numero}</h3>
            <p>Capacidad: {capacidad}</p>
            <p>Comensales: {comensales}</p>
            <p>Estado: {estado}</p>
        </div>
    );
}

MesaCard.propTypes = {
    numero: propTypes.number.isRequired,
    capacidad: propTypes.number.isRequired,
    estado: propTypes.string.isRequired,
    comensales: propTypes.number.isRequired
};

export default MesaCard;