import { platosMock } from "../data/platos.mock.js";
import PlatoCard from "../components/PlatoCard.jsx";

function Home() {
    return (
        <>
            <h1>Carta del Restaurante</h1>
            <p>Aqui van los platos</p>
            <ul>
                {platosMock.map(plato => (
                    <PlatoCard key={plato.id} plato={plato} />
                ))}
            </ul>
        </>
    )
}
export default Home