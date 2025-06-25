import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import Planeta from './Planeta';  
import RegistroPlaneta from './RegistroPlaneta';

function App() {
  // Estado para la nave
  const [distancia, setDistancia] = useState(0); // Distancia recorrida
  const [combustible, setCombustible] = useState(100); // Combustible
  const [estadoNave, setEstadoNave] = useState("En órbita"); // Estado de la nave
  const [planetasVisitados, setPlanetasVisitados] = useState([]); // Planetas visitados

  // Estado para los campos del formulario
  const [nuevoPlaneta, setNuevoPlaneta] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);
  const [imagenPreview, setImagenPreview] = useState(null);

  // useEffect para simular el vuelo
  useEffect(() => {
    console.log("¡El panel de control está listo!");
    
    const vueloIntervalo = setInterval(() => {
      setCombustible((prevCombustible) => Math.max(prevCombustible - 1, 0)); // Reducir combustible
      setDistancia((prevDistancia) => prevDistancia + 10); // Aumentar distancia
    }, 1000); // Intervalo de 1 segundo

    // Función de limpieza en desmontaje
    return () => {
      clearInterval(vueloIntervalo);
      console.log("El panel de control se ha apagado.");
    };
  }, []); 

  // useMemo para mostrar el estado de la nave
  const mensajeEstado = useMemo(() => {
    return `Estado de la nave: ${estadoNave}`;
  }, [estadoNave]);

  // Función para aterrizar la nave
  const aterrizarNave = () => {
    if (combustible <= 0) {
      alert('No puedes aterrizar, el combustible es 0.');
    } else {
      setEstadoNave("Aterrizando");
      setPlanetasVisitados((prevPlanetas) => [...prevPlanetas, 'Planeta Desconocido']);
    }
  };

  // Función para agregar un nuevo planeta
  const agregarPlaneta = (e) => {
    e.preventDefault();

    // Validar si el planeta ya existe
    if (planetasVisitados.some((planeta) => planeta.nombre === nuevoPlaneta)) {
      alert('Este planeta ya ha sido registrado.');
      return;
    }

    const nuevoPlanetaObj = {
      nombre: nuevoPlaneta,
      descripcion,
      imagen: imagen ? URL.createObjectURL(imagen) : null,
    };

    setPlanetasVisitados([...planetasVisitados, nuevoPlanetaObj]);

    // Limpiar los campos del formulario
    setNuevoPlaneta('');
    setDescripcion('');
    setImagen(null);
    setImagenPreview(null);
  };

  // Función para manejar la carga de imágenes y mostrar vista previa
  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagen(file);
      setImagenPreview(URL.createObjectURL(file)); // Crear vista previa de la imagen
    }
  };

  // Función para aumentar el combustible
  const aumentarCombustible = () => {
    if (combustible < 100) {
      setCombustible(combustible + 10); // Aumenta el combustible en 10
    }
  };

  // Función para disminuir el combustible
  const disminuirCombustible = () => {
    if (combustible > 0) {
      setCombustible((prevCombustible) => Math.max(prevCombustible - 10, 0)); // Disminuye el combustible en 10
    }
  };

  // Función para eliminar un planeta
  const handleDelete = (index) => {
    const nuevosPlanetas = [...planetasVisitados];
    nuevosPlanetas.splice(index, 1); // Eliminar el planeta en el índice especificado
    setPlanetasVisitados(nuevosPlanetas); // Actualizar el estado con la lista de planetas actualizada
  };

  // Función para editar un planeta
  const handleEdit = (index) => {
    const planeta = planetasVisitados[index];
    setNuevoPlaneta(planeta.nombre);
    setDescripcion(planeta.descripcion);
    setImagen(null);
    setImagenPreview(planeta.imagen);
    setPlanetasVisitados(planetasVisitados.filter((_, i) => i !== index)); // Eliminar temporalmente el planeta para re-agregarlo después de la edición
  };

  return (
    <div className="App">
      <h1>Explorador Espacial</h1>

      {/* Información del viaje */}
      <div>
        <h3>Distancia recorrida: {distancia} años luz</h3>
        <h3>Combustible restante: {combustible}%</h3>
        <h3>Estado de la nave: {mensajeEstado}</h3>
      </div>

      {/* Botones para manejar el combustible */}
      <div>
        <button onClick={aumentarCombustible}>Aumentar Combustible</button>
        <button onClick={disminuirCombustible}>Disminuir Combustible</button>
      </div>

      {/* Botón "Aterrizar" */}
      <div>
        <button onClick={aterrizarNave}>Aterrizar</button>
      </div>

      {/* Formulario de Registro de Planeta */}
      <h2>Registrar un Nuevo Planeta</h2>
      <form onSubmit={agregarPlaneta}>
        <div>
          <label>Nombre del Planeta:</label>
          <input 
            type="text" 
            value={nuevoPlaneta}
            onChange={(e) => setNuevoPlaneta(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Descripción:</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Imagen del Planeta (opcional):</label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImagenChange}
          />
        </div>

        {imagenPreview && (
          <div>
            <h4>Vista Previa de la Imagen:</h4>
            <img src={imagenPreview} alt="Vista previa" width="200" />
          </div>
        )}

        <button type="submit">Registrar Planeta</button>
      </form>

      {/* Mostrar la lista de planetas registrados */}
      <h3>Planetas Visitados:</h3>
      <ul>
        {planetasVisitados.map((planeta, index) => (
          <li key={index}>
            <h4>{planeta.nombre}</h4>
            <p>{planeta.descripcion}</p>
            {planeta.imagen && 
              <img 
                src={planeta.imagen} 
                alt={planeta.nombre} 
                width="100" 
              />}
              <button onClick={() => handleDelete(index)}>Eliminar</button>
              <button onClick={() => handleEdit(index)}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
