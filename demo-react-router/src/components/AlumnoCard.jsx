import {link} from "react-router-dom";

const ListaDeAlumnos = ({alumnos , onDeleteAlumno,}) => {
  return (
    <div>
      <h3>{alumnos.nombre} {alumnos.apellido}</h3>
      <p>curso: {alumnos.curso}</p>
      <Link to={`/alumnos/${alumnos.id}`}>Ver Detalles</Link>
      <Link to={`/alumnos/${alumnos.id}/editar`}>Editar</Link>
      <button onClick={() => onDeleteAlumno(alumnos.id)}>Eliminar</button>
    </div>
  );
};
export default ListaDeAlumnos;