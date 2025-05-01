// Objetos literales: Estructura de datos que permite almacenar información en pares clave-valor.
// Se pueden crear objetos literales utilizando llaves {} y definir propiedades y métodos dentro de ellos.

let pelicula = {

    titulo: "El Padrino",
    protagonista: "Marlon Brando",
    director: "Francis Ford Coppola",
    anio: 1972,
    genero: "Drama",
    descripcion: function () {
        // this: se refiere al contexto actual en el que se ejecuta el código. En este caso, 
        // `this.titulo`, `this.anio` y `this.director` acceden a las propiedades del objeto al que pertenece el método 
        // donde está esta línea de código. Es decir, `this` apunta al objeto que contiene este método.
        return `${this.titulo} es una película de ${this.anio} dirigida por ${this.director}.`;
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
console.log(pelicula.descripcion());


//JSON: JavaScript Object Notation. Es un formato de intercambio de datos ligero y fácil de leer y escribir para humanos y 
//máquinas. Se utiliza comúnmente para enviar datos entre un servidor y un cliente web. JSON es un subconjunto de la 
// sintaxis de objetos literales de JavaScript, pero tiene algunas diferencias clave, como el uso de comillas dobles para l
// as claves y los valores de cadena, y no permite funciones o propiedades que no sean cadenas. JSON es independiente del 
// lenguaje, lo que significa que se puede utilizar en otros lenguajes de programación además de JavaScript.