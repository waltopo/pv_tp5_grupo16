import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AlumnoList from './components/AlumnoList';
import AlumnoForm from './components/AlumnoForm';
import AlumnoDetail from './components/AlumnoDetail';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alumnos" element={<AlumnoList />} />
        <Route path="/alumnos/nuevo" element={<AlumnoForm />} />
        <Route path="/alumnos/:id" element={<AlumnoDetail />} />
        <Route path="/alumnos/:id/editar" element={<AlumnoForm />} />
      </Routes>
    </Router>
  );
}

export default App;