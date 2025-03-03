class Libro {
    constructor(titulo, autor, anio, estado) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.estado = estado;
        this.capitulos = []; // lista de capitulos
    }
    
    describirLibro() {
    console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor}, en el año ${this.anio}, el estado es: ${this.estado}.`);
    }
    
    agregarCapitulo(capitulo) {
    this.capitulos.push(capitulo);
    console.log(`Capitulo "${capitulo}" agregado`);
    }
    
    eliminarCapitulo(capitulo) {
        let index = this.capitulos.indexOf(capitulo);
        if (index !== -1) {
            this.capitulos.splice(index, 1);
            console.log(`Capitulo "${capitulo}" eliminado`);
        } else {
            console.log(`Capitulo "${capitulo}" no encontrado`);
        }
    }
    
    mostrarCapitulos() {
        if (this.capitulos.length === 0) {
            console.log("No hay capitulos en el libro");
        } else {
            console.log(`Capitulos de "${this.titulo}":`);
            this.capitulos.forEach((cap, index) => console.log(`${index + 1}. ${cap}`));
        }
    }
}

// crear un libro
let libro1 = new Libro("Esto va de chicas", "Cristina Valbuena y Cristina Alonso", 2021, "disponible");

// usar metodos
libro1.describirLibro();
libro1.agregarCapitulo("LUNES");
libro1.agregarCapitulo("MARTES");
libro1.mostrarCapitulos();
libro1.eliminarCapitulo("LUNES");
libro1.mostrarCapitulos();