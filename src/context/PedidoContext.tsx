import { createContext, useContext, useState } from 'react';
import type {
    Plato,
    TipoPedido,
    EstadoPedidoContext,
    PedidoContextType,
} from '../types';

// Estado inicial tipado
const estadoInicial: EstadoPedidoContext = {
    mesaId: null,
    tipo: 'mesa',
    estado: 'pendiente',
    items: [],
    total: 0,
};

// Context tipado
const PedidoContext = createContext<PedidoContextType | undefined>(undefined);

// Props del provider
interface PedidoProviderProps {
    children: React.ReactNode;
}

export function PedidoProvider({ children }: PedidoProviderProps) {
    const [pedido, setPedido] = useState<EstadoPedidoContext>(estadoInicial);

    const calcularTotal = (items: EstadoPedidoContext['items']): number =>
        items.reduce((acc, item) => acc + item.precioUnitario * item.cantidad, 0);

    function agregarPlato(plato: Plato): void {
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
                    },
                ];

            return {
                ...prev,
                items: nuevosItems,
                total: calcularTotal(nuevosItems),
            };
        });
    }

    function quitarPlato(platoId: string): void {
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
                total: calcularTotal(nuevosItems),
            };
        });
    }

    function cambiarTipo(tipo: TipoPedido): void {
        setPedido(prev => ({
            ...prev,
            tipo,
            mesaId: tipo === 'para_llevar' ? null : prev.mesaId,
        }));
    }

    function asignarMesa(mesaId: string): void {
        setPedido(prev => ({
            ...prev,
            mesaId,
            tipo: 'mesa',
        }));
    }

    function limpiarPedido(): void {
        setPedido(estadoInicial);
    }

    const value: PedidoContextType = {
        pedido,
        agregarPlato,
        quitarPlato,
        cambiarTipo,
        asignarMesa,
        limpiarPedido,
    };

    return (
        <PedidoContext.Provider value={value}>
            {children}
        </PedidoContext.Provider>
    );
}

// Hook seguro
export function usePedido(): PedidoContextType {
    const context = useContext(PedidoContext);
    if (!context) {
        throw new Error('usePedido debe usarse dentro de PedidoProvider');
    }
    return context;
}

export default PedidoContext;