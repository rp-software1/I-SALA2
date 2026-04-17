import { platosMock } from "../data/platos.mock.js";
import { mesasMock } from "../data/mesas.mock.js";
import { usePedido } from "../context/PedidoContext";

export default function CarritoPage() {

    const {
        pedido,
        asignarMesa,
        agregarPlato,
        quitarPlato,
        limpiarPedido
    } = usePedido();

    const carrito = pedido.items;

    return (
        <div className="p-6 max-w-5xl mx-auto">

            {/* 🔵 SELECCIÓN DE MESA */}
            <div className="mb-4">
                <h2 className="font-semibold mb-2">Mesas</h2>

                <div className="flex gap-2 flex-wrap">
                    {mesasMock.map(mesa => (
                        <button
                            key={mesa.id}
                            onClick={() => asignarMesa(mesa.id)}
                            className={`px-3 py-1 rounded border ${pedido.mesaId === mesa.id
                                    ? "bg-blue-600 text-white"
                                    : "bg-white"
                                }`}
                        >
                            Mesa {mesa.id}
                        </button>
                    ))}
                </div>
            </div>

            <h1 className="text-2xl font-bold mb-4">
                Comanda {pedido.mesaId ? `- Mesa ${pedido.mesaId}` : ""}
            </h1>

            <div className="grid grid-cols-2 gap-6">

                {/* 🟦 PLATOS */}
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="font-semibold mb-3">Platos</h2>

                    {platosMock.map(plato => (
                        <div key={plato.id} className="flex justify-between border-b py-2">
                            <div>
                                <p>{plato.nombre}</p>
                                <p className="text-green-600">S/ {plato.precio}</p>
                            </div>

                            <button
                                onClick={() => {
                                    if (!pedido.mesaId) {
                                        alert("Selecciona una mesa");
                                        return;
                                    }
                                    agregarPlato(plato);
                                }}
                                className="bg-blue-600 text-white px-2 rounded"
                            >
                                +
                            </button>
                        </div>
                    ))}
                </div>

                {/* 🟩 PEDIDO */}
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="font-semibold mb-3">Pedido</h2>

                    {!pedido.mesaId ? (
                        <p className="text-gray-400">Selecciona una mesa</p>
                    ) : carrito.length === 0 ? (
                        <p className="text-gray-400">No hay items</p>
                    ) : (
                        <ul>
                            {carrito.map(item => (
                                <li key={item.platoId} className="flex justify-between py-2 border-b">
                                    <span>
                                        {item.nombre} x{item.cantidad}
                                    </span>

                                    <div className="flex gap-2 items-center">
                                        <span>
                                            S/ {(item.precioUnitario * item.cantidad).toFixed(2)}
                                        </span>

                                        <button
                                            onClick={() => quitarPlato(item.platoId)}
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
                        Total: S/ {pedido.total.toFixed(2)}
                    </p>

                    {pedido.mesaId && (
                        <button
                            onClick={limpiarPedido}
                            className="w-full mt-3 bg-red-100 text-red-500 py-2 rounded"
                        >
                            Limpiar pedido
                        </button>
                    )}
                </div>

            </div>
        </div>
    );
}