class libro {
    constructor(titulo, autor, año, estado) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.estado = estado;
        this.capitulos = []; //lista de capitulos
    }

    describirLibro() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.año}, el estado es: ${this.estado}.`);
    }

    agregarCapitulo(capitulo) {
        this.capitulos.push(capitulo);
        console.log(`Capitulo "${capitulo}" agregado al libro "${this.titulo}".`);
    }

    eliminarCpitulo(capitulo) {
        const index = this.capitulos.indexOf(capitulo);
        if (index !== -1) {
            this.capitulos.splice(index, 1);
            console.log(`Capitulo "${capitulo}" eliminado del libro "${this.titulo}".`);
        } else {
            console.log(`El capitulo "${capitulo}" no encontrado en el libro.`);
        }
    }

    listarCapitulos() {
        console.log(`Capitulos del libro "${this.titulo}":`, this.capitulos.length > 0 ? this.capitulos.join(", ") : "No hay capitulos.");
    }
}

// ejemplo de uso
const libro1 = new libro("El Señor de los Anillos", "JRR Tolkien", 1954, "Disponible");
libro1.describirLibro();
libro1.agregarCapitulo("La Comunidad del Anillo");
libro1.agregarCapitulo("El Castillo del Poder");
libro1.listarCapitulos();
libro1.eliminarCpitulo("El Castillo del Poder");
libro1.listarCapitulos();