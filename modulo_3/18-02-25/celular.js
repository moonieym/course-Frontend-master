const celular = {
    marca: "Samsung",
    modelo: "S24 Ultra",
    año: 2024,
    mostrarInfo: function() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`);
    }
};

// Llamamos al metodo para mostrar la informacion
celular.mostrarInfo();