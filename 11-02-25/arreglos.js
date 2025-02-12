// Arreglos

let a = [1, 2, 3, 4, 5];

// push-> agrega al final
a.push(6);
console.log(a);

// pop -> elimina al final

a.pop();
console.log(a);

//unshift -> agrega al inicio

a.unshift(0);
console.log(a);  

//shift -> elimina al inicio

a.shift();
console.log(a);

// sort -> ordena

let b = [4,1,6,8,2,5,6,7];
b.sort();
console.log(b);

// map -> modificar todos los elementos

let c = [1,2,3,4,5];
let d = c.map(function(elemento){
    return elemento * 2;
});

console.log(d);