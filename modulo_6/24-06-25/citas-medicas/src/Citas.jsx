// src/pages/Citas.jsx
import { Link } from 'react-router-dom';

function Citas() {
  // Aquí podrías obtener las citas de una API o de un array simulado
  const citas = [
    { id: 1, nombre: "Consulta general", fecha: "2025-08-01" },
    { id: 2, nombre: "Revisión de control", fecha: "2025-08-05" },
    { id: 3, nombre: "Cita con especialista", fecha: "2025-08-10" },
  ];

  return (
    <div>
      <h2>Lista de Citas Médicas</h2>
      <ul>
        {citas.map(cita => (
          <li key={cita.id}>
            <Link to={`/cita/${cita.id}`}>
              {cita.nombre} - {cita.fecha}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Citas;
