'use client';

import { createContext, useContext, useState } from 'react';

import type {
    Plato,
    TipoPedido,
    EstadoPedido,
    Pedido,
    EstadoPedidoContext,
    PedidoContextType,
} from '../types';

const initialState: EstadoPedidoContext = {
    mesaId: null,
    tipo: 'para_llevar',
    estado: 'pendiente',
    items: [],
    total: 0,
};

const PedidoContext =
    createContext<PedidoContextType | undefined>(
        undefined
    );

// Hook
export function usePedido(): PedidoContextType {

    const ctx = useContext(PedidoContext);

    if (!ctx) {
        throw new Error(
            'usePedido debe usarse dentro de PedidoProvider'
        );
    }

    return ctx;
}

// Provider
export default function PedidoProvider({
    children,
}: {
    children: React.ReactNode;
}) {

    // carrito actual
    const [pedido, setPedido] =
        useState<EstadoPedidoContext>(initialState);

    // lista global de comandas
    const [pedidos, setPedidos] =
        useState<Pedido[]>([]);

    // agregar plato
    function agregarPlato(plato: Plato): void {

        setPedido(prev => {

            const existente =
                prev.items.find(
                    i => i.platoId === plato.id
                );

            if (existente) {

                return {
                    ...prev,

                    items: prev.items.map(i =>
                        i.platoId === plato.id
                            ? {
                                ...i,
                                cantidad: i.cantidad + 1,
                            }
                            : i
                    ),

                    total: prev.total + plato.precio,
                };
            }

            return {
                ...prev,

                items: [
                    ...prev.items,
                    {
                        platoId: plato.id,
                        nombre: plato.nombre,
                        cantidad: 1,
                        precioUnitario: plato.precio,
                    },
                ],

                total: prev.total + plato.precio,
            };
        });
    }

    // quitar plato
    function quitarPlato(platoId: string): void {

        setPedido(prev => {

            const item =
                prev.items.find(
                    i => i.platoId === platoId
                );

            if (!item) return prev;

            if (item.cantidad === 1) {

                return {
                    ...prev,

                    items: prev.items.filter(
                        i => i.platoId !== platoId
                    ),

                    total:
                        prev.total -
                        item.precioUnitario,
                };
            }

            return {
                ...prev,

                items: prev.items.map(i =>
                    i.platoId === platoId
                        ? {
                            ...i,
                            cantidad: i.cantidad - 1,
                        }
                        : i
                ),

                total:
                    prev.total -
                    item.precioUnitario,
            };
        });
    }

    // cambiar tipo
    function cambiarTipo(
        tipo: TipoPedido
    ): void {

        setPedido(prev => ({
            ...prev,
            tipo,
        }));
    }

    // asignar mesa
    function asignarMesa(
        mesaId: string
    ): void {

        setPedido(prev => ({
            ...prev,
            mesaId,
            tipo: 'mesa',
        }));
    }

    // limpiar carrito
    function limpiarPedido(): void {

        setPedido(initialState);
    }

    // actualizar estado de comanda
    function actualizarEstadoPedido(
        pedidoId: string,
        estado: EstadoPedido
    ): void {

        setPedidos(prev =>
            prev.map(p =>
                p.id === pedidoId
                    ? {
                        ...p,
                        estado,
                    }
                    : p
            )
        );
    }

    return (
        <PedidoContext.Provider
            value={{
                pedido,
                pedidos,
                setPedidos,
                agregarPlato,
                quitarPlato,
                cambiarTipo,
                asignarMesa,
                limpiarPedido,
                actualizarEstadoPedido,
            }}
        >
            {children}
        </PedidoContext.Provider>
    );
}