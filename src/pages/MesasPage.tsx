import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMesas } from '../services/api';
import { usePedido } from '../context/PedidoContext';

const ESTADO_CLASES = {
    disponible: 'bg-green-100 border-green-400 text-green-800',
    ocupada: 'bg-red-100 border-red-400 text-red-800',
    reservada: 'bg-yellow-100 border-yellow-400 text-yellow-800',
    fuera_servicio: 'bg-gray-100 border-gray-400 text-gray-600',
};

export default function MesasPage() {
    const [mesas, setMesas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { asignarMesa } = usePedido();
    const navigate = useNavigate();

    useEffect(() => {
        getMesas()
            .then(data => setMesas(data))
            .catch(() => setError('No se pudieron cargar las mesas'))
            .finally(() => setLoading(false));
    }, []);

    const handleSeleccionar = (mesa) => {
        asignarMesa(mesa._id);
        navigate('/carrito');
    };

    if (loading) return <p className='p-6'>Cargando mesas...</p>;
    if (error) return <p className='p-6 text-red-500'>{error}</p>;

    return (
        <div className='p-6'>
            <h1 className='text-2xl font-bold mb-6'>Mesas</h1>

            <div className='grid grid-cols-3 gap-4'>
                {mesas.map((mesa, index) => (
                    <div
                        key={mesa._id || index} // 🔥 SOLUCIÓN
                        className={`border-2 rounded-xl p-4 ${ESTADO_CLASES[mesa.estado]}`}
                    >
                        <h3 className='font-bold'>Mesa {mesa.numero}</h3>
                        <p>Capacidad: {mesa.capacidad}</p>
                        <p className='capitalize'>{mesa.estado}</p>

                        {mesa.estado === 'disponible' && (
                            <button
                                onClick={() => handleSeleccionar(mesa)}
                                className='mt-3 w-full bg-green-600 text-white py-1 rounded'
                            >
                                Seleccionar
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}