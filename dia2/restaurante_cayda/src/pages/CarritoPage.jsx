import { useState, useEffect } from "react";
import { platosMock } from "../data/platos.mock.js";

export default function CarritoPage() {

    const [platos, setPlatos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const cargarMenu = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1500));
                setPlatos(platosMock);
            } catch (error) {
                console.error("Error al cargar el menú:", error);
            } finally {
                setLoading(false);
            }
        };

        cargarMenu();
    }, []);

    if (loading) return <p>Cargando menú...</p>;



    function agregarPlato(plato) {
        setCarrito(prev => {

            const existe = prev.find(item => item.id === plato.id);

            if (existe) {
                return prev.map(item =>
                    item.id === plato.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            }

            return [...prev, { ...plato, cantidad: 1 }];
        });
    }



    function quitarPlato(id) {
        setCarrito(prev =>
            prev
                .map(item =>
                    item.id === id
                        ? { ...item, cantidad: item.cantidad - 1 }
                        : item
                )
                .filter(item => item.cantidad > 0)
        );
    }



    const total = carrito.reduce(
        (sum, item) => sum + item.precio * item.cantidad,
        0
    );



    return (
        <div>

            <h2>::::::Armar Comanda::::::</h2>

            {platos.map(plato => (
                <div key={plato.id}>
                    <span>{plato.nombre} — S/ {plato.precio}</span>
                    <button onClick={() => agregarPlato(plato)}>
                        Agregar
                    </button>
                </div>
            ))}



            <h3>Comanda ({carrito.length} ítems)</h3>

            {carrito.map(item => (
                <div key={item.id}>
                    <span>{item.nombre} (x{item.cantidad})</span>
                    <button onClick={() => quitarPlato(item.id)}>
                        Quitar
                    </button>
                </div>
            ))}



            <p>Total: S/ {total}</p>

            <button onClick={() => setCarrito([])}>
                Limpiar comanda
            </button>

        </div>
    );
}