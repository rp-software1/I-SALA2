'use server';

import type { EstadoPedidoContext } from '../../src/types';

// Server Action simulado con mock data
export async function enviarComanda(
    pedido: EstadoPedidoContext
): Promise<{ ok: true; pedidoId: string } | { ok: false; error: string }> {

    try {

        // Simula espera del servidor
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Simula que el servidor recibió el pedido
        console.log('Pedido recibido:', pedido);

        // Generar ID falso
        const pedidoId = crypto.randomUUID();

        // Respuesta simulada
        return {
            ok: true,
            pedidoId,
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