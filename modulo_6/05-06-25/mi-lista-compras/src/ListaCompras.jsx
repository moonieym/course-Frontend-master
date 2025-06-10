import { useState } from "react";

function ListaCompras() {
  // Definir el estado para la lista de compras
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState("");

  // Función para agregar un nuevo producto a la lista
  const agregarProducto = () => {
    if (nuevoProducto.trim() !== "") {
      setProductos([...productos, nuevoProducto]);
      setNuevoProducto("");
    }
  };

  // Función para eliminar un producto de la lista
  const eliminarProducto = (index) => {
    // Crear una nueva lista sin el producto en el índice indicado
    const nuevaLista = productos.filter((_, i) => i !== index);
    setProductos(nuevaLista);
  };

  return (
    <div className="ListaCompras-container" style={{ maxWidth: '400px', margin: 'auto', padding: '20px', fontFamily: 'Arial' }}>
      <h2>🛒 Lista de Compras</h2>
      <input
        type="text"
        value={nuevoProducto}
        onChange={(e) => setNuevoProducto(e.target.value)}
        placeholder="Escribe un producto"
        style={{ padding: '8px', width: '70%', marginRight: '10px' }}
      />
      <button onClick={agregarProducto} style={{ padding: '8px 12px' }}>Agregar</button>
      
      <ul style={{ marginTop: '20px', listStyleType: 'none', padding: 0 }}>
        {productos.map((producto, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {producto}
            <button
              onClick={() => eliminarProducto(index)}
              style={{ marginLeft: '10px', padding: '4px 8px' }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaCompras;
