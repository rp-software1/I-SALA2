'use server';

import { crearPedido } from '../../src/services/api';

import type {
    EstadoPedidoContext,
} from '../../src/types';

export async function enviarComanda(
    pedido: EstadoPedidoContext
): Promise<
    { ok: true; pedidoId: string }
    | { ok: false; error: string }
> {

    try {

        // Simula espera del servidor
        await new Promise((resolve) =>
            setTimeout(resolve, 2000)
        );

        // Crear pedido REAL en pedidosDB
        const nuevoPedido = await crearPedido({
            mesaId: pedido.mesaId,
            tipo: pedido.tipo,
            total: pedido.total,
            items: pedido.items,
        });

        console.log(
            'Pedido creado:',
            nuevoPedido
        );

        return {
            ok: true,
            pedidoId: nuevoPedido.id,
        };

    } catch (err: unknown) {

        const mensaje =
            err instanceof Error
                ? err.message
                : 'Error desconocido';

        return {
            ok: false,
            error: mensaje,
        };
    }
}