// viajes.js

// Array para guardar los destinos
const destinos = [];

// Costo base por destino
const costosDestino = {
    "Paris": 500,
    "Londres": 400,
    "New York": 600,
    "Tokyo": 700,
    "Sydney": 800,
    "Buenos Aires": 900,
    "Rio de Janeiro": 1000,
    "Cancun": 1100,
    "Marrakesh": 1200,
    "Ibiza": 1300
};

// Costo adicional por tipo de transporte
const costosTransporte = {
    "Avión": 200,
    "Tren": 100,
    "Barco": 150,
    "Auto": 50
};

// Función para calcular el costo del viaje
const calcularCosto = (destino, transporte, personas = 1) => {
    let costoBase = costosDestino[destino] || 300;
    costoBase += costosTransporte[transporte] || 50;

    // Aplicar descuentos por grupo
    if (personas >= 2 && personas <= 3) {
        costoBase *= 0.9; // 10% de descuento
    } else if (personas >= 4) {
        costoBase *= 0.8; // 20% de descuento
    }

    return costoBase * personas; // Multiplicar por el número de personas
};

// Función para registrar un destino de viaje
const registrarDestino = (destino, fecha, transporte, personas = 1) => {
    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        personas,
        costo: calcularCosto(destino, transporte, personas)
    };
    destinos.push(nuevoViaje);
};

// Función para mostrar el itinerario de los viajes registrados
const mostrarItinerario = () => {
    if (destinos.length === 0) {
        console.log("No hay viajes registrados aún.");
        return;
    }

    destinos.forEach((viaje, index) => {
        console.log(`Viaje #${index + 1}`);
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Personas: ${viaje.personas}`);
        console.log(`Costo total: $${viaje.costo.toFixed(2)}`);
        console.log("---------------------------");
    });
};

// Exportar funciones para usarlas en otros archivos
export { registrarDestino, mostrarItinerario };