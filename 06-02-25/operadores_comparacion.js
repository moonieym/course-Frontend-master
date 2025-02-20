// igualdad debil
let a = "palabra"
let b = "palabra"

console.log(a == b) // true

let x = 0
let y = "0"

console.log(x == y) // true

// igualdad fuerte
console.log(a === b) // true
console.log(x === y) // false

// desigualdad debil
console.log(a != b) // false

// desigualdad fuerte
console.log(a !== b) // false

// mayor que
let z = 10
let w = 5

console.log(z > w) // true

// menor que
console.log(z < w) // false

// mayor o igual que
console.log(z >= w) // true

// menor o igual que
console.log(z <= w) // false

let edad_minima = 18
let edad = 18

console.log(edad >= edad_minima)