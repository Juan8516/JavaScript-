// POO: La Programación Orientada a Objetos (POO) es un 
// paradigma de programación que organiza el código en torno a objetos, que son 
// instancias de clases. Estos objetos encapsulan datos (propiedades) y 
// comportamientos (métodos).

class Gato {
    //Propiedades o atributos
    constructor(nombre, edad, raza) {
        this.nombre = nombre; // Propiedad de instancia
        this.edad = edad; // Propiedad de instancia
        this.raza = raza; // Propiedad de instancia
    }

    //Métodos
    maullar() {
        console.log(`${this.nombre} dice: ¡Miau!`); // Método de instancia
    }

    presentar() {
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y soy de la raza ${this.raza}.`); // Método de instancia
    }
}