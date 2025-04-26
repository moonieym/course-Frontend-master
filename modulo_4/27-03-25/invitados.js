const invitados = ["Alicia", "Andres", "Beatriz", "Carlos", "Cecilia", "Daniela", "Diego", "Elena", "Esteban", "Fernando"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente <  arr.length) {
        // primer letra de cada nombre

        const inicialActual = arr[inicio][0].toLowerCase();
        const inicialSiguiente = arr[siguiente][0].toLowerCase();

        if (inicialActual === inicialSiguiente) {
            return [arr[inicio], arr [siguiente]];
        }

        inicio++;
        siguiente++;
    }

    return null; // si no encuentra ningun par
}

console.log(encontrarPareja(invitados));
// Resultado: [ "Alicia", "Andres" ]