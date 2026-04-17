import { createContext, useContext, useState } from 'react';

// 1. Crear el contexto
const PedidoContext = createContext(null);

// 2. Estado inicial — misma forma que el modelo Pedido en NestJS
const estadoInicial = {
    mesaId: null,                  // null = pedido para llevar
    tipo: 'mesa',                  // 'mesa' | 'para_llevar'
    estado: 'pendiente',           // estado actual del pedido
    items: [],                     // [{ platoId, nombre, cantidad, precioUnitario }]
    total: 0,                      // calculado automáticamente
};

// 3. Provider — tiene el estado y lo comparte a toda la app
export function PedidoProvider({ children }) {
    const [pedido, setPedido] = useState(estadoInicial);

    return (
        <PedidoContext.Provider value={{ pedido, setPedido }}>
            {children}
        </PedidoContext.Provider>
    );
}

// 4. Custom hook — para no importar useContext + PedidoContext en cada archivo
export function usePedido() {
    const context = useContext(PedidoContext);
    if (!context) throw new Error('usePedido debe usarse dentro de PedidoProvider');
    return context;
}
