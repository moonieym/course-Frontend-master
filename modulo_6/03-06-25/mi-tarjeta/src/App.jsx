import Tarjeta from './Tarjeta.jsx';

function App() {
  return (
    <div>
      <h1>Tarjeta de Presentación</h1>
      {/* Renderizamos el componente Tarjeta */}
      <Tarjeta 
      nombre="Ana Pérez" 
      profesion="Desarrolladora Web" 
      mensaje="¡Bienvenido a mi tarjeta de presentación!" 
      />
    </div>
  );
}

export default App;