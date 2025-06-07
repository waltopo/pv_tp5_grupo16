import React from 'react';
import EventosSinteticos from './componentes/EventosSinteticos';
import EventosNativo from './componentes/EventosNativo';
import BindingEventos from './componentes/BildingEventos';
import EventoPersonalizado from './componentes/EventoPersonalizado';

function App() {
  return (
      <div className="Contenedor">
        <h1>Demostración de Eventos en React</h1>

        <EventosSinteticos />
        <EventosNativo />
        <BindingEventos />
        <EventoPersonalizado />

        <footer><h2>Grupo 16 - Trabajo Práctico n° 4</h2></footer>
      </div>
  );
}

export default App;
