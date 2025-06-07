import React from 'react';

function BindingEventos() {
    const manejarClick = () => {
        alert("Función manejadora ejecutada");
    };

    return (
        <div className="card">
            <h3>Binding de Eventos</h3>
            <button onClick={manejarClick}>Haz clic</button>
        </div>
    );
}

export default BindingEventos;
