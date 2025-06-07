const schema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  correo: z.string().email("Debe ser un correo válido"),
  contrasena: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

const form = document.getElementById("registro-form");
const inputs = {
  nombre: document.getElementById("nombre"),
  correo: document.getElementById("correo"),
  contrasena: document.getElementById("contrasena"),
};

const errores = {
  nombre: document.getElementById("nombre-error"),
  correo: document.getElementById("correo-error"),
  contrasena: document.getElementById("contrasena-error"),
};

function mostrarErrores(errorMap) {
  // Limpiar errores anteriores
  Object.keys(errores).forEach((campo) => {
    errores[campo].textContent = "";
  });

  // Mostrar errores nuevos
  Object.entries(errorMap).forEach(([campo, mensaje]) => {
    errores[campo].textContent = mensaje;
  });
}

// Validación en tiempo real
Object.keys(inputs).forEach((campo) => {
  inputs[campo].addEventListener("input", () => {
    const datos = {
      nombre: inputs.nombre.value,
      correo: inputs.correo.value,
      contrasena: inputs.contrasena.value,
    };

    const resultado = schema.safeParse(datos);

    if (!resultado.success) {
      const errorMap = resultado.error.flatten().fieldErrors;
      mostrarErrores(errorMap);
    } else {
      mostrarErrores({}); // Limpiar si no hay errores
    }
  });
});

// Validación al enviar
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const datos = {
    nombre: inputs.nombre.value,
    correo: inputs.correo.value,
    contrasena: inputs.contrasena.value,
  };

  const resultado = schema.safeParse(datos);

  if (!resultado.success) {
    const errorMap = resultado.error.flatten().fieldErrors;
    mostrarErrores(errorMap);
  } else {
    mostrarErrores({});
    alert("Formulario enviado con éxito ✅");
    // Aquí podrías enviar los datos al servidor, por ejemplo usando fetch()
  }
});
