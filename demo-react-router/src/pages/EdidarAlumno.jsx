import {useParams, useNavigate} from "react-router-dom";
import AlumnoForm from " ../components/AlumnoForm.jsx";

const EditarAlumno = ({alumnos, onUpdate}) => {
    const {id} = useParams();
    const alumno = alumnos.find((a) => a.id === id);
    const navigate = useNavigate();

    if (!alumno) return <p>Alumno no encontrado</p>;

    const handleEdit = (alumnoEditado) => {
        onUpdate(alumnoEditado);
        navigate('/alumnos');
    };
    return (
        <div>
            <h2>Editar Alumno</h2>
            <AlumnoForm
                inicialData={alumno}
                onSubmit={handleEdit}
            />
        </div>
    );
}


export default EditarAlumno;