import { useParams, Link, useNavigate } from 'react-router-dom';
import { mesasMock } from '../data/mesas.mock.js';

export default function DetalleMesa() {
    const { id } = useParams();
    const navigate = useNavigate();
    const mesa = mesasMock.find(m => String(m.id) === id);

    if (!mesa) {
        return (
            <div className='p-6'>
                <p className='text-red-500'>Mesa {id} no encontrada</p>
                <button
                    onClick={() => navigate('/mesas')}
                    className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'
                >
                    Volver a mesas
                </button>
            </div>
        );
    }

    return (
        <div className='p-6 max-w-lg'>
            <Link to='/mesas' className='text-blue-500 hover:underline'>
                ← Volver
            </Link>
            <h1 className='text-2xl font-bold mt-4'>
                Mesa {mesa.numero}
            </h1>
            <p>Capacidad: {mesa.capacidad} personas</p>
            <p>Comensales: {mesa.comensales}</p>
            <p>
                Estado:
                <span className={
                    mesa.estado === "libre"
                        ? 'text-green-500'
                        : mesa.estado === "reservada"
                            ? 'text-yellow-500'
                            : 'text-red-500'
                }>
                    {" "}{mesa.estado}
                </span>
            </p>
        </div>
    );
}