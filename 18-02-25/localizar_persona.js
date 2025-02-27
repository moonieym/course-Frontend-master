// Buscador: ______________

let lista_de_personas = [
    {nombre: "Nestor", apellido: "Garcia", edad: 25},
    {nombre: "Dana", apellido: "Martinez", edad: 28},
    {nombre: "Jose", apellido: "Perez", edad: 30},
]

let buscar_persona = (nombre) => {
    for (let i = 0; i < lista_de_personas.length; i++) {
        let persona = lista_de_personas[i]
        if(persona.nombre == nombre) {
            return persona
        }
    }
}

let result = buscar_persona("Nestor")
console.log(result)