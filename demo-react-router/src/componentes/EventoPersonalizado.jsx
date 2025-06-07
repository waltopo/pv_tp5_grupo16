import React from 'react';
import ComponenteHijo from './ComponenteHijo';

function EventoPersonalizado() {
    const recibirNotificacion = (mensaje) => {
        alert(mensaje);
    };

    return (
        <div className="card">
            <h3>Evento Personalizado</h3>
            <ComponenteHijo onNotificar={recibirNotificacion} />
        </div>
    );
}

export default EventoPersonalizado;
