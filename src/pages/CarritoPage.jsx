import { useState, useEffect } from "react";
import { platosMock } from "../data/platos.mock.js";
import { mesasMock } from "../data/mesas.mock.js";
import { usePedido } from "../context/PedidoContext";

export default function CarritoPage() {

    const {
        comandas,
        mesaSeleccionada,
        setMesaSeleccionada,
        agregarPlato,
        quitarPlato,
        limpiarComanda
    } = usePedido();

    const [platos, setPlatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarMenu = async () => {
            try {
                setLoading(true);
                await new Promise(resolve => setTimeout(resolve, 1000));
                setPlatos(platosMock);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        cargarMenu();
    }, []);

    if (loading) return <p className="p-4 animate-pulse">Cargando menú...</p>;

    if (error) {
        return <p className="p-4 text-red-500">Error: {error}</p>;
    }

    // 🔒 Selección de mesa
    if (!mesaSeleccionada) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <h2 className="text-xl font-semibold text-blue-700">
                    Selecciona una mesa
                </h2>

                <div className="flex gap-3 flex-wrap">
                    {mesasMock.map(mesa => (
                        <button
                            key={mesa.id}
                            onClick={() => setMesaSeleccionada(mesa.id)}
                            className="px-4 py-2 border rounded-lg bg-white hover:bg-blue-100"
                        >
                            Mesa {mesa.id}
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    const carrito = comandas[mesaSeleccionada] || [];

    const total = carrito.reduce(
        (sum, item) => sum + item.precio * item.cantidad,
        0
    );

    return (
        <div className="p-6 max-w-5xl mx-auto">

            <h1 className="text-2xl font-bold mb-4">
                Comanda activa - Mesa {mesaSeleccionada}
            </h1>

            {/* 🟦 PLATOS */}
            <div className="grid grid-cols-2 gap-6">

                <div className="bg-white p-4 rounded-xl shadow">
                    <h2 className="font-semibold mb-3">Platos</h2>

                    {platos.map(plato => (
                        <div key={plato.id} className="flex justify-between border-b py-2">
                            <div>
                                <p>{plato.nombre}</p>
                                <p className="text-green-600">S/ {plato.precio}</p>
                            </div>

                            <button
                                onClick={() => agregarPlato(mesaSeleccionada, plato)}
                                className="bg-blue-600 text-white px-2 rounded"
                            >
                                +
                            </button>
                        </div>
                    ))}
                </div>

                {/* 🟩 PEDIDO */}
                <div className="bg-white p-4 rounded-xl shadow">
                    <h2 className="font-semibold mb-3">Pedido</h2>

                    {carrito.length === 0 ? (
                        <p className="text-gray-400">No hay items en la comanda</p>
                    ) : (
                        <ul>
                            {carrito.map(item => (
                                <li key={item.id} className="flex justify-between py-2 border-b">
                                    <span>
                                        {item.nombre} x{item.cantidad}
                                    </span>

                                    <div className="flex gap-2 items-center">
                                        <span>
                                            S/ {(item.precio * item.cantidad).toFixed(2)}
                                        </span>

                                        <button
                                            onClick={() => quitarPlato(mesaSeleccionada, item.id)}
                                            className="text-red-500"
                                        >
                                            ❌
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}

                    <p className="font-bold text-right mt-4">
                        Total: S/ {total.toFixed(2)}
                    </p>

                    <button
                        onClick={() => limpiarComanda(mesaSeleccionada)}
                        className="w-full mt-3 bg-red-100 text-red-500 py-2 rounded"
                    >
                        Limpiar comanda
                    </button>
                </div>

            </div>
        </div>
    );
}
