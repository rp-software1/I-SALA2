import { mesasMock } from "../data/mesas.mock";
import { v4 as uuid } from "uuid";

let pedidosDB = []; // simulamos base de datos

// ── Mesas ────────────────────────────────────────
export async function getMesas() {
    return new Promise(resolve => {
        setTimeout(() => resolve(mesasMock), 300);
    });
}

export async function getMesasDisponibles() {
    return new Promise(resolve => {
        const disponibles = mesasMock.filter(m => m.estado === "disponible");
        setTimeout(() => resolve(disponibles), 300);
    });
}

// ── Pedidos ───────────────────────────────────────
export async function crearPedido(pedidoData) {
    return new Promise(resolve => {
        const nuevoPedido = {
            _id: uuid(),
            estado: "pendiente",
            ...pedidoData,
        };

        pedidosDB.push(nuevoPedido);

        // cambiar estado de la mesa
        const mesa = mesasMock.find(m => m._id === pedidoData.mesaId);
        if (mesa) {
            mesa.estado = "ocupada";
            mesa.pedidoActivoId = nuevoPedido._id;
        }

        setTimeout(() => resolve(nuevoPedido), 300);
    });
}

export async function getPedido(id) {
    return new Promise(resolve => {
        const pedido = pedidosDB.find(p => p._id === id);
        setTimeout(() => resolve(pedido), 300);
    });
}

export async function cambiarEstadoPedido(id, estado) {
    return new Promise(resolve => {
        const pedido = pedidosDB.find(p => p._id === id);

        if (pedido) {
            pedido.estado = estado;
        }

        setTimeout(() => resolve(pedido), 300);
    });
}