// types pueden ir en otro archivo si quieres
type EstadoMesa = 'disponible' | 'ocupada' | 'reservada' | 'fuera_servicio';

interface Mesa {
    id: string;
    numero: number;
    capacidad: number;
    estado: EstadoMesa;
    pedidoActivoId: string | null;
}

interface MesaCardProps {
    mesa: Mesa;
    onClick: (mesa: Mesa) => void;
}

function MesaCard({ mesa, onClick }: MesaCardProps) {

    const color =
        mesa.estado === "disponible"
            ? "green"
            : mesa.estado === "ocupada"
                ? "red"
                : mesa.estado === "reservada"
                    ? "orange"
                    : "gray";

    return (
        <div
            onClick={() => onClick(mesa)}
            style={{
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px",
                backgroundColor: color,
                cursor: "pointer"
            }}
        >
            <h3>Mesa {mesa.numero}</h3>
            <p>Capacidad: {mesa.capacidad}</p>
            <p>Estado: {mesa.estado}</p>
        </div>
    );
}

export default MesaCard;