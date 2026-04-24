// src/services/api.ts

import { mesasMock } from "../data/mesas.mock";
import { v4 as uuid } from "uuid";

// ── Tipos ────────────────────────────────────────
type EstadoMesa = 'disponible' | 'ocupada' | 'reservada' | 'fuera_servicio';
type EstadoPedido = 'pendiente' | 'en_preparacion' | 'lista' | 'entregada' | 'cancelada' | 'cerrada';
type TipoPedido = 'mesa' | 'para_llevar';

export interface Mesa {
    id: string;
    numero: number;
    capacidad: number;
    estado: EstadoMesa;
    pedidoActivoId: string | null;
}

export interface ItemPedido {
    platoId: string;
    nombre: string;
    cantidad: number;
    precioUnitario: number;
}

export interface Pedido {
    id: string;
    mesaId: string | null;
    tipo: TipoPedido;
    estado: EstadoPedido;
    items: ItemPedido[];
    total: number;
}

// ── DB simulada ─────────────────────────────────
let pedidosDB: Pedido[] = [];

// ── Funciones tipadas ───────────────────────────
export async function getMesas(): Promise<Mesa[]> {
    return new Promise(resolve => {
        setTimeout(() => resolve(mesasMock), 300);
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