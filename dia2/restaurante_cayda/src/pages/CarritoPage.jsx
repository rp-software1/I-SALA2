import { useState } from "react";
import { platosMock } from "../data/platos.mock.js";
import { useEffect } from "react";

export default function CarritoPage() {

    const [platos, setPlatos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Hoy: mock. Día 6: Axios a /api/platos
        setPlatos(platosMock);
        setTimeout(() => {
            setPlatos(platosMock);
            setLoading(false);
        }, 10000);
    }, []);

    if (loading) return <p>Cargando menú...</p>;



    function quitarPlato(indexAlQuitar) {
        setCarrito(prev => prev.filter((_, index) => index !== indexAlQuitar));
    }

    function agregarPlato(plato) {
        setCarrito(prev => [...prev, plato]);
    }



    return (
        <div>

            <h2>::::::Armar Comanda::::::</h2>

            {platos.map(plato => (
                <div key={plato.id}>
                    <span>{plato.nombre} — S/ {plato.precio}</span>
                    <button onClick={() => agregarPlato(plato)}>Agregar</button>
                </div>
            ))}

            <h3>Comanda ({carrito.length} ítems)</h3>

            {carrito.map((item, index) => (
                <div key={index}>
                    <span>{item.nombre}</span>
                    <button onClick={() => quitarPlato(index)}>Quitar</button>
                </div>
            ))}

        </div>
    );
}





