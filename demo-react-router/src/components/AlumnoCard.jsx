import {Link} from "react-router-dom";

const AlumnoCard=({ alumno, onDelete }) =>{
  return (
    <div className="alumno-card">
      <h3>{alumno.nombre} {alumno.apellido}</h3>
      <p>Curso: {alumno.curso}</p>
      <Link to={`/alumnos/${alumno.id}`}>Ver Detalles</Link> | 
      <Link to={`/alumnos/${alumno.id}/editar`}>Editar</Link> | 
      <button onClick={() => onDelete(alumno.id)}>Eliminar</button>
    </div>
  );
};

export default AlumnoCard;