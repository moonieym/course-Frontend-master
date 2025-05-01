function findMax(arr) {
    // 1. Agregar condicion
    if (arr.length === 1) {
        return arr[0];
    }

    // 2. Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2); // punto medio
    const left = arr.slice(0, mid); // mitad izquierda
    const right = arr.slice(mid); // mitad derecha

    // 3. Encontrar el maximo de cada mitad
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // 4. Encontrar el maximo de los dos maximos
    return Math.max(leftMax, rightMax);
}

// Ejemplo de uso
const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
console.log(findMax(numbers)); // Salida: 9