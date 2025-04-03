let colores = ["rosa", "morado", "negro", "blanco"];

//imprime el segundo color
console.log(colores[1]); //imprime morado

//Cambia el tercer color a otro color
colores[2] = "azul"; //cambia negro a azul

//agrega un color al final
colores.push("verde");

//elimina el primer color
colores.shift();

//imprime el array
console.log(colores); //imprime ["morado", "azul", "verde"]