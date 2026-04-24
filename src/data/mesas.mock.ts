import type { Mesa } from "../services/api";

export const mesasMock: Mesa[] = [
    { id: "1", numero: 1, capacidad: 4, estado: "disponible", pedidoActivoId: null },
    { id: "2", numero: 2, capacidad: 2, estado: "ocupada", pedidoActivoId: null },
    { id: "3", numero: 3, capacidad: 6, estado: "reservada", pedidoActivoId: null },
    { id: "4", numero: 4, capacidad: 4, estado: "disponible", pedidoActivoId: null },
    { id: "5", numero: 5, capacidad: 8, estado: "fuera_servicio", pedidoActivoId: null },
    { id: "6", numero: 6, capacidad: 2, estado: "disponible", pedidoActivoId: null },
];