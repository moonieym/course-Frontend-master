import { useParams } from 'react-router-dom';

function CitaDetalle() {
  const { id } = useParams(); // Obtenemos el parámetro dinámico :id de la URL

  // Aquí puedes realizar alguna lógica para obtener los detalles de la cita
  // Si tienes un listado de citas o una API, podrías obtener los detalles de la cita usando el id.

  return (
    <div>
      <h2>Detalles de la Cita</h2>
      <p>ID de la cita: {id}</p>
      {/* Mostrar más detalles de la cita */}
      {/* Por ejemplo, podrías consultar una API o un listado de citas para mostrar más información */}
    </div>
  );
}

export default CitaDetalle;
