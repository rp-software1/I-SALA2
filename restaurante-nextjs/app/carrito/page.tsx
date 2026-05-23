// app/carrito/page.tsx

'use client';

import {
    useEffect,
    useState,
} from 'react';

import { useRouter } from 'next/navigation';

import { usePedido } from '../../src/context/PedidoProvider';

import type {
    ItemPedido,
    Pedido,
} from '../../src/types';

import { enviarComanda } from './actions';

export default function CarritoPage() {

    const {
        pedido,
        pedidos,
        setPedidos,
        quitarPlato,
        limpiarPedido,
        cambiarTipo,
        asignarMesa,
    } = usePedido();

    const router = useRouter();

    const [enviando, setEnviando] =
        useState<boolean>(false);

    const [confirmacion, setConfirmacion] =
        useState<string | null>(null);

    const [errorEnvio, setErrorEnvio] =
        useState<string | null>(null);

    // TITLE DINÁMICO
    useEffect(() => {

        document.title =
            pedido.items.length > 0
                ? `Carrito (${pedido.items.length}) — Sistema de Restaurante`
                : 'Carrito — Sistema de Restaurante';

    }, [pedido.items.length]);

    const totalVisual = pedido.items.reduce(
        (acc: number, item: ItemPedido) =>
            acc +
            item.precioUnitario *
            item.cantidad,
        0
    );

    const handleEnviar = async (): Promise<void> => {

        setEnviando(true);

        setErrorEnvio(null);

        const resultado =
            await enviarComanda(pedido);

        if (resultado.ok) {

            // NUEVA COMANDA GLOBAL
            const nuevoPedido: Pedido = {

                id: resultado.pedidoId,

                mesaId: pedido.mesaId,

                tipo: pedido.tipo,

                estado: 'pendiente',

                items: pedido.items,

                total: pedido.total,

                creadoEn:
                    new Date().toISOString(),
            };

            // agregar al contexto global
            setPedidos(prev => [
                ...prev,
                nuevoPedido,
            ]);

            setConfirmacion(
                resultado.pedidoId
            );

            limpiarPedido();

        } else {

            setErrorEnvio(
                resultado.error
            );
        }

        setEnviando(false);
    };

    if (confirmacion) {

        return (
            <div className="text-center mt-16">

                <p className="text-5xl mb-4">
                    ✅
                </p>

                <h1 className="text-2xl font-bold mb-2">
                    ¡Comanda enviada!
                </h1>

                <p className="text-gray-500 mb-2 text-sm font-mono">
                    ID: {confirmacion}
                </p>

                <button
                    onClick={() => {

                        setConfirmacion(null);

                        router.push('/comandas');
                    }}
                    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                    Ver comandas
                </button>
            </div>
        );
    }

    if (pedido.items.length === 0) {

        return (
            <div className="text-center mt-16">

                <p className="text-5xl mb-4">
                    🛒
                </p>

                <h1 className="text-2xl font-bold mb-4">
                    El carrito está vacío
                </h1>

                <button
                    onClick={() =>
                        router.push('/menu')
                    }
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                    Ver el menú
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto">

            <h1 className="text-2xl font-bold mb-6">
                Tu Carrito
            </h1>

            {/* ITEMS */}
            <div className="space-y-3 mb-6">

                {pedido.items.map(
                    (item: ItemPedido) => (

                        <div
                            key={item.platoId}
                            className="flex justify-between items-center bg-white rounded-lg p-4 shadow-sm"
                        >

                            <div>

                                <p className="font-medium">
                                    {item.nombre}
                                </p>

                                <p className="text-sm text-gray-500">
                                    S/ {item.precioUnitario.toFixed(2)} × {item.cantidad}
                                </p>
                            </div>

                            <div className="flex items-center gap-3">

                                <span className="font-bold">
                                    S/ {(item.precioUnitario * item.cantidad).toFixed(2)}
                                </span>

                                <button
                                    onClick={() =>
                                        quitarPlato(
                                            item.platoId
                                        )
                                    }
                                    className="text-red-500 hover:text-red-700 text-lg font-bold"
                                >
                                    −
                                </button>
                            </div>
                        </div>
                    )
                )}
            </div>

            {/* TOTAL */}
            <div className="bg-white rounded-lg p-4 shadow-sm mb-6">

                <div className="flex justify-between text-lg font-bold">

                    <span>Total</span>

                    <span>
                        S/ {totalVisual.toFixed(2)}
                    </span>
                </div>
            </div>

            {/* TIPO */}
            <div className="bg-white rounded-lg p-4 shadow-sm mb-6 space-y-4">

                <h2 className="font-bold">
                    Tipo de pedido
                </h2>

                <div className="flex gap-3">

                    <button
                        onClick={() =>
                            cambiarTipo(
                                'para_llevar'
                            )
                        }
                        className={`px-4 py-2 rounded border ${pedido.tipo === 'para_llevar'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white'
                            }`}
                    >
                        Para llevar
                    </button>

                    <button
                        onClick={() =>
                            cambiarTipo('mesa')
                        }
                        className={`px-4 py-2 rounded border ${pedido.tipo === 'mesa'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white'
                            }`}
                    >
                        Mesa
                    </button>
                </div>

                {pedido.tipo === 'mesa' && (

                    <input
                        type="text"
                        placeholder="Número de mesa"
                        value={pedido.mesaId ?? ''}
                        onChange={(e) =>
                            asignarMesa(
                                e.target.value
                            )
                        }
                        className="w-full border rounded px-3 py-2"
                    />
                )}
            </div>

            {/* ERROR */}
            {errorEnvio && (

                <p className="text-red-500 text-sm mb-3">
                    {errorEnvio}
                </p>
            )}

            {/* BOTÓN */}
            <button
                onClick={handleEnviar}
                disabled={enviando}
                className="w-full bg-blue-600 text-white rounded py-3 font-bold hover:bg-blue-700 disabled:opacity-50"
            >

                {enviando
                    ? 'Enviando comanda...'
                    : 'Enviar comanda'}
            </button>
        </div>
    );
}