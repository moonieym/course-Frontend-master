function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b == 0) {
        return "No se puede dividir por cero";
    }
    return a / b;
}

//calcular
console.log("Suma: " + sumar(15, 10));
console.log("Resta: " + restar(28, 9));
console.log("Multiplicacion: " + multiplicar(5, 12));
console.log("Division: " + dividir(49, 7));