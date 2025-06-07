import AlumnoForm from "../components/AlumnoForm";
import { useNavigate } from "react-router-dom";

const NuevoAlumno = ({ onAdd }) => {
  const navigate = useNavigate();

  const handleSubmit = (nuevoAlumno) => {
    const alumnoConId = { ...nuevoAlumno, id: Date.now().toString() };
    onAdd(alumnoConId);
    navigate("/alumnos");
  };


  return (
    <div>
      <h2>Nuevo Alumno</h2>
      <AlumnoForm
        initialData={{
          id: "",
          nombre: "",
          apellido: "",
          curso: "",
          email: "",
          domicilio: "",
          telefono: ""
        }}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default NuevoAlumno;