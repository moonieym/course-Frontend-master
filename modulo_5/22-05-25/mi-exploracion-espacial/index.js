const planetas = require('./planetas');

// Aquí mostraremos la información de los planetas
console.log("🚀 Enviando reporte desde la nave exploradora...\n");

planetas.forEach(planeta => {
  console.log(`🌍 ¡Planeta ${planeta.nombre} descubierto!`);
  console.log(`📝 Descripción: ${planeta.descripcion}`);
  console.log(`📅 Descubierto en: ${planeta.descubiertoEn}`);
  console.log('---');
});

// Contar planetas
console.log(`🔢 Número total de planetas registrados: ${planetas.length}\n`);

// Mostrar planeta aleatorio
const planetaAleatorio = planetas[Math.floor(Math.random() * planetas.length)];
console.log("🪐 Planeta aleatorio encontrado:");
console.log(`🌍 ${planetaAleatorio.nombre}`);
console.log(`📝 ${planetaAleatorio.descripcion}`);
console.log(`📅 Descubierto en: ${planetaAleatorio.descubiertoEn}`);