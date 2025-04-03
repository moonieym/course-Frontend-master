// sintaxis
function nombre_de_la_funcion(parametros) {
}

//para llamarla
let parametros = null
nombre_de_la_funcion(parametros)

//ejemplo
function saludar() {
    console.log("Hola")
}

saludar()
saludar()
saludar()
saludar()

//ejemplo con parametros
function saludar(nombre) {
    // let nombre = "Monse"
    console.log("Hola " + nombre)
}

saludar("Monse")

function multiplicarNumeros(a,b) {
    let c = a*b
    console.log(c)
}

multiplicarNumeros(2, 5)

//return
function saludar(nombre) {
    console.log("Hola: " + nombre)
}

function pasar_a_mayusculas(nombre) {
    return nombre.toUpperCase()
}

let nombre_minusculas = "monse"

//pasar a mayusculas
let nombre_mayusculas = pasar_a_mayusculas(nombre_minusculas)
saludar(nombre_mayusculas)

//scope
let numero_cien = 100

function multiplicar_por_cien(x, numero_cien) {
    return x*numero_cien
}

let result = multiplicar_por_cien(5, 400)
console.log(result)

console.log("-----------------------")

//ejemplo
let persona_random = "Rebeca"
function escuela() {
    let padre_de_familia = "Roberto"
    let alumno = "Nestor"

    function patio() {
        let alumno = "Carlos"

        console.log(alumno)
        console.log(padre_de_familia)
        console.log(persona_random)
    }

    patio()
}

escuela()

//funciones anonimas

// usando funciones como parametros
function saludar_con_estilo(nombre, estilo) {
    return "Hola: " + estilo(nombre)
}

function formal(nombre) {
    return "Sr./Sra. " + nombre
}

function informal(nombre) {
    return "compa " + nombre
}

result = formal("Nestor")
console.log(result)

result = saludar_con_estilo("Monse", informal)
console.log(result)

// usar funciones anonimas
let mi_nombre = "Monse"
result = saludar_con_estilo(mi_nombre, formal)
console.log(result)

result = saludar_con_estilo(mi_nombre, function(nombre) {
    return "Hace mucho que no te veia, como te ha ido? " + nombre
})
console.log(result)

//funcion flecha
let mi_var = 5

/*function mi_func() {
}*/

/*
let mi_func = function() {
}

let mi_func = () => {
    return
}

let mi_funct = (a,b) => a*b
let mi_funct = a => a*a
*/

// ejemplos de funciones flecha
let suma = function(a,b) {
    return a + b
}

let resta = (a,b) => {
    return a - b
}

let multiplicar = (a,b) => a*b

let al_cuadrado = a => a*a

let operarar = (op, val_a, val_b) => op(val_a, val_b)

operarar((a,b) => a + b, 5, 10)