import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { platosMock } from "../data/platos.mock.js";

export default function CarritoPage() {

    const { mesaId } = useParams();

    const [platos, setPlatos] = useState([]);
    const [comandas, setComandas] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const cargarMenu = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setPlatos(platosMock);
            setLoading(false);
        };

        cargarMenu();
    }, []);

    if (loading) return <p className="p-4 animate-pulse">Cargando menú...</p>;

    const carrito = comandas[mesaId] || [];

    // ✅ Agregar plato
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

    // ✅ Quitar plato
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

    // ✅ Limpiar comanda
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

                <h1 className="text-3xl font-bold text-gray-800 mb-6 animate-fade-in">
                    🧾 Comanda - Mesa {mesaId}
                </h1>

                <div className="grid grid-cols-2 gap-6">

                    {/* MENÚ */}
                    <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col gap-3 animate-fade-in">
                        <h2 className="font-semibold text-gray-700 text-lg border-b pb-2">
                            Platos
                        </h2>

                        {platos.map(plato => (
                            <div
                                key={plato.id}
                                className="flex justify-between py-2 border-b last:border-0 
                transition-all duration-300 hover:bg-gray-50 hover:scale-[1.02]"
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
                                    className="bg-blue-600 text-white px-3 py-1 rounded 
                  transition-all duration-300 
                  hover:bg-blue-700 hover:scale-105 active:scale-95"
                                >
                                    + Agregar
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* CARRITO */}
                    <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col gap-3 animate-fade-in">
                        <h2 className="font-semibold text-gray-700 text-lg border-b pb-2">
                            Pedido
                        </h2>

                        {carrito.length === 0 && (
                            <p className="text-gray-400 text-center py-8 animate-pulse">
                                Sin platos
                            </p>
                        )}

                        {carrito.map(item => (
                            <div
                                key={item.id}
                                className="flex justify-between py-2 border-b last:border-0 
                transition-all duration-300 hover:bg-gray-50 hover:scale-[1.02]"
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
                                    className="text-red-500 text-sm 
                  transition-all duration-300 
                  hover:text-red-700 hover:scale-110"
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
                                className="w-full mt-3 bg-red-50 text-red-500 border border-red-200 
                rounded-lg py-2 
                transition-all duration-300 
                hover:bg-red-100 hover:scale-105 active:scale-95"
                            >
                                🗑️ Limpiar comanda
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}