//crear un select con mesas
import { useState } from "react";
import OrderForm from "../components/OrderForm.jsx";

function ComandasPage() {
    const [mesaSeleccionada, setMesaSeleccionada] = useState("");

    const cambiarMesa = (e) => {
        setMesaSeleccionada(e.target.value);
    }

    return (
        <div>
            <h1>.....Comandas.....</h1>
            <br />
            <select onChange={cambiarMesa} value={mesaSeleccionada}>
                <option value="">Seleccione una mesa</option>
                <option value="1">Mesa 1</option>
                <option value="2">Mesa 2</option>
                <option value="3">Mesa 3</option>
                <option value="4">Mesa 4</option>
                <option value="5">Mesa 5</option>
                <option value="6">Mesa 6</option>
            </select>

            <OrderForm mesaNumero={mesaSeleccionada} />
        </div>
    );
}

export default ComandasPage;