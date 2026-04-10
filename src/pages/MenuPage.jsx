import { useState, useEffect } from 'react';
import PlatoCard from '../components/PlatoCard.jsx';
import { platosMock } from '../data/platos.mock.js';

export default function MenuPage() {
    const [platos, setPlatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function cargarMenu() {
            try {
                setLoading(true);

                // Simulación de API
                await new Promise(resolve => setTimeout(resolve, 2000));

                const data = platosMock;

                // 🔴 ESTO TE FALTABA
                setPlatos(data);

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        cargarMenu();
    }, []);

    // Estado loading
    if (loading) return (
        <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
            <p className='text-gray-500 text-lg animate-pulse'>
                Cargando el menú...
            </p>
        </div>
    );

    // Estado error
    if (error) return (
        <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
            <div className='bg-red-50 border border-red-200 rounded-xl p-6 text-center'>
                <p className='text-red-600 font-medium'>
                    Error al cargar el menú
                </p>
                <p className='text-red-400 text-sm mt-1'>
                    {error}
                </p>
            </div>
        </div>
    );

    // Render principal
    return (
        <div className='min-h-screen bg-gray-50 p-8'>
            <div className='max-w-5xl mx-auto'>
                <h1 className='text-3xl font-bold text-gray-800 mb-1'>
                    🍽️ Restaurante RPSoft
                </h1>
                <p className='text-gray-500 mb-8'>
                    Menú del día — selecciona tus platos
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {platos.map(plato => (
                        <PlatoCard key={plato.id} plato={plato} />
                    ))}
                </div>
            </div>
        </div>
    );
}