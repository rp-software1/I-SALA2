import { useEffect, useState } from "react";
import { usePedido } from "../context/PedidoContext";
import { crearPedido } from "../services/api";

export default function CarritoPage() {
    const {
        pedido,
        cambiarTipo,
        agregarPlato,
        quitarPlato,
        limpiarPedido,
    } = usePedido();

    const [enviando, setEnviando] = useState(false);
    const [error, setError] = useState(null);
    const [pedidoCreado, setPedidoCreado] = useState(null);

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

    // 🔥 ENVIAR COMANDA
    const handleEnviarComanda = async () => {
        if (pedido.items.length === 0) return;

        setEnviando(true);
        setError(null);

        try {
            const nuevoPedido = await crearPedido({
                mesaId: pedido.mesaId,
                tipo: pedido.tipo,
                items: pedido.items,
            });

            setPedidoCreado(nuevoPedido);
            limpiarPedido();

        } catch (err) {
            setError("Error al enviar pedido");
        } finally {
            setEnviando(false);
        }
    };

    // 🔥 CONFIRMACIÓN
    if (pedidoCreado) {
        return (
            <div className="p-6 text-center">
                <div className="text-6xl mb-4">✅</div>
                <h2 className="text-2xl font-bold text-green-600">
                    Comanda enviada
                </h2>
                <p className="mt-2">
                    Pedido #{pedidoCreado._id}
                </p>
                <p>Estado: {pedidoCreado.estado}</p>
            </div>
        );
    }

    return (
        <div className="p-6">

            {/* TIPO DE PEDIDO */}
            <div className="flex gap-3 mb-4">
                <button
                    onClick={() => cambiarTipo("mesa")}
                    className={`px-4 py-2 rounded text-white ${pedido.tipo === "mesa" ? "bg-blue-500" : "bg-gray-400"
                        }`}
                >
                    Mesa
                </button>

                <button
                    onClick={() => cambiarTipo("para_llevar")}
                    className={`px-4 py-2 rounded text-white ${pedido.tipo === "para_llevar" ? "bg-green-500" : "bg-gray-400"
                        }`}
                >
                    Para llevar
                </button>
            </div>

            {/* INFO */}
            <p className="text-sm text-gray-600 mb-4">
                Tipo: {pedido.tipo} | Mesa: {pedido.mesaId || "null"}
            </p>

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

                    {error && <p className="text-red-500 mt-2">{error}</p>}

                    <button
                        onClick={handleEnviarComanda}
                        disabled={enviando || pedido.items.length === 0}
                        className="mt-4 w-full bg-yellow-500 text-white py-2 rounded"
                    >
                        {enviando ? "Enviando..." : "Enviar comanda"}
                    </button>

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