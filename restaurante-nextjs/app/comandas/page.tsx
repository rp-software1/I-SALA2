'use client';

// app/comandas/page.tsx

import { useEffect } from 'react';

import type { Pedido } from "../../src/types";

import { getPedidos } from '../../src/services/api';

import { usePedido } from '../../src/context/PedidoProvider';

import ComandaCard from "./ComandaCard";

// Orden visual
const ORDEN: Record<string, number> = {
    pendiente: 0,
    en_preparacion: 1,
    lista: 2,
    entregada: 3,
    cancelada: 4,
};

export default function ComandasPage() {

    const {
        pedidos,
        setPedidos,
    } = usePedido();

    // cargar pedidos mock iniciales
    useEffect(() => {

        async function cargar() {

            const data = await getPedidos();

            setPedidos(data);
        }

        if (pedidos.length === 0) {
            cargar();
        }

    }, [pedidos.length, setPedidos]);

    // ordenar
    const ord = [...pedidos].sort(
        (a, b) =>
            (ORDEN[a.estado] ?? 5) -
            (ORDEN[b.estado] ?? 5)
    );

    // separar
    const activos = ord.filter(
        p =>
            p.estado !== 'entregada' &&
            p.estado !== 'cancelada'
    );

    const cerrados = ord.filter(
        p =>
            p.estado === 'entregada' ||
            p.estado === 'cancelada'
    );

    return (
        <div>

            <h1 className="text-2xl font-bold mb-6">
                Panel de Comandas
            </h1>

            {/* ACTIVAS */}
            <section className="mb-8">

                <h2 className="text-lg font-semibold text-gray-700 mb-3">
                    Activas ({activos.length})
                </h2>

                {activos.length === 0 ? (

                    <p className="text-gray-400 text-sm">
                        No hay comandas activas
                    </p>

                ) : (

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">

                        {activos.map((pedido: Pedido) => (

                            <ComandaCard
                                key={pedido.id}
                                pedido={pedido}
                            />
                        ))}
                    </div>
                )}
            </section>

            {/* CERRADAS */}
            {cerrados.length > 0 && (

                <section className="opacity-60">

                    <h2 className="text-lg font-semibold text-gray-400 mb-3">
                        Cerradas ({cerrados.length})
                    </h2>

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">

                        {cerrados.map((pedido: Pedido) => (

                            <ComandaCard
                                key={pedido.id}
                                pedido={pedido}
                            />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}