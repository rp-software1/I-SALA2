// app/menu/page.tsx

import type { Metadata } from 'next';
import type { Plato } from '../../src/types';

import { getPlatos } from '../../src/services/api';

import PlatoCard from './PlatoCard';

export const metadata: Metadata = {
    title: 'Menú — Sistema de Restaurante',
    description:
        'Menú completo del restaurante con platos disponibles y precios.',
};

export default async function MenuPage() {

    const platos: Plato[] = await getPlatos();

    // Filtrar solo platos disponibles
    const platosDisponibles = platos.filter((p) => p.disponible);

    return (
        <div>
            <h1 className="mb-6 text-2xl font-bold">
                Menú del Restaurante
            </h1>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {platosDisponibles.map((plato: Plato) => (
                    <PlatoCard
                        key={plato.id}
                        plato={plato}
                    />
                ))}
            </div>

            {platosDisponibles.length === 0 && (
                <p className="mt-8 text-center text-gray-500">
                    No hay platos disponibles en este momento
                </p>
            )}
        </div>
    );
}