import React, { useEffect } from 'react';

function Planeta({ nombre }) {
  // useEffect para manejar el ciclo de vida del componente
  useEffect(() => {
    console.log(`¡El planeta ${nombre} ha aparecido!`); // Mensaje al montar el componente

    // Función de limpieza en el desmontaje
    return () => {
      console.log(`¡El planeta ${nombre} ha desaparecido!`); // Mensaje al desmontar el componente
    };
  }, [nombre]); // Se ejecuta cuando el nombre del planeta cambia

  return (
    <div>
      <h4>Planeta: {nombre}</h4>
    </div>
  );
}

export default Planeta;
