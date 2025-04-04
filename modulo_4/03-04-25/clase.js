// Factorial

// 5! = 5 * 4 * 3 * 2 * 1
// 9! = 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1

function factorial(x) {
    debugger;
    if (x === 0) { // condicion de parada | caso base
        return 1;
    }
    return x * factorial(x - 1); // se llama a si misma
}

let total = factorial(9); //primera llamada
console.log(total);

//factorial(9) 
//-> factorial(9 - 1) -> factorial(8)
//-> factorial(8 - 1) -> factorial(7)
//...

