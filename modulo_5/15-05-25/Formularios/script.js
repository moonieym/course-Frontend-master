document.getElementById('registroForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let esValido = true;

  // Limpiar mensajes de error
  document.querySelectorAll('.error').forEach(span => span.textContent = '');

  // Validar nombre
  const nombre = document.getElementById('nombre').value.trim();
  if (nombre === '') {
    document.getElementById('errorNombre').textContent = 'El nombre es obligatorio.';
    esValido = false;
  }

  // Validar correo
  const correo = document.getElementById('correo').value.trim();
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexCorreo.test(correo)) {
    document.getElementById('errorCorreo').textContent = 'Ingrese un correo válido.';
    esValido = false;
  }

  // Validar teléfono
  const telefono = document.getElementById('telefono').value.trim();
  const regexTelefono = /^\d{10}$/;
  if (!regexTelefono.test(telefono)) {
    document.getElementById('errorTelefono').textContent = 'Ingrese un teléfono válido de 10 dígitos.';
    esValido = false;
  }

  // Validar intereses
  const intereses = document.querySelectorAll('input[name="intereses"]:checked');
  if (intereses.length === 0) {
    document.getElementById('errorIntereses').textContent = 'Seleccione al menos un interés.';
    esValido = false;
  }

  // Validar horario
  const horario = document.querySelector('input[name="horario"]:checked');
  if (!horario) {
    document.getElementById('errorHorario').textContent = 'Seleccione un horario preferido.';
    esValido = false;
  }

  // Validar fecha
  const fecha = document.getElementById('fecha').value;
  if (!fecha) {
    document.getElementById('errorFecha').textContent = 'Seleccione una fecha para el evento.';
    esValido = false;
  }

  if (esValido) {
    alert('Formulario enviado correctamente.');
    // Aquí puedes agregar la lógica para enviar el formulario
    // e.g., enviar los datos a un servidor usando fetch o XMLHttpRequest
  }
});
