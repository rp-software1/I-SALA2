import { useEffect, useState } from "react";
import { usePedido } from "../context/PedidoContext";
import { crearPedido, getPlatos } from "../services/api";
import type { Pedido, Plato } from "../types";

export default function CarritoPage() {
    const {
        pedido,
        cambiarTipo,
        agregarPlato,
        quitarPlato,
        limpiarPedido,
    } = usePedido();

    const [platos, setPlatos] = useState<Plato[]>([]);
    const [enviando, setEnviando] = useState(false);
    const [errorEnvio, setErrorEnvio] = useState<string | null>(null);
    const [confirmacion, setConfirmacion] = useState<string | null>(null);

    useEffect(() => {
        getPlatos().then(setPlatos);
    }, []);

    const handleEnviarComanda = async () => {
        if (pedido.tipo === "mesa" && !pedido.mesaId) {
            setErrorEnvio("Selecciona una mesa");
            return;
        }

        if (pedido.items.length === 0) {
            setErrorEnvio("Agrega al menos un plato");
            return;
        }

        setEnviando(true);
        setErrorEnvio(null);

        try {
            const body: Omit<Pedido, "id" | "estado"> = {
                mesaId: pedido.mesaId,
                tipo: pedido.tipo,
                items: pedido.items,
                total: pedido.total,
            };

            const nuevoPedido = await crearPedido(body);
            setConfirmacion(nuevoPedido.id);
            limpiarPedido();
        } catch (err: any) {
            setErrorEnvio(err.message || "Error");
        } finally {
            setEnviando(false);
        }
    };

    if (confirmacion) {
        return (
            <div className="flex flex-col items-center justify-center h-[70vh]">
                <div className="text-7xl">✅</div>
                <h2 className="text-3xl font-bold text-green-600 mt-4">
                    Comanda enviada
                </h2>
                <p className="text-gray-500 mt-2">Pedido #{confirmacion}</p>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-5xl mx-auto">

            {/* HEADER */}
            <h1 className="text-3xl font-bold mb-6">🍽️ Nueva Comanda</h1>

            {/* TIPO */}
            <div className="flex gap-3 mb-6">
                <button
                    onClick={() => cambiarTipo("mesa")}
                    className={`px-5 py-2 rounded-xl font-semibold transition ${pedido.tipo === "mesa"
                            ? "bg-blue-600 text-white shadow"
                            : "bg-gray-200 hover:bg-gray-300"
                        }`}
                >
                    Mesa
                </button>

                <button
                    onClick={() => cambiarTipo("para_llevar")}
                    className={`px-5 py-2 rounded-xl font-semibold transition ${pedido.tipo === "para_llevar"
                            ? "bg-green-600 text-white shadow"
                            : "bg-gray-200 hover:bg-gray-300"
                        }`}
                >
                    Para llevar
                </button>
            </div>

            <p className="text-sm text-gray-500 mb-4">
                Tipo: <b>{pedido.tipo}</b> | Mesa:{" "}
                <b>{pedido.mesaId || "—"}</b>
            </p>

            {/* GRID */}
            <div className="grid md:grid-cols-2 gap-6">

                {/* PLATOS */}
                <div className="bg-white rounded-2xl shadow p-5">
                    <h3 className="font-bold text-lg mb-4">Platos</h3>

                    {platos.map((plato) => (
                        <div
                            key={plato.id}
                            className="flex justify-between items-center mb-3 border-b pb-2"
                        >
                            <div>
                                <p className="font-medium">{plato.nombre}</p>
                                <p className="text-sm text-gray-500">
                                    S/ {plato.precio}
                                </p>
                            </div>

                            <button
                                onClick={() => agregarPlato(plato)}
                                disabled={!plato.disponible}
                                className="px-3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300"
                            >
                                +
                            </button>
                        </div>
                    ))}
                </div>

                {/* PEDIDO */}
                <div className="bg-white rounded-2xl shadow p-5 flex flex-col">
                    <h3 className="font-bold text-lg mb-4">Pedido</h3>

                    <div className="flex-1">
                        {pedido.items.length === 0 && (
                            <p className="text-gray-400 text-sm">
                                No hay platos aún
                            </p>
                        )}

                        {pedido.items.map(item => (
                            <div
                                key={item.platoId}
                                className="flex justify-between items-center mb-2"
                            >
                                <span>
                                    {item.nombre} x{item.cantidad}
                                </span>

                                <button
                                    onClick={() => quitarPlato(item.platoId)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 border-t pt-3">
                        <p className="text-lg font-bold">
                            Total: S/ {pedido.total}
                        </p>

                        {errorEnvio && (
                            <p className="text-red-500 text-sm mt-2">
                                {errorEnvio}
                            </p>
                        )}

                        <button
                            onClick={handleEnviarComanda}
                            disabled={enviando}
                            className="w-full mt-3 py-2 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 disabled:bg-gray-400"
                        >
                            {enviando ? "Enviando..." : "Enviar comanda"}
                        </button>

                        {/* BOTÓN LIMPIAR */}
                        <button
                            onClick={limpiarPedido}
                            disabled={pedido.items.length === 0}
                            className="w-full mt-2 py-2 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 disabled:bg-gray-300"
                        >
                            Limpiar comanda
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}