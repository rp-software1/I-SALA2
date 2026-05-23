// app/not-found.tsx

import type { Metadata } from 'next';

import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Página no encontrada — Sistema de Restaurante',
};

export default function NotFound() {
    return (
        <div className="mt-20 text-center">
            <p className="mb-4 text-6xl">🍽</p>

            <h1 className="mb-4 text-4xl font-bold">
                404
            </h1>

            <p className="mb-8 text-gray-500">
                Esta página no existe en el restaurante
            </p>

            <Link
                href="/mesas"
                className="rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
            >
                Volver a las mesas
            </Link>
        </div>
    );
}