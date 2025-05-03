// POO: La Programación Orientada a Objetos (POO) es un 
// paradigma de programación que organiza el código en torno a objetos, que son 
// instancias de clases. Estos objetos encapsulan datos (propiedades) y 
// comportamientos (métodos).

// En JavaScript, la POO se puede implementar utilizando clases y objetos.
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

    getRaza() {
        return this.raza; // Método de instancia
    }

    setRaza(nuevaRaza) {
        this.raza = nuevaRaza; // Método de instancia
    }

    set guardarEdad(nuevaEdad) {
        this.edad = nuevaEdad; // Método de instancia
    }

    get sacarEdad() {
        return this.edad; // Método de instancia
    }

}

let miGato1 = new Gato("Tanque", 2, "Siames"); // Crear una instancia de la clase Gato
miGato1.maullar(); // Llamar al método maullar
miGato1.presentar(); // Llamar al método presentar
console.log("");

let miGato2 = new Gato("Mimi", 3, "Persa"); // Crear otra instancia de la clase Gato
miGato2.maullar(); // Llamar al método maullar  
miGato2.presentar(); // Llamar al método presentarse
miGato2.setRaza("Bengalí"); // Cambiar la raza del gato utilizando el método setRaza
console.log("");

//Getter y Setter
console.log(miGato1.getRaza()); // Llamar al método getRaza para obtener la raza del gato
console.log(miGato2.getRaza()); // Llamar al método getRaza para obtener la raza del gato
console.log("");

miGato1.guardarEdad = 4; // Cambiar la edad del gato utilizando el setter
console.log(miGato1.sacarEdad); // Llamar al método getRaza para obtener la raza del gato