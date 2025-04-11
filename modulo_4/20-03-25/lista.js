// Lista vacía
let listaDeCompras = [];

// Función para agregar productos sin duplicados
const agregarProducto = (producto) => {
  if (!listaDeCompras.includes(producto)) {
    listaDeCompras.push(producto);
    console.log(`✅ Producto agregado: ${producto}`);
  } else {
    console.log(`⚠️ El producto "${producto}" ya está en la lista.`);
  }
};

// Función para eliminar productos
const eliminarProducto = (producto) => {
  const index = listaDeCompras.indexOf(producto);
  if (index !== -1) {
    listaDeCompras.splice(index, 1);
    console.log(`🗑️ Producto eliminado: ${producto}`);
  } else {
    console.log(`❌ El producto "${producto}" no se encontró en la lista.`);
  }
};

// Función para mostrar la lista
const mostrarLista = () => {
  if (listaDeCompras.length === 0) {
    console.log("🛒 La lista de compras está vacía.");
  } else {
    console.log("📋 Lista de compras:");
    listaDeCompras.forEach((producto, index) => {
      console.log(`${index + 1}. ${producto}`);
    });
  }
};

// Ejemplo de uso:
console.log("Agregando productos...");
agregarProducto("Manzanas");
agregarProducto("Pan");
agregarProducto("Leche");
agregarProducto("Pan");//intenta agregar un producto duplicado

console.log("\nMostrando la lista actual:");
mostrarLista();

console.log("\nEliminando un producto...");
eliminarProducto("Leche");
eliminarProducto("Cafe"); // Intenta eliminar un producto que no existe

console.log("\nMostrando lista final:");
mostrarLista();