// PASO 1 — La función reemplaza a la clase
// CLASE:     class OrderForm extends React.Component {
// FUNCIONAL:

import React, { useState, useEffect } from "react";

function OrderForm({ mesaNumero }) {

    // PASO 2 — El constructor y this.state se convierten en useState
    // CLASE:     this.state = { mesa: "", plato: "", cantidad: 1, enviando: false, mensaje: "" }
    // FUNCIONAL: (un useState por cada campo de estado independiente)
    const [plato, setPlato] = useState("");
    const [cantidad, setCantidad] = useState(1);
    const [enviando, setEnviando] = useState(false);
    const [mensaje, setMensaje] = useState("");
    // PASO 3 — Los handlers pierden el this y el .bind()
    // CLASE:     this.handleChange = this.handleChange.bind(this)
    // FUNCIONAL: no hay bind — las funciones son closures que acceden al estado
    const handleChange = (event) => {
        const { name, value } = event.target;
        // ¿Cómo traducen el [name]: value del this.setState?
        // Pista: cada campo tiene su propio setter ahora
        if (name === "plato") setPlato(value);
        if (name === "cantidad") setCantidad(value);
    };
    // PASO 4 — componentDidMount se convierte en useEffect con []
    // CLASE:     componentDidMount() { console.log(...) }
    // FUNCIONAL:
    useEffect(() => {
        console.log("OrderForm montado — mesa:", mesaNumero);
    }, []);
    // PASO 5 — handleSubmit sin this
    const handleSubmit = (event) => {
        event.preventDefault();
        setEnviando(true);
        setMensaje("");
        setTimeout(() => {
            setEnviando(false);
            setMensaje(`Comanda enviada: ${plato} x${cantidad}`);
            setPlato("");
            setCantidad(1);
        }, 1500);
    };
    // PASO 6 — render() desaparece, el return va directo
    // CLASE:     render() { return (...) }
    // FUNCIONAL:
    return (
        <form onSubmit={handleSubmit}>
            <h3>Mesa {mesaNumero}</h3>

            <input
                type="text"
                name="plato"
                placeholder="Plato"
                value={plato}
                onChange={handleChange}
            />

            <input
                type="number"
                name="cantidad"
                value={cantidad}
                onChange={handleChange}
            />

            <button type="submit" disabled={enviando}>
                {enviando ? "Enviando..." : "Agregar Comanda"}
            </button>

            {mensaje && <p>{mensaje}</p>}
        </form>
    );
}

export default OrderForm;
