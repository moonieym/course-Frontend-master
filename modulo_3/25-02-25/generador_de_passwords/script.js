document.addEventListener('DOMContentLoaded', () => {
    // Caracteres disponibles
    const caracteres = {
        mayusculas: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        minusculas: 'abcdefghijklmnopqrstuvwxyz',
        numeros: '0123456789',
        simbolos: '!@#$%^&*()_+-=[]{}|;:,.<>?'
    };

    // Elementos del DOM
    const elementos = {
        password: document.getElementById('password'),
        length: document.getElementById('length'),
        lengthValue: document.getElementById('lengthValue'),
        uppercase: document.getElementById('uppercase'),
        lowercase: document.getElementById('lowercase'),
        numbers: document.getElementById('numbers'),
        symbols: document.getElementById('symbols'),
        strengthLevel: document.getElementById('strengthLevel'),
        generateBtn: document.getElementById('generateBtn'),
        copyBtn: document.getElementById('copyBtn')
    };

    // Inicialización
    function init() {
        actualizarLongitud();
        elementos.generateBtn.addEventListener('click', generarPassword);
        elementos.copyBtn.addEventListener('click', copiarPassword);
        elementos.length.addEventListener('input', actualizarLongitud);
    }

    // Generar contraseña
    function generarPassword() {
        const { value: longitud } = elementos.length;
        let caracteresValidos = '';
        
        if (elementos.uppercase.checked) caracteresValidos += caracteres.mayusculas;
        if (elementos.lowercase.checked) caracteresValidos += caracteres.minusculas;
        if (elementos.numbers.checked) caracteresValidos += caracteres.numeros;
        if (elementos.symbols.checked) caracteresValidos += caracteres.simbolos;

        if (!caracteresValidos) {
            alert('Selecciona al menos un tipo de carácter');
            return;
        }

        let password = '';
        for (let i = 0; i < longitud; i++) {
            password += caracteresValidos.charAt(
                Math.floor(Math.random() * caracteresValidos.length)
            );
        }

        elementos.password.value = password;
        evaluarFortaleza(password);
    }

    // Copiar contraseña
    async function copiarPassword() {
        try {
            await navigator.clipboard.writeText(elementos.password.value);
            alert('Contraseña copiada al portapapeles');
        } catch (err) {
            console.error('Error al copiar:', err);
            // Fallback para navegadores antiguos
            elementos.password.select();
            document.execCommand('copy');
        }
    }

    // Actualizar longitud mostrada
    function actualizarLongitud() {
        elementos.lengthValue.textContent = elementos.length.value;
    }

    // Evaluar fortaleza de la contraseña
    function evaluarFortaleza(password) {
        let puntuacion = 0;
        
        // Criterios de fortaleza
        if (password.length >= 12) puntuacion++;
        if (/[A-Z]/.test(password)) puntuacion++;
        if (/[a-z]/.test(password)) puntuacion++;
        if (/[0-9]/.test(password)) puntuacion++;
        if (/[^A-Za-z0-9]/.test(password)) puntuacion++;

        // Asignar nivel de seguridad
        let nivel = 'DÉBIL';
        if (puntuacion >= 4) nivel = 'FUERTE';
        else if (puntuacion >= 2) nivel = 'MEDIA';

        elementos.strengthLevel.textContent = nivel;
    }

    // Iniciar la aplicación
    init();
});