// Caracteres posibles para la contraseña
const caracteres = {
    mayusculas: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    minusculas: "abcdefghijklmnopqrstuvwxyz",
    numeros: "0123456789",
    simbolos: "!@#$%^&*()_+[]{}|;:,.<>?"
};

// Elementos del DOM
const elementos = {
    password: document.getElementById("password"),
    length: document.getElementById("length"),
    lengthValue: document.getElementById("lengthValue"),
    uppercase: document.getElementById("uppercase"),
    lowercase: document.getElementById("lowercase"),
    numbers: document.getElementById("numbers"),
    symbols: document.getElementById("symbols"),
    strengthLevel: document.getElementById("strengthLevel"),
    generateBtn: document.getElementById("generateBtn"),
    copyBtn: document.getElementById("copyBtn")
};

// Función para generar la contraseña
function generarPassword() {
    const longitud = elementos.length.value;
    let caracteresValidos = "";
    
    if (elementos.uppercase.checked) caracteresValidos += caracteres.mayusculas;
    if (elementos.lowercase.checked) caracteresValidos += caracteres.minusculas;
    if (elementos.numbers.checked) caracteresValidos += caracteres.numeros;
    if (elementos.symbols.checked) caracteresValidos += caracteres.simbolos;

    if (!caracteresValidos) {
        alert("Selecciona al menos un tipo de carácter");
        return;
    }

    let password = "";
    for (let i = 0; i < longitud; i++) {
        password += caracteresValidos.charAt(
            Math.floor(Math.random() * caracteresValidos.length)
        );
    }

    elementos.password.value = password;
    evaluarFortaleza(password);
}

// Función para copiar la contraseña
function copiarPassword() {
    elementos.password.select();
    document.execCommand("copy");
    alert("Contraseña copiada al portapapeles");
}

// Función para actualizar la longitud mostrada
function actualizarLongitud() {
    elementos.lengthValue.textContent = elementos.length.value;
}

// Función para evaluar la fortaleza
function evaluarFortaleza(password) {
    let fortaleza = 0;
    
    // Longitud mínima
    if (password.length >= 12) fortaleza++;
    
    // Tipos de caracteres
    if (/[A-Z]/.test(password)) fortaleza++;
    if (/[a-z]/.test(password)) fortaleza++;
    if (/[0-9]/.test(password)) fortaleza++;
    if (/[^A-Za-z0-9]/.test(password)) fortaleza++;

    // Asignar nivel
    let nivel = "DÉBIL";
    if (fortaleza >= 4) nivel = "FUERTE";
    else if (fortaleza >= 2) nivel = "MEDIA";

    elementos.strengthLevel.textContent = nivel;
}

// Event Listeners
elementos.length.addEventListener("input", actualizarLongitud);
elementos.generateBtn.addEventListener("click", generarPassword);
elementos.copyBtn.addEventListener("click", copiarPassword);

// Inicialización
actualizarLongitud();