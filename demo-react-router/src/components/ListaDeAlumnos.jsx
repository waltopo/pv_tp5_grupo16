import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Text, Button } from '@chakra-ui/react';

const ListaDeAlumnos = () => {
  const [alumnos, setAlumnos] = useState([]);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de eliminar este alumno?")) {
      setAlumnos(alumnos.filter(alumno => alumno.id !== id));
    }
  };

  return (
    <Box p={5}>
      <Text fontSize="2xl">Lista de Alumnos</Text>
      <table>
        <thead>
          <tr>
            <th>LU</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Curso</th>
            <th>Email</th>
            <th>Domicilio</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map(alumno => (
            <tr key={alumno.id}>
              <td>{alumno.LU}</td>
              <td>{alumno.nombre}</td>
              <td>{alumno.apellido}</td>
              <td>{alumno.curso}</td>
              <td>{alumno.email}</td>
              <td>{alumno.domicilio}</td>
              <td>{alumno.telefono}</td>
              <td>
                <Button onClick={() => navigate(`/alumnos/${alumno.id}/editar`)}>Editar</Button>
                <Button onClick={() => handleDelete(alumno.id)} ml={2}>Eliminar</Button>
                <Button onClick={() => navigate(`/alumnos/${alumno.id}`)} ml={2}>Ver Detalles</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default ListaDeAlumnos;