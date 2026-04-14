import { useState, useEffect } from "react";
import { platosMock } from "../data/platos.mock.js";
import { mesasMock } from "../data/mesas.mock.js";

export default function CarritoPage() {

    const [mesaSeleccionada, setMesaSeleccionada] = useState(null);

    const [platos, setPlatos] = useState([]);
    const [comandas, setComandas] = useState({});
    const [loading, setLoading] = useState(true);

    // ✅ NUEVO: estado error
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarMenu = async () => {
            try {
                setLoading(true);

                await new Promise(resolve => setTimeout(resolve, 1000));


                //throw new Error("Error simulado del servidor");

                const data = platosMock;
                setPlatos(data);

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        cargarMenu();
    }, []);

    // ✅ LOADING
    if (loading) return <p className="p-4 animate-pulse">Cargando menú...</p>;

    // ✅ ERROR
    if (error) {
        return (
            <p className="p-4 text-red-500 font-semibold">
                Error: {error}
            </p>
        );
    }

    // bloquear si no hay mesa seleccionada
    if (!mesaSeleccionada) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <h2 className="text-xl font-semibold text-blue-700">
                    Selecciona una mesa
                </h2>

                <div className="flex gap-3 flex-wrap justify-center">
                    {mesasMock.map(mesa => (
                        <button
                            key={mesa.id}
                            onClick={() => setMesaSeleccionada(mesa.id)}
                            className="px-4 py-2 rounded-lg border bg-white hover:bg-blue-100 transition"
                        >
                            Mesa {mesa.id}
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    const mesaId = mesaSeleccionada;
    const carrito = comandas[mesaId] || [];

    function agregarPlato(plato) {
        setComandas(prev => {
            const actual = prev[mesaId] || [];
            const existe = actual.find(item => item.id === plato.id);

            let nueva;

            if (existe) {
                nueva = actual.map(item =>
                    item.id === plato.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            } else {
                nueva = [...actual, { ...plato, cantidad: 1 }];
            }

            return {
                ...prev,
                [mesaId]: nueva
            };
        });
    }

    function quitarPlato(id) {
        setComandas(prev => {
            const actual = prev[mesaId] || [];

            const nueva = actual
                .map(item =>
                    item.id === id
                        ? { ...item, cantidad: item.cantidad - 1 }
                        : item
                )
                .filter(item => item.cantidad > 0);

            return {
                ...prev,
                [mesaId]: nueva
            };
        });
    }

    function limpiarComanda() {
        setComandas(prev => ({
            ...prev,
            [mesaId]: []
        }));
    }

    const total = carrito.reduce(
        (sum, item) => sum + item.precio * item.cantidad,
        0
    );

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-5xl mx-auto">

                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">
                        Mesas
                    </h2>

                    <div className="flex gap-2 flex-wrap">
                        {mesasMock.map(mesa => (
                            <button
                                key={mesa.id}
                                onClick={() => setMesaSeleccionada(mesa.id)}
                                className={`px-3 py-1 rounded-lg border transition
                                ${mesaSeleccionada === mesa.id
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white hover:bg-gray-100'
                                    }`}
                            >
                                Mesa {mesa.id}
                            </button>
                        ))}
                    </div>
                </div>

                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Comanda - Mesa {mesaId}
                </h1>

                <div className="grid grid-cols-2 gap-6">

                    <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col gap-3">
                        <h2 className="font-semibold text-gray-700 text-lg border-b pb-2">
                            Platos
                        </h2>

                        {platos.map(plato => (
                            <div
                                key={plato.id}
                                className="flex justify-between py-2 border-b last:border-0 hover:bg-gray-50 transition"
                            >
                                <div>
                                    <p className="font-medium text-gray-800">
                                        {plato.nombre}
                                    </p>
                                    <p className="text-green-600 text-sm">
                                        S/ {plato.precio}
                                    </p>
                                </div>

                                <button
                                    onClick={() => agregarPlato(plato)}
                                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                                >
                                    + Agregar
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col gap-3">
                        <h2 className="font-semibold text-gray-700 text-lg border-b pb-2">
                            Pedido
                        </h2>

                        {carrito.length === 0 && (
                            <p className="text-gray-400 text-center py-8">
                                Sin platos
                            </p>
                        )}

                        {carrito.map(item => (
                            <div
                                key={item.id}
                                className="flex justify-between py-2 border-b last:border-0"
                            >
                                <div>
                                    <p className="font-medium text-gray-800">
                                        {item.nombre}
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        x{item.cantidad} — S/ {item.precio * item.cantidad}
                                    </p>
                                </div>

                                <button
                                    onClick={() => quitarPlato(item.id)}
                                    className="text-red-500 text-sm hover:text-red-700"
                                >
                                    Quitar
                                </button>
                            </div>
                        ))}

                        <div className="mt-auto pt-4 border-t">
                            <p className="text-xl font-bold text-gray-800">
                                Total: S/ {total}
                            </p>

                            <button
                                onClick={limpiarComanda}
                                className="w-full mt-3 bg-red-50 text-red-500 border border-red-200 rounded-lg py-2 hover:bg-red-100"
                            >
                                Limpiar comanda
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}