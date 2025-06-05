import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio.jsx";
import ListaAlumnos from "./pages/ListaAlumnos.jsx";
import NuevoAlumno from "./pages/NuevoAlumno.jsx";
import DetalleAlumno from "./pages/DetalleAlumno.jsx";
import EditarAlumno from "./pages/EditarAlumno.jsx";
import AcercaDe from "./pages/AcercaDe.jsx";
import NavBar from "./components/NavBar.jsx";
import './App.css';
import { cargarAlumnos, guardarAlumnos } from "./data/alumnosData.js";

function App() {
  const [alumnos, setAlumnos] = useState(() => cargarAlumnos());

  useEffect(() => {
    guardarAlumnos(alumnos);
  }, [alumnos]);

  const agregarAlumno = (nuevoAlumno) => {
    setAlumnos([...alumnos, nuevoAlumno]);
  };

  const eliminarAlumno = (id) => {
    setAlumnos(alumnos.filter((a) => a.id !== id));
  };

  const actualizarAlumno = (alumnoActualizado) => {
    setAlumnos(
      alumnos.map((a) =>
        a.id === alumnoActualizado.id ? alumnoActualizado : a
      )
    );
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route
          path="/alumnos"
          element={<ListaAlumnos alumnos={alumnos} onDelete={eliminarAlumno} />}
        />
        <Route
          path="/alumnos/nuevo"
          element={<NuevoAlumno onAdd={agregarAlumno} />}
        />
        <Route
          path="/alumnos/:id"
          element={<DetalleAlumno alumnos={alumnos} />}
        />
        <Route
          path="/alumnos/:id/editar"
          element={<EditarAlumno alumnos={alumnos} onUpdate={actualizarAlumno} />}
        />
        <Route path="/acerca" element={<AcercaDe />} />
      </Routes>
    </Router>
  );
}
export default App;
