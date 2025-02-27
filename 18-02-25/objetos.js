// Creacion de objetos literales

// Sintaxis creacion

let objeto = {
    propiedad: "valor"
}

// Ejemplos

let persona = {
    nombre: "Monse",
    apellido: "Bustos",
    edad: 25
}

let Jose = {
    nombre: "Jose",
    apellido: "Perez",
    edad: 30
}

let Pedro = {
    nombre: "Pedro",
    apellido: "Garcia",
    edad: 20
}

// Acceder a las propiedades de un objeto

console.log(persona.edad)
console.log(jose.apellido)

// o

console.log(persona["edad"])
console.log(jose["apellido"])

// ejemplo para usar [] para acceder a las propiedades de un objeto
lista_de_propiedades = ["edad", "apellido"]
for (let i = 0; i < lista_de_propiedades.length; i++) {
    console.log(persona[lista_de_propiedades[i]])
}

// Modificacion de propiedades de un objeto

// Sintaxis

objeto.propiedad = "nuevo valor"

// Ejemplo

persona.edad = 26

// Metodos de un objeto

// Sintaxis

/*let */ objeto = {
    metodo: function(parametros) {
        // Codigo

    }
}

// Ejemplo

persona = {
    saludar: function(nombre) {
        console.log("Hola: " + nombre)
    }
}

// llamar a un metodo de un objeto
persona.saludar("Jose")

Pedro = {
    saludar: function(nombre) {
        console.log("Quiubo " + nombre)
    }
}

Pedro.saludar("Monse")

// Uso de this

// Sintaxis

/*let */ objeto = {
    propiedad: "valor",
    metodo: function() {
        console.log(this.propiedad)
    }
}

objeto.metodo()

// Ejemplo

/* let */ persona = {
    nombre: "Monse",
    nombre_en_mayusculas: function() {
        // console.log(this.nombre.toUpperCase())
        return this.nombre.toUpperCase()
    }
}

let result = persona.nombre_en_mayusculas()
console.log(result)

// Iterar propiedades de un objeto

// Sintaxis

/* let */ objeto = {
    propiedad1: "valor1",
    propiedad2: "valor2",
    propiedad3: "valor3",
}

let propiedades = Object.keys(objeto) // ["propiedad1", "propiedad2", "propiedad3"]

for (let i = 0; i < propiedades.length; i++) {
    console.log(objeto[propiedades[i]]) // objeto["propiedad1"]
}

// Ejemplo 

/* let */ persona = {
    nombre: "Monse",
    apellido: "Bustos",
    edad: 25
}

/* let */ propiedades = Object.keys(persona) // ["nombre", "apellido", "edad"]

for (let i = 0; i < propiedades.length; i++) {
    console.log(persona[propiedades[i]]) // persona["nombre"]
} 

// objetos anidados

// Sintaxis

/* let */ objeto = {
    propiedad1: "valor1",
    propiedad2: {
        propiedad3: "valor3"
    }
}

let propiedad2 = objeto.propiedad2 // {propiedad3: "valor3"}
propiedad2.propiedad3 // "valor3"

// o 

objeto.propiedad2.propiedad3

// Ejemplo

/* let */ persona = {
    nombre: "Monse",
    calificaciones: {
        matematicas: 9.0,
        fisica: 8.9
    }
}

console.log(persona.calificaciones.matematicas) // 9.0

/* let */ Pedro = {
    nombre: "Pedro",
    calificaciones: {
        matematicas: 8,
        fisica: 7
    }
}

console.log(Pedro.calificaciones.matematicas) 

// Destructuracion de objetos

// Sintaxis

/* let */ objeto = {
    propiedad1: "valor1",
    propiedad2: {
        propiedad3: "valor3"
    }
    // propiedad4: "valor4"
    // propiedad5: "valor5"
    // ...
}

let {propiedad1} = objeto
console.log(propiedad1)

let {propiedad2: {propiedad3}} = objeto
console.log(propiedad3)

// btw
console.log(propiedad2)

// ejemplo

/* let */ persona = {
    nombre: "Monse",
    calificaciones: {
        matematicas: 9.0,
        fisica: 8.9
    }
}

let {nombre} = persona
console.log(nombre)

let {calificaciones: {matematicas}} = persona
console.log(matematicas)
console.log(calificaciones)