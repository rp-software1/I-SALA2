import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Mesa } from '../types';
import { getMesas } from '../services/api';

// DetalleMesa no recibe props externas — los datos vienen de la URL
function DetalleMesa() {
    // useParams con genérico — describe la forma de los params de la ruta
    // Nota: el campo sigue siendo string | undefined aunque lo declares como string
    const { mesaId } = useParams<{ mesaId: string }>();
    const navigate = useNavigate();

    const [mesa, setMesa] = useState<Mesa | null>(null);
    const [cargando, setCargando] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Guard obligatorio — mesaId puede ser undefined si la ruta no coincide
        if (!mesaId) {
            navigate('/mesas');
            return;
        }

        const cargarDetalle = async (): Promise<void> => {
            setCargando(true);
            try {
                // Si no tienes getMesaById, busca en la lista completa
                const todas: Mesa[] = await getMesas();
                const encontrada = todas.find(m => m.id === mesaId) ?? null;
                setMesa(encontrada);
            } catch (err: unknown) {
                const mensaje = err instanceof Error ? err.message : "Error al cargar la mesa";
                setError(mensaje);
            } finally {
                setCargando(false);
            }
        };

        cargarDetalle();
    }, [mesaId, navigate]);

    if (cargando) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!mesa) return <p>Mesa no encontrada</p>;

    return (
        <div>
            <h2>Mesa {mesa.numero}</h2>
            <p>Capacidad: {mesa.capacidad}</p>
            <p>Estado: {mesa.estado}</p>
            {/* tu JSX existente del Día 7 */}
        </div>
    );
}

export default DetalleMesa;
