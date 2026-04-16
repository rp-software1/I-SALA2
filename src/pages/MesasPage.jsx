import { Link } from 'react-router-dom';
import { mesasMock } from '../data/mesas.mock';

export default function MesasPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Mesas</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {mesasMock.map((mesa) => (
                    <div key={mesa.id} className="border rounded-lg p-4 shadow">
                        <h2 className="text-lg font-semibold">
                            Mesa {mesa.numero}
                        </h2>
                        <p>Capacidad: {mesa.capacidad}</p>
                        <p>
                            Estado:
                            <span
                                className={
                                    mesa.estado ? 'text-green-500' : 'text-red-500'
                                }
                            >
                                {mesa.estado ? ' Disponible' : ' Ocupada'}
                            </span>
                        </p>

                        <Link
                            to={`/mesas/${mesa.id}`}
                            className="text-blue-500 hover:underline mt-2 inline-block"
                        >
                            Ver detalle
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}