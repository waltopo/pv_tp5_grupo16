import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import AcercaDe from "./pages/AcercaDe.jsx";
import NavBar from "./components/NavBar.jsx";

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
      </Routes>
    </Router>
  );
};

export default App;
