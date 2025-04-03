// app.js

import { registrarDestino, mostrarItinerario } from './viajes.js';

// Iniciar la aplicación
const iniciarApp = () => {
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");
    registrarDestino("New York", "2024-08-10", "Avión");
    registrarDestino("Tokyo", "2024-09-20", "Avión");

    mostrarItinerario();
};

// Ejecutar la aplicación
iniciarApp();
