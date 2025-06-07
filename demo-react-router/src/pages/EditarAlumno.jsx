import { useParams, useNavigate } from "react-router-dom";
import AlumnoForm from "../components/AlumnoForm";

const EditarAlumno = ({ alumnos, onUpdate }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const alumno = alumnos.find((a) => a.id === id);

  if (!alumno) return <p>Alumno no encontrado</p>;

  const handleEdit = (alumnoEditado) => {
    onUpdate(alumnoEditado);
    navigate("/alumnos");
  };

  return (
    <div>
      <h2>Editar Alumno</h2>
      <AlumnoForm initialData={alumno} onSubmit={handleEdit} />
    </div>
  );
};

export default EditarAlumno;