let mesasDisponibles = 5; // ejemplo: el restaurante tiene 5 mesas disponibles

// 1. Verificar disponibilidad
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    if (mesasSolicitadas <= mesasDisponibles) {
      resolve(`Hay disponibilidad para ${mesasSolicitadas} mesa(s).`);
    } else {
      reject(`No hay suficientes mesas disponibles. Solo quedan ${mesasDisponibles}.`);
    }
  });
}

// 2. Simular envío de correo
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    const exito = Math.random() > 0.3; // 70% de éxito simulando envío
    setTimeout(() => {
      if (exito) {
        resolve(`Correo enviado a ${nombreCliente} con la confirmación de la reserva.`);
      } else {
        reject('Error al enviar el correo de confirmación.');
      }
    }, 1000);
  });
}

// 3. Función principal con async/await y manejo de errores, con estilos en consola
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
    console.log(`%c✔️ ${disponibilidad}`, 'color: green; font-weight: bold');

    const confirmacion = await enviarConfirmacionReserva(nombreCliente);
    console.log(`%c📩 ${confirmacion}`, 'color: dodgerblue; font-weight: bold');

    console.log(`%c✅ Reserva confirmada para ${nombreCliente}, ${mesasSolicitadas} mesa(s).`, 'color: purple; font-weight: bold');
  } catch (error) {
    console.error(`%c❌ Error: ${error}`, 'color: red; font-weight: bold');
  }
}

// 4. Pruebas
hacerReserva('Ana', 3);  // Éxito esperado
hacerReserva('Luis', 6); // Error por falta de mesas
