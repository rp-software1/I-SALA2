import Link from "next/link";
import { getMesaById } from "@/src/services/api";

interface MesaDetailProps {
    params: Promise<{
        mesaId: string;
    }>;
}

export default async function MesaDetailPage({ params }: MesaDetailProps) {

    const { mesaId } = await params;

    const mesa = await getMesaById(mesaId);

    return (
        <main className="p-6 max-w-xl mx-auto">

            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                Detalle de Mesa
            </h1>

            <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">

                <p className="mb-4 text-gray-600">
                    ID recibido:
                    <span className="ml-2 font-mono bg-gray-100 px-2 py-1 rounded">
                        {mesaId}
                    </span>
                </p>

                <div className="space-y-3">

                    <div className="flex justify-between border-b pb-2">
                        <span className="font-semibold text-gray-700">
                            Número
                        </span>

                        <span>
                            {mesa.numero}
                        </span>
                    </div>

                    <div className="flex justify-between border-b pb-2">
                        <span className="font-semibold text-gray-700">
                            Capacidad
                        </span>

                        <span>
                            {mesa.capacidad} personas
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-semibold text-gray-700">
                            Estado
                        </span>

                        <span className="
                            px-3 py-1 rounded-full text-sm font-medium
                            bg-green-100 text-green-700
                        ">
                            {mesa.estado}
                        </span>
                    </div>

                </div>

            </div>

            <br />

            <Link
                href="/mesas"
                className="
                    inline-block mb-6
                    bg-gray-200 hover:bg-gray-300
                    text-gray-800
                    px-4 py-2 rounded-lg
                    transition
                "
            >
                ← Volver a Mesas
            </Link>




        </main>
    );
}