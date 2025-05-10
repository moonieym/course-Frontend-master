// objeto JSON
let biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true }
    ]
};

// lectura de datos con callbacks
function leerDatos(callback) {
    setTimeout(() => {
        console.log("Leyendo datos de la biblioteca...");
        callback(biblioteca);
    }, 1000); 
}

// Crear funciones para consultar, agregar y actualizar libros
// Función mostrarLibros() para consultar:
function escribirDatos(nuevosDatos, callback) {
    setTimeout(() => {
        console.log("Escribiendo datos en la biblioteca...");
        biblioteca = nuevosDatos; 
        callback();
    }, 1000);
}

// Mostrar todos los libros de la biblioteca
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("📚 Lista de libros: ");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
        console.log("--------------");
    });
}
// Función agregarLibro() para agregar libros:
function agregarLibro(titulo, autor, genero, disponible) {
    leerDatos((datos) => {
        const nuevoLibro = { titulo, autor, genero, disponible };
        datos.llibros.push(nuevoLibro);

        escribirDatos(datos, () => {
            console.log(` ✅ Libro "${titulo}" agregado correctamente.`);
            mostrarLibros();
        });
    });
}

// Función actualizarDisponibilidad() para actualizar:
function actualizarDisponibilidad(titulo, nuevoEstado) {
    leerDatos((datos) => {
        const libro = datos.libros.find(libro => libro.titulo === titulo);
        if (libro) {
            libro.disponible = nuevoEstado;
            escribirDatos(datos, () => {
                console.log(`🔁 Disponibilidad del libro "${titulo}" actualizada a ${nuevoEstado ? `Disponible` : `Prestado`}.`);
                mostrarLibros();
            });
        } else {
            console.log(`❌ No se encontro el libro con titulo "${titulo}".`);
        }
    });
}

// Ejecucion de aplicacion
mostrarLibros();
setTimeout(() => {
    agregarLibro("El Principito", "Antoine de Saint-Exupéry", "Fábula", true);
}, 1500);

setTimeout(() => {
    actualizarDisponibilidad("1984", false);
}, 4000);