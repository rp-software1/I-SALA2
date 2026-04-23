import { useEffect, useState } from 'react';
import PlatoCard from '../components/PlatoCard.jsx';
import { platosMock } from '../data/platos.mock.js';
import { usePedido } from '../context/PedidoContext';

export default function MenuPage() {

    const { pedido } = usePedido();

    const [platos, setPlatos] = useState([]);

    useEffect(() => {
        setPlatos(platosMock);
    }, []);

    const totalItems = pedido.items.reduce(
        (acc, item) => acc + item.cantidad,
        0
    );

    return (
        <div className='min-h-screen bg-gray-50 p-8'>
            <div className='max-w-5xl mx-auto'>

                <h1 className='text-3xl font-bold mb-6'>
                    Menú
                </h1>

                {!pedido.mesaId && (
                    <p className='text-red-500 mb-4'>
                        Selecciona una mesa
                    </p>
                )}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {platos.map(plato => (
                        <PlatoCard
                            key={plato.id}
                            plato={plato}
                            onAgregar={agregarPlato}
                        />
                    ))}
                </div>

                {totalItems > 0 && (
                    <div className='fixed bottom-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-full shadow-lg'>
                        🛒 {totalItems} items
                    </div>
                )}

            </div>
        </div>
    );
}