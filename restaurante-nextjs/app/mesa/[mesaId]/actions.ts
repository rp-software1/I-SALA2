'use server';

import { revalidatePath } from 'next/cache';
import { mesasMock } from '@/src/data/mesas.mock';
import type { EstadoMesa, Mesa } from '@/src/types';

interface Exito {
    ok: true;
    mesa: Mesa;
}

interface Fallo {
    ok: false;
    mensaje: string;
}

type Resultado = Exito | Fallo;

export async function cambiarEstadoMesa(
    mesaId: string,
    estadoNuevo: EstadoMesa
): Promise<Resultado> {
    try {
        // Simular demora
        await new Promise((resolve) => {
            setTimeout(resolve, 800);
        });

        const indiceMesa = mesasMock.findIndex(
            (mesa) => mesa.id === mesaId
        );

        if (indiceMesa === -1) {
            return {
                ok: false,
                mensaje: 'No se encontró la mesa',
            };
        }

        // Crear nueva referencia
        mesasMock[indiceMesa] = {
            ...mesasMock[indiceMesa],
            estado: estadoNuevo,
        };

        // Revalidar rutas
        revalidatePath('/mesas');
        revalidatePath(`/mesa/${mesaId}`);

        return {
            ok: true,
            mesa: mesasMock[indiceMesa],
        };
    } catch (e) {
        return {
            ok: false,
            mensaje:
                e instanceof Error
                    ? e.message
                    : 'Ocurrió un error inesperado',
        };
    }
}