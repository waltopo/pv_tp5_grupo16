import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const ListaDeAlumnos = () => {
  const alumnos = [alumnos, setAlumnos] = useState([]);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de eliminar este alumno?")) {
        setAlumnos(alumnos.filter(alumno => alumno.id !== id));}
  };

  return (
    <Box p={5}>
        <Text fontSize="2x1">Lista de Alumnos</Text> 
        <table>
            <thead>
                <tr>
                <th>LU</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Curso</th>
                <th>Email</th>
                <th>Domicilio</th>
                <th>Telefono</th>
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
                    <Td>
                       <Button OnClick={() => navigate(`/alumnos/${alumno.id}/editar`)}>Editar</Button>
                       <Button OnClick={() => handleDelete(alumno.id)} ml={2}>Eliminar</Button>
                       <Button OnClick={() => navigate(`/alumnos/${alumno.id}/`)} ml={2}>Ver Detalles</Button>
                    </Td>
                </tr>
                ))}
            </tbody>
        </table>
    </Box>
  );
};
export default ListaDeAlumnos;