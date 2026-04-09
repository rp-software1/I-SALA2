import { mesasMock } from "../data/mesas.mock";
import MesaCard from "../components/MesaCard";

function MesasPage() {
    return (
        <div>
            <h1>Mesas</h1>
            {mesasMock.map((mesa) => (
                <MesaCard key={mesa.id} {...mesa} />
            ))}
        </div>
    );
}

export default MesasPage