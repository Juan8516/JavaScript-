// Objetos literales: Estructura de datos que permite almacenar información en pares clave-valor.
// Se pueden crear objetos literales utilizando llaves {} y definir propiedades y métodos dentro de ellos.

let pelicula = {

    titulo: "El Padrino",
    protagonista: "Marlon Brando",
    director: "Francis Ford Coppola",
    elenco: ["Marlon Brando", "Al Pacino", "James Caan", "Diane Keaton", "Robert Duvall"],
    anio: 1972,
    genero: "Drama",
    descripcion: function () {
        // this: se refiere al contexto actual en el que se ejecuta el código. En este caso, 
        // `this.titulo`, `this.anio` y `this.director` acceden a las propiedades del objeto al que pertenece el método 
        // donde está esta línea de código. Es decir, `this` apunta al objeto que contiene este método.
        return `${this.titulo} es una película de ${this.anio} dirigida por ${this.director}.`;
    },
    mostrarElenco: function () {
        
        console.log("Elenco de actores:");

        this.elenco.forEach(nombre => {
            console.log(nombre);
        });
    },
    detalles: {
        duracion: 175, // Duración en minutos
        calificacion: "R", // Clasificación por edades
        idiomaOriginal: "Inglés",
        paisDeProduccion: "Estados Unidos",
    }
};

// Acceder a las propiedades del objeto utilizando la notación de punto o la notación de corchetes.
console.log(
    //primera forma de acceder a las propiedades del objeto(recomendada)
    pelicula.titulo, // El Padrino

    //segunda forma de acceder a las propiedades del objeto
    pelicula["protagonista"], // Marlon Brando

    //Llamado de todo el objeto
    pelicula,
);

// Modificar propiedades del objeto utilizando la notación de punto(modifica el objeto original).
pelicula.protagonista = "Al Pacino";
console.log(pelicula.protagonista); // Al Pacino

// Agregar un propiedad al objeto utilizando la notación de punto.
pelicula.secuela = "El Padrino II";
console.log(pelicula.secuela); // El Padrino II

// Llamar al método `descripcion` del objeto `pelicula` para obtener una descripción de la película.
console.log(" ");
console.log(pelicula.descripcion());

// Llamar al método `mostrarElenco` del objeto `pelicula` para mostrar el elenco de actores.
console.log(" ");
console.log(pelicula.mostrarElenco());

// Llamar a la propiedad `detalles` del objeto `pelicula` para acceder a información adicional sobre la película.
console.log(" ");
console.log(pelicula.detalles);
console.log(pelicula.detalles.duracion); // 175
console.log(pelicula.detalles.calificacion); // R

// Eliminar una propiedad del objeto utilizando la palabra clave `delete`.
delete pelicula.genero;
console.log(pelicula); // {titulo: "El Padrino", protagonista: "Al Pacino", director: "Francis Ford Coppola", elenco: Array(5), anio: 1972, …}
console.log(" ");

//JSON: JavaScript Object Notation. Es un formato de intercambio de datos ligero y fácil de leer y escribir para humanos y 
//máquinas. 
// Se utiliza comúnmente para enviar datos entre un servidor y un cliente web. JSON es un subconjunto de la 
// sintaxis de objetos literales de JavaScript, pero tiene algunas diferencias clave, como el uso de comillas dobles para 
// las claves y los valores de cadena, y no permite funciones o propiedades que no sean cadenas. JSON es independiente del 
// lenguaje, lo que significa que se puede utilizar en otros lenguajes de programación además de JavaScript.

let palaDePadel = {
    marca: "Bullpadel",
    modelo: "Hack",
    peso: 360,
    materialMarco: "Carbono",
    materialNucleo: "Eva"
};

console.log(palaDePadel);
console.log(" ");

let palaDePadelJSON = JSON.stringify(palaDePadel); // Convierte el objeto a una cadena JSON.
console.log(palaDePadelJSON);

let objetoConvertido = JSON.parse(palaDePadelJSON); // Convierte la cadena JSON de nuevo a un objeto.
console.log(objetoConvertido); // {marca: "Bullpadel", modelo: "Hack", peso: 360, materialMarco: "Carbono", materialNucleo: "Eva"}

// Recordar que JSON es un formato de intercambio de datos, no un objeto JavaScript.

let caja = document.querySelector("#datos");

for(let index in palaDePadel){

    caja.innerHTML += `<p>${index}: ${palaDePadel[index]}</p>`; // Agregar los datos al HTML

} // Agregar los datos al HTML