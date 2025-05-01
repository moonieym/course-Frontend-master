const fs = require('fs');
const path = './notas.json';

// Función para inicializar el archivo si no existe
function inicializarArchivo() {
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, '[]', 'utf8');
  }
}

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - Título de la nota.
 * @param {string} contenido - Contenido de la nota.
 */
function agregarNota(titulo, contenido) {
  inicializarArchivo();
  const notas = obtenerNotas();
  const notaExistente = notas.find(nota => nota.titulo === titulo);

  if (notaExistente) {
    console.log(`¡Error! Ya existe una nota con el título "${titulo}".`);
    return;
  }

  notas.push({ titulo, contenido });
  guardarNotas(notas);
  console.log('✅ Nota agregada con éxito.');
}

/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
  inicializarArchivo();
  const notas = obtenerNotas();

  if (notas.length === 0) {
    console.log('No hay notas guardadas.');
    return;
  }

  console.log('📝 **Tus Notas**');
  notas.forEach((nota, index) => {
    console.log(`\n${index + 1}. Título: ${nota.titulo}`);
    console.log(`   Contenido: ${nota.contenido}`);
  });
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - Título de la nota a eliminar.
 */
function eliminarNota(titulo) {
  inicializarArchivo();
  const notas = obtenerNotas();
  const notasFiltradas = notas.filter(nota => nota.titulo !== titulo);

  if (notas.length === notasFiltradas.length) {
    console.log(`⚠️ No se encontró una nota con el título "${titulo}".`);
    return;
  }

  guardarNotas(notasFiltradas);
  console.log(`🗑️ Nota "${titulo}" eliminada correctamente.`);
}

// ---- Funciones auxiliares ----
function obtenerNotas() {
  const data = fs.readFileSync(path, 'utf8');
  return JSON.parse(data);
}

function guardarNotas(notas) {
  fs.writeFileSync(path, JSON.stringify(notas, null, 2), 'utf8');
}

// ---- Ejemplo de uso ----
agregarNota('Compras', 'Leche, pan, huevos');
agregarNota('Tareas', 'Estudiar JavaScript');
listarNotas();
eliminarNota('Compras');
listarNotas();