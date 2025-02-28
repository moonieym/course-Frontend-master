// array de libros leidos 
let librosLeidos = ["México tierra de leyendas", "Esto va de chicas"];

// agregar un libro
function agregarLibro(titulo) {
    if (titulo && typeof titulo === "string") {
        librosLeidos.push(titulo);
        console.log("Libro agregado: " + titulo);
    } else {
        console.log("Por favor, ingresa un título de libro válido.");
    }
}

// mostrar libros leidos
function mostrarLibrosLeidos() {
    if (librosLeidos.length > 0) {
        console.log("Lista de libros leidos: ");
        console.table(librosLeidos);
    } else {
        console.log("Aun no has agregado ningun libro.");
    }
}

// ejemplos
agregarLibro("Diario de Ana Frank");
mostrarLibrosLeidos();