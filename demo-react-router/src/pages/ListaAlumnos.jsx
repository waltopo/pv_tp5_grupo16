import AlumnoCard from "../components/AlumnoCard";

const ListaAlumnos = ({ alumnos, onDelete }) => {
  return (
    <div className="lista-alumnos">
      <h2>Lista de Alumnos</h2>
      {alumnos.length === 0 ? (
        <p>No hay alumnos registrados.</p>
      ) : (
        alumnos.map((alumno) => (
          <AlumnoCard key={alumno.id} alumno={alumno} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

export default ListaAlumnos;