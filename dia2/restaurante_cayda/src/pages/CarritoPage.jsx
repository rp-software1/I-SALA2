import { useState } from "react";
import { platosMock } from "../data/platos.mock.js";

export default function CarritoPage() {

    const [carrito, setCarrito] = useState([]);

    function quitarPlato(id) {
        setCarrito(prev => prev.filter(item => item._id !== id));
    }

    function agregarPlato(plato) {
        setCarrito(prev => [...prev, plato]);
    }

    return (
        <div>

            <h2>::::::Armar Comanda::::::</h2>

            {platosMock.map(plato => (
                <div key={plato._id}>
                    <span>{plato.nombre} — S/ {plato.precio}</span>
                    <button onClick={() => agregarPlato(plato)}>Agregar</button>
                </div>
            ))}

            <h3>Comanda ({carrito.length} ítems)</h3>

            {carrito.map((item, index) => (
                <div key={index}>
                    <span>{item.nombre}</span>
                    <button onClick={() => quitarPlato(item._id)}>Quitar</button>
                </div>
            ))}

        </div>
    );
}





