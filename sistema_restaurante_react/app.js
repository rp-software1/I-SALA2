import { platosMock } from "../data/platos_mock.js";
import PlatoCard from "../components/PlatoCard.jsx";

function App() {
    return (
        <ul>
            {platosMock.map(plato => (
                <PlatoCard key={plato.id} plato={plato} />
            ))}
        </ul>
    );
}

export default App;