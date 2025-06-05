import { useState, useEffect } from "react";

const alumnoInicial = {
  id: "",
  nombre: "",
  apellido: "",
  curso: "",
  email: "",
  domicilio: "",
  telefono: ""
};

const AlumnoForm = ({ initialData, onSubmit }) => {
  const [form, setForm] = useState(alumnoInicial);

  useEffect(() => {
    setForm(initialData || alumnoInicial);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    if (!initialData?.id) {
      setForm(alumnoInicial);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {["id", "nombre", "apellido", "curso", "email", "domicilio", "telefono"].map(field => (
        <input
          key={field}
          name={field}
          value={form[field]}
          onChange={handleChange}
          placeholder={field}          
          required

        />
      ))}
      <button type="submit">
        {initialData?.id ? "Actualizar" : "Guardar"}
      </button>
    </form>
  );
};

export default AlumnoForm;