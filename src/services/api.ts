import { platosMock } from "../data/platos.mock";
import { mesasMock } from "../data/mesas.mock";
import { v4 as uuid } from "uuid";
import type { Mesa, Pedido, EstadoPedido, Plato } from '../types';

// ── DB simulada ─────────────────────────────────
let pedidosDB: Pedido[] = [];

// ── Funciones ───────────────────────────────────
export async function getMesas(): Promise<Mesa[]> {
    return new Promise(resolve => {
        setTimeout(() => resolve(mesasMock), 300);
    });
}

export async function getPlatos(): Promise<Plato[]> {
    return new Promise(resolve => {
        setTimeout(() => resolve(platosMock), 300);
    });
}

export async function crearPedido(
    datos: Omit<Pedido, 'id' | 'estado'>
): Promise<Pedido> {
    return new Promise(resolve => {
        const nuevoPedido: Pedido = {
            id: uuid(),
            estado: "pendiente",
            ...datos,
        };

        pedidosDB.push(nuevoPedido);

        setTimeout(() => resolve(nuevoPedido), 300);
    });
}

export async function cambiarEstadoPedido(
    pedidoId: string,
    estado: EstadoPedido
): Promise<Pedido | undefined> {
    return new Promise(resolve => {
        const pedido = pedidosDB.find(p => p.id === pedidoId);

        if (pedido) {
            pedido.estado = estado;
        }

        setTimeout(() => resolve(pedido), 300);
    });
}