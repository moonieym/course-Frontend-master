class Persona {

    static altura_promedio = 1.70

    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    nombre_en_mayusculas() {
        return this.nombre.toUpperCase()
    }

    static saludar() {
        console.log("hola")
    }
}

// metodos estaticos

let monse = new Persona("Monse", "Bustos", 1.50);

// metodo regular
console.log(monse.nombre_en_mayusculas());

// metodo estatico
Persona.saludar();

// propiedad estatica
console.log(Persona.altura_promedio);