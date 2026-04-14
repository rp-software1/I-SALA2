export default function PlatoCard({ plato }) {
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
                    Stock: {plato.stock}
                </span>

                <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${plato.disponible
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-500'
                        }`}
                >
                    {plato.disponible ? '✅ Disponible' : '❌ Agotado'}
                </span>
            </div>
        </div>
    );
}


