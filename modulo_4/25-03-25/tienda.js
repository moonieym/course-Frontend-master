// 1. Arreglo productos
const productos = [
    { nombre: "Vestido", precio: 100, categoria: "Ropa" },
    { nombre: "Audifonos", precio: 250, categoria: "Electronica" },
    { nombre: "Libreta", precio: 15, categoria: "Libreria" },
    { nombre: "Pantalon", precio: 50, categoria: "Ropa" },
    { nombre: "Tablet", precio: 800, categoria: "Electronica" },
];

// 2. Filtrar productos por precio
const productosBaratos = productos.filter(producto => producto.precio < 100);
console.log("Productos bajos de $100:", productosBaratos);

// 3. Ordenar alfabeticamente por nombre (A-Z)
const productosOrdenados = productosBaratos.sort((a, b) =>
    a.nombre.localeCompare(b.nombre)
);
console.log("Productos ordenados A-Z:", productosOrdenados);

// 4. Extraer solo los nombres
const nombresProductos = productosOrdenados.map(producto => producto.nombre);
console.log("Nombres de productos:", nombresProductos);

// 5. Calcular total del precio de productos baratos
const totalBaratos = productosBaratos.reduce((suma, producto) => suma + producto.precio, 0);
console.log("Total de productos baratos: $", totalBaratos);

// 6. ¿Todos los productos baratos son de categoría "Ropa"?
const todosSonRopa = productosBaratos.every(producto  => producto.categoria === "Ropa");
console.log("¿Todos los productos baratos son ropa?", todosSonRopa ? "Sí" : "No"); 