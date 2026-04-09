function PlatoCard({ plato }) {
    return (
        <li className={plato.disponible ? "plato" : "plato-agotado"}>
            <h3>{plato.nombre}</h3>
            <p>Categoría: {plato.categoria}</p>
            <p>Precio: S/ {plato.precio}</p>
            <p>Stock: {plato.stock}</p>
            <p>{plato.disponible ? "✅ Disponible" : "❌ Agotado"}</p>
        </li>
    );
}

export default PlatoCard;

