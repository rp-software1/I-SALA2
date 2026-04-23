interface Plato {
    id: number;
    nombre: string;
    precio: number;
    categoria: string;
    disponible: boolean;
    stock?: number;
}

//  2. Props
interface PlatoCardProps {
    plato: Plato;
    onAgregar: (plato: Plato) => void;
}

// 3. Componente tipado
function PlatoCard({ plato, onAgregar }: PlatoCardProps) {

    return (
        <div className='bg-white rounded-xl shadow-md p-4 flex flex-col gap-3 border border-gray-100 hover:shadow-lg transition'>

            <div className='flex justify-between items-start'>
                <h3 className='font-bold text-gray-800 text-lg'>
                    {plato.nombre}
                </h3>

                <span className='text-green-600 font-bold text-lg'>
                    S/ {plato.precio}
                </span>
            </div>

            <span className='text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full w-fit'>
                {plato.categoria}
            </span>

            <div className='flex justify-between items-center mt-2'>
                <span className='text-gray-400 text-sm'>
                    Stock: {plato.stock ?? 0}
                </span>

                <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${plato.disponible
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-500'
                        }`}
                >
                    {plato.disponible ? ' Disponible' : ' Agotado'}
                </span>
            </div>

            <button
                onClick={() => {
                    if (!plato.disponible) return;
                    onAgregar(plato);
                }}
                className='mt-3 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition disabled:bg-gray-300'
                disabled={!plato.disponible}
            >
                + Agregar a comanda
            </button>

        </div>
    );
}

export default PlatoCard;