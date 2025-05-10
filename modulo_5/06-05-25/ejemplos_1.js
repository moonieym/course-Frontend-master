// Callbacks

// Settimeout
const callback = saludar = () => {
    console.log("Hola!")
}
const tiempo_en_milisegundos = 3000

setTimeout(callback, tiempo_en_milisegundos)

// Saludos con estilo
const saludoFormal = (mensaje) => {
    return `Buenas tardes ${mensaje}`
}

const saludoCasual = (mensaje) => {
    return `Que onda ${mensaje}`
}

const saludarFn = (tipoSaludo, nombre) => {
    console.log(`saludando a ${nombre} con tipo de saludo ${tipoSaludo}`)
    return tipoSaludo(nombre)
}

console.log(saludarFn(saludoCasual, "Monse"))
console.log(saludarFn(saludoFormal, "Monse"))
console.log(saludarFn((mensaje) => `Hola, que tal ${mensaje}`, "Monse"))
console.log(saludarFn(function(mensaje) {return `Hola, que tal ${mensaje}` } , "Monse"))

// Uso de callbacks en los API's