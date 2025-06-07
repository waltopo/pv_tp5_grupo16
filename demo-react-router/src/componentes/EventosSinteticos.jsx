import React, { useState } from 'react';

function EventosSinteticos() {
    const [texto, setTexto] = useState("");

    const handleChange = (e) => setTexto(e.target.value);

    const handleClick = () => alert("Botón clickeado");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Formulario enviado con: ${texto}`);
    };

    return (
        <div className="card">
            <h3>Eventos Sintéticos</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={texto} onChange={handleChange} />
                <button type="submit">Enviar</button>
                <button type="button" onClick={handleClick}>Clic</button>
            </form>
        </div>
    );
}

export default EventosSinteticos;
