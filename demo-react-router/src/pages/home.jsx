export default function Home() {
  return (
    <div class="container">

        <div class="card card-welcome">
            <h1 class="title">¡Bienvenido al Sistema de Gestión de Alumnos!</h1>
            <p>
                Te damos la bienvenida a nuestra plataforma integral diseñada para simplificar y optimizar la
                administración de la información de los estudiantes. Esta aplicación ha sido desarrollada
                utilizando las tecnologías como <strong>React</strong> y <strong>Vite</strong>, para
                ofrecer una experiencia de usuario rápida, fluida y eficiente.
            </p>
            <p>
                Nuestra misión es proporcionarte una herramienta centralizada y fácil de usar que te permita
                manejar todos los aspectos relacionados con los datos de tus alumnos, desde su inscripción
                inicial hasta la actualización continua de su información personal y académica.
            </p>
        </div>

        <div class="card card-dark">
            <h2>¿Qué puedes hacer con nuestro sistema?</h2>
            <p>
                Esta aplicación te permite realizar todas las operaciones fundamentales para una gestión completa,
                conocida como CRUD (Crear, Leer, Actualizar y Eliminar). A continuación, te detallamos las
                funcionalidades clave a las que puedes acceder desde el menú de navegación:
            </p>
            <ul>
                <li>
                    <strong>Visualizar la Lista de Alumnos:</strong> Accede a un listado completo de todos los
                    estudiantes registrados en el sistema.
                </li>
                <li>
                    <strong>Agregar Nuevos Alumnos:</strong> A través de un formulario intuitivo, podrás registrar a
                    nuevos estudiantes de manera sencilla.
                </li>
                <li>
                    <strong>Editar Información Existente:</strong> Mantener los datos actualizados es crucial. Con un
                    solo clic podrás modificar la información de un alumno.
                </li>
                <li>
                    <strong>Ver Detalles del Alumno:</strong> Consulta la ficha completa con toda la información
                    registrada de un estudiante en particular.
                </li>
                <li>
                    <strong>Eliminar Registros:</strong> Elimina registros de forma segura, con una confirmación previa
                    para evitar accidentes.
                </li>
            </ul>
        </div>

        <div class="card card-navigation">
            <h2>Navegación y Experiencia de Usuario</h2>
            <p>
                Hemos implementado <strong>React Router DOM</strong> para asegurar una navegación fluida y sin
                interrupciones entre las distintas secciones de la aplicación. Podrás moverte fácilmente
                entre el inicio, el listado de alumnos y los formularios de creación o edición, todo ello sin
                necesidad de recargar la página.
            </p>
            <p>
                Te invitamos a explorar todas las funcionalidades. Para comenzar, puedes dirigirte a la sección
                <strong>"Lista de Alumnos"</strong> para ver los estudiantes actuales o a <strong>"Nuevo Alumno"</strong> para agregar uno nuevo.
            </p>
        </div>

    </div>
  );
}