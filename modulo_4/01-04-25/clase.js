// Estructuras de datos 

// Pila

// Implementacion

const pila = {
    elementos: [],
    push: function(elemento) {
        this.elementos.push(elemento);
    },
    pop: function() {
        if (!this.estaVacia()) {
            return this.elementos.pop();
        } else {
            throw new Error("La pila esta vacia");
        }
    },
    estaVacia: function() {
        return this.elementos.length === 0;
    },
    tamaño: function() {
        return this.elementos.length;
    },
    tope: function() {
        if (!this.estaVacia()) {
            return this.elementos[this.elementos.length - 1];
        } else {
            throw new Error("La pila esta vacia");
        }
    }
};

// uso 

// Pila inicial ["Wikipedia", "Love Me like You Do", "Cincuenta sombras de Grey (pelicula)", "Jamie Dornan", "Calvin Klein"]

pila.push("Wikipedia");
pila.push("Love Me like You Do");
pila.push("Cincuenta sombras de Grey (pelicula)");
pila.push("Jamie Dornan");
pila.push("Calvin Klein");

console.log(pila.tope()) // peek

console.log("------------------")

// Regresar hasta el ultimo elemento
function base_de_la_pila(pila) {
    let tope
while(!pila.estaVacia()) tope = pila.pop()
return tope
}

console.log(base_de_la_pila(pila))