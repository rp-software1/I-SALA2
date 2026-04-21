import { useEffect } from "react";
import { usePedido } from "../context/PedidoContext";

export default function CarritoPage() {
    const {
        pedido,
        cambiarTipo,
        asignarMesa,
        agregarPlato,
        quitarPlato,
        limpiarPedido,
    } = usePedido();

    // 🔥 PRUEBA FINAL (OBLIGATORIA)
    useEffect(() => {
        console.log("PEDIDO ACTUAL:", pedido);
    }, [pedido]);

    const platos = [
        { id: 1, nombre: "estofado", precio: 10 },
        { id: 2, nombre: "Aji de gallina", precio: 12 },
        { id: 3, nombre: "lomo saltado", precio: 15 },
        { id: 4, nombre: "Arroz con pollo", precio: 20 },
        { id: 5, nombre: "inka-kola", precio: 3 },
    ];

    return (
        <div className="p-6">

            {/* 🔥 TIPO DE PEDIDO */}
            <div className="flex gap-3 mb-4">
                <button
                    onClick={() => cambiarTipo("mesa")}
                    className={`px-4 py-2 rounded text-white ${pedido.tipo === "mesa" ? "bg-blue-500" : "bg-gray-400"
                        }`}
                >
                    🪑 Mesa
                </button>

                <button
                    onClick={() => cambiarTipo("para_llevar")}
                    className={`px-4 py-2 rounded text-white ${pedido.tipo === "para_llevar" ? "bg-green-500" : "bg-gray-400"
                        }`}
                >
                    🥡 Para llevar
                </button>
            </div>

            {/* 🔥 DEBUG VISUAL */}
            <p className="text-sm text-gray-600 mb-4">
                Tipo: {pedido.tipo} | Mesa: {pedido.mesaId || "null"}
            </p>

            {/* 🔥 MESAS SOLO SI ES MESA */}
            {pedido.tipo === "mesa" && (
                <div className="mb-6">
                    <h3 className="font-bold mb-2">Mesas</h3>

                    <div className="flex gap-2 flex-wrap">
                        {[1, 2, 3, 4, 5, 6].map((mesa) => (
                            <button
                                key={mesa}
                                onClick={() => asignarMesa(mesa)}
                                className={`px-3 py-1 rounded border ${pedido.mesaId === mesa
                                        ? "bg-blue-500 text-white"
                                        : "bg-white"
                                    }`}
                            >
                                Mesa {mesa}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <h2 className="text-xl font-bold mb-4">
                Comanda -{" "}
                {pedido.tipo === "mesa"
                    ? `Mesa ${pedido.mesaId || ""}`
                    : "Para llevar"}
            </h2>

            <div className="grid grid-cols-2 gap-6">

                {/* PLATOS */}
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="font-semibold mb-3">Platos</h3>

                    {platos.map((plato) => (
                        <div
                            key={plato.id}
                            className="flex justify-between items-center mb-2 border-b pb-2"
                        >
                            <div>
                                <p className="font-medium">{plato.nombre}</p>
                                <p className="text-green-600">S/ {plato.precio}</p>
                            </div>

                            <button
                                onClick={() => agregarPlato(plato)}
                                className="bg-blue-500 text-white px-3 py-1 rounded"
                            >
                                +
                            </button>
                        </div>
                    ))}
                </div>

                {/* PEDIDO */}
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="font-semibold mb-3">Pedido</h3>

                    {pedido.items.length === 0 ? (
                        <p className="text-gray-500">No hay items</p>
                    ) : (
                        pedido.items.map((item) => (
                            <div
                                key={item.platoId}
                                className="flex justify-between items-center mb-2"
                            >
                                <span>
                                    {item.nombre} x{item.cantidad}
                                </span>

                                <div className="flex items-center gap-2">
                                    <span className="font-medium">
                                        S/ {item.precioUnitario * item.cantidad}
                                    </span>

                                    <button
                                        onClick={() => quitarPlato(item.platoId)}
                                        className="text-red-500 font-bold"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>
                        ))
                    )}

                    <hr className="my-3" />

                    <p className="font-bold text-right">
                        Total: S/ {pedido.total}
                    </p>

                    {pedido.items.length > 0 && (
                        <button
                            onClick={limpiarPedido}
                            className="mt-3 w-full bg-red-200 text-red-700 py-2 rounded"
                        >
                            Limpiar pedido
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}