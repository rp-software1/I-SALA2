// app/mesas/page.tsx

import type { Metadata } from 'next';
import type { Mesa } from '../../src/types';

import { getMesas } from '../../src/services/api';

import MesaCard from './MesaCard';

export const metadata: Metadata = {
    title: 'Mesas — Sistema de Restaurante',
    description:
        'Gestiona las mesas del restaurante — ve su estado y asigna comandas.',
};

export default async function MesasPage() {

    // Simulación backend
    const mesas: Mesa[] = await getMesas();

    return (
        <div>
            <h1 className="mb-6 text-2xl font-bold">
                Mesas del Restaurante
            </h1>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {mesas.map((mesa: Mesa) => (
                    <MesaCard
                        key={mesa.id}
                        mesa={mesa}
                    />
                ))}
            </div>
        </div>
    );
}