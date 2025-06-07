function ComponenteHijo({ onNotificar }) {
    const manejarGuardado = () => {
        onNotificar("Guardado exitoso desde el hijo");
    };

    return (
        <div className="card">
            <h3>Componente Hijo</h3>
            <button onClick={manejarGuardado}>Guardar</button>
        </div>
    );
}

export default ComponenteHijo;
