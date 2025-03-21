const auto = {
    marca: "Toyota",
    modelo: "Tacoma",
    año: 2020,
    mostrarInfo: function() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`);
    }
};

// Llamamos al metodo para mostrar la informacion
auto.mostrarInfo();