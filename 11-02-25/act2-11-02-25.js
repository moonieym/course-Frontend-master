let cantidad_pina = 0;
let cantidad_sandia = 0;
let cantidad_manzana = 0;

//usando emojis
let frutas = ["🍉", "🍉", "🍍", "🍍", "🍏", "🍏", "🍍"];

// imprimir 
for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] == "🍍") {
        cantidad_pina++;
    } else if (frutas[i] == "🍏") {
        cantidad_manzana++;
    } else if (frutas[i] == "🍉") {
        cantidad_sandia++;
    }
}

// cantidad de piñas:
// cantidad de manzanas:
// cantidad de sandias:
console.log("cantidad de piñas🍍:", cantidad_pina);
console.log("cantidad de manzanas🍏:", cantidad_manzana);
console.log("cantidad de sandias🍉:", cantidad_sandia);

