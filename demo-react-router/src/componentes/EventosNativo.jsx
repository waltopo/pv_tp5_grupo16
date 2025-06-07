import React, { useEffect, useState } from 'react';

function EventoNativo() {
    const [ancho, setAncho] = useState(window.innerWidth);

    useEffect(() => {
        const manejarResize = () => {
            setAncho(window.innerWidth);
        };

        window.addEventListener('resize', manejarResize);

        return () => window.removeEventListener('resize', manejarResize);
    }, []);

    return (
        <div className="card">
            <h3>Evento Nativo</h3>
            <p>Ancho de la ventana {ancho}px</p>
        </div>
    );
}

export default EventoNativo;
