// Lista de regalos

const gifts = ["Libro", "Acuarelas", "Pizarron", "Cocina de juguete", "Boliche"];

function findGift(gifts, giftName, index = 0) {
    // 1.
    if (index === gifts.length) {
        return `${giftName} no encontrado en la lista.`;
    }
    
    // 2.
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }

    // Llamada recursiva: Buscar en la siguiente posición (index + 1)
    return findGift(gifts, giftName, index + 1);
}

// --- Pruebas ---
// Caso 1: Regalo encontrado
let giftToFind = "Pizarron";
console.log(findGift(gifts, giftToFind)); 
// Salida esperada: "Pizarron está en la posición 2."

// Caso 2: Regalo NO encontrado
giftToFind = "Camión";
console.log(findGift(gifts, giftToFind)); 
// Salida esperada: "Camión no está en la lista."
