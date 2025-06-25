import React, { useState } from 'react';

function RegistroPlaneta({ onRegistrarPlaneta }) {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagen, setImagen] = useState(null);
    const [imagenPreview, setImagenPreview] = useState(null);

    // Función para manejar el cambio en el input de nombre
  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  // Función para manejar el cambio en el input de descripción
  const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };

  // Función para manejar el cambio en el input de imagen
  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagen(file); // Guardamos el archivo seleccionado
      setImagenPreview(URL.createObjectURL(file)); // Creamos una URL para la vista previa
    }
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Llamamos al callback para registrar el planeta
    onRegistrarPlaneta({
      nombre,
      descripcion,
      imagen,
    });

    // Limpiar el formulario
    setNombre('');
    setDescripcion('');
    setImagen(null);
    setImagenPreview(null);
  };

  return (
    <div>
      <h2>Registrar un Nuevo Planeta</h2>
      <form onSubmit={handleSubmit}>
        {/* Campo para el nombre del planeta */}
        <div>
          <label htmlFor="nombre">Nombre del Planeta:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={handleNombreChange}
            required
          />
        </div>

        {/* Campo para la descripción del planeta */}
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={handleDescripcionChange}
            required
          />
        </div>

        {/* Campo para la imagen del planeta (opcional) */}
        <div>
          <label htmlFor="imagen">Cargar Imagen (opcional):</label>
          <input
            type="file"
            id="imagen"
            accept="image/*"
            onChange={handleImagenChange}
          />
        </div>

        {/* Vista previa de la imagen seleccionada */}
        {imagenPreview && (
          <div>
            <h4>Vista Previa:</h4>
            <img src={imagenPreview} alt="Vista previa" width="200" />
          </div>
        )}

        {/* Botón para enviar el formulario */}
        <div>
          <button type="submit">Registrar Planeta</button>
        </div>
      </form>
    </div>
  );
}

export default RegistroPlaneta;
