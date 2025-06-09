import './style.css';

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const mensaje = document.getElementById('mensaje');
const historialLista = document.getElementById('historial');

const historial = [];

botonAdivinar.addEventListener('click', () => {
    const numeroJugador = parseInt(inputNumero.value);

    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
        mensaje.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
    } 
    
    historial.push(numeroJugador);
    actualizarHistorial();
    
    if (numeroJugador === numeroSecreto) {
        mensaje.textContent = '🎉¡Felicidades! ¡Adivinaste el número!';
        botonAdivinar.disabled = true;
        inputNumero.disabled = true;
    } else if (numeroJugador < numeroSecreto) {
        mensaje.textContent = '⬆️ El número es más alto.';
    } else {
        mensaje.textContent = '⬇️ El número es más bajo.';
    }

    inputNumero.value = '';
    inputNumero.focus();
});

function actualizarHistorial() {
    historialLista.innerHTML = '';
    historial.forEach((num, index) => {
        const li = document.createElement('li');
        li.textContent = `Intento ${index + 1}: ${num}`;
        historialLista.appendChild(li);
    });
}