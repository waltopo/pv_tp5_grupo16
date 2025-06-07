export const cargarAlumnos = () => {
    const datos = localStorage.getItem('alumnosData');
    return datos ? JSON.parse(datos) : [];
};

export const guardarAlumnos = (alumnos) => {
    localStorage.setItem('alumnosData', JSON.stringify(alumnos));
};