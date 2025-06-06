import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import AcercaDe from "./pages/AcercaDe.jsx";
import NavBar from "./components/NavBar.jsx";
import NoEncontrado from "./pages/NoEncontrado.jsx";
import Home from "./pages/home.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/alumnos" element={<></>} />
        <Route path="/alumnos/nuevo" element={<></>} />
        <Route path="/alumnos/:id" element={<></>} />
        <Route path="/alumnos/:id/editar" element={<></>} />
        <Route path="/acerca" element={<AcercaDe/>} />
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
    </Router>
  );
};

export default App;
