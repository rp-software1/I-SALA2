import { createContext, useContext, useState } from 'react';

const PedidoContext = createContext(null);

const estadoInicial = {
    mesaId: null,
    tipo: 'mesa',
    estado: 'pendiente',
    items: [],
    total: 0,
};

export function PedidoProvider({ children }) {
    const [pedido, setPedido] = useState(estadoInicial);

    // ✅ total automático
    const calcularTotal = (items) =>
        items.reduce((acc, item) => acc + item.precioUnitario * item.cantidad, 0);

    // ✅ agregar plato
    const agregarPlato = (plato) => {
        setPedido(prev => {
            const existe = prev.items.find(i => i.platoId === plato.id);

            const nuevosItems = existe
                ? prev.items.map(i =>
                    i.platoId === plato.id
                        ? { ...i, cantidad: i.cantidad + 1 }
                        : i
                )
                : [
                    ...prev.items,
                    {
                        platoId: plato.id,
                        nombre: plato.nombre,
                        cantidad: 1,
                        precioUnitario: plato.precio,
                    }
                ];

            return {
                ...prev,
                items: nuevosItems,
                total: calcularTotal(nuevosItems)
            };
        });
    };

    // ✅ quitar plato
    const quitarPlato = (platoId) => {
        setPedido(prev => {
            const nuevosItems = prev.items
                .map(i =>
                    i.platoId === platoId
                        ? { ...i, cantidad: i.cantidad - 1 }
                        : i
                )
                .filter(i => i.cantidad > 0);

            return {
                ...prev,
                items: nuevosItems,
                total: calcularTotal(nuevosItems)
            };
        });
    };

    // ✅ cambiar tipo
    const cambiarTipo = (tipo) => {
        setPedido(prev => ({
            ...prev,
            tipo,
            mesaId: tipo === 'para_llevar' ? null : prev.mesaId,
        }));
    };

    // ✅ asignar mesa
    const asignarMesa = (mesaId) => {
        setPedido(prev => ({
            ...prev,
            mesaId,
            tipo: 'mesa'
        }));
    };

    // ✅ limpiar pedido
    const limpiarPedido = () => setPedido(estadoInicial);

    return (
        <PedidoContext.Provider value={{
            pedido,
            agregarPlato,
            quitarPlato,
            cambiarTipo,
            asignarMesa,
            limpiarPedido,
        }}>
            {children}
        </PedidoContext.Provider>
    );
}

export function usePedido() {
    const context = useContext(PedidoContext);
    if (!context) throw new Error('usePedido debe usarse dentro de PedidoProvider');
    return context;
}