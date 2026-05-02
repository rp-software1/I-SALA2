import { useEffect, useState } from 'react';
import type { Plato } from '../types';
import { usePedido } from '../context/PedidoContext';
import PlatoCard from '../components/PlatoCard';
import { getPlatos } from '../services/api';

export default function MenuPage() {
    const { pedido, agregarPlato } = usePedido();

    // ✅ estados tipados
    const [platos, setPlatos] = useState<Plato[]>([]);
    const [cargando, setCargando] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const cargarPlatos = async (): Promise<void> => {
            setCargando(true);
            try {
                const data: Plato[] = await getPlatos();
                setPlatos(data);
            } catch (err: unknown) {
                const mensaje =
                    err instanceof Error
                        ? err.message
                        : 'Error al cargar el menú';

                setError(mensaje);
            } finally {
                setCargando(false);
            }
        };

        cargarPlatos();
    }, []);

    // ✅ cálculo tipado
    const totalItems = pedido.items.reduce(
        (acc, item) => acc + item.cantidad,
        0
    );

    if (cargando) return <p className='p-8'>Cargando menú...</p>;
    if (error) return <p className='p-8 text-red-500'>Error: {error}</p>;

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
                    {platos.map((plato) => (
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