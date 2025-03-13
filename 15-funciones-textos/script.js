//Longuitud = La propiedad length se usa para obtener la longitud de una cadena o un array.
let mensaje = 'Dios es asombroso';
let numeros = [10, 161, 76, 43,76];

console.log(mensaje.length);
console.warn(numeros.length);

//Conversion a texto
let numero = 2020;
console.log(typeof numero);
console.log(typeof numero.toString());

//Conversion a MAYUSCULAS
let lenguaje = 'JavaScript';
console.log(lenguaje.toUpperCase()); 

//Conversion a minusculas
let plato = 'PIZZA HAWAIANA';
console.log(plato.toLowerCase());

//Conseguir una letra concreta
let frase = 'Dios es mi pastor ... ';
console.log(frase.charAt(16));

//Comprobar si una cadena tiene dentro otra
let frase1 = "Al César lo que es del César y a Dios lo que es de Dios";

if (frase1.includes('Dios')) {

    console.log('La palabra Dios se encuentra en la frase1');

} else {

    console.log('Esa palabra no se encuentra en la frase1')
    
}

//Indexof = Busca posicion de una palabra (indice)
let mensaje1 = 'Aprendiendo un lenguaje de programacion JavaScript';
console.log(mensaje1.indexOf('JavaScript')); 

//slice = Extrae parte de un texto
let lenguaje1 = 'Con Angular 19 a fondo';
console.log(lenguaje1.slice(4, 11));
console.log(lenguaje1.slice(4));

//replace = reemplaza una parte de un texto, (replaceAll reemplaza todas las palabras)
let pelicula = 'Rocky I';
console.warn(pelicula.replace('I', 'II'));

let pelicula1 = 'Rocky I, Rocky II, Rocky III';
console.log(pelicula1);
console.warn(pelicula1.replaceAll('Rocky', 'Padrino'));

//trim = elimina espacios en blanco al inicio y final
let email = '   juan@juan.com.co   ';
console.log(email.trim());

//split = separa cadenas por partes, y devuelve un array
let listaCompras = 'huevos, carne, pan, mermelada, cafe, tomates, platanos';
console.warn(listaCompras.split(','));

//substring = extrae una parte de una cadena según índices de inicio y fin
let lenguaje2 = "JavaScript";
console.log(lenguaje2.substring(0, 4)); // Output: "Java"

//Formas de concatenar en JavaScript
let pais = "Colombia";
let ciudad = "Manizales";

// Usando `+`
console.log("Mi país es " + pais + " y mi ciudad es " + ciudad + ".");

// Usando Template Strings
console.log(`Mi país es ${pais} y mi ciudad es ${ciudad}.`);

// Usando `.concat()`
console.log("Mi país es ".concat(pais, " y mi ciudad es ", ciudad, "."));

//startsWith = verifica si una cadena comienza con un texto específico
let mensaje2 = "Angular es genial";
console.log(mensaje2.startsWith("Angular")); // true
console.log(mensaje2.startsWith("React")); // false

//endstring = verifica si una cadena termina con un texto específico
let mensaje3 = "JavaScript es poderoso";
console.log(mensaje3.endsWith("JavaScript")); // true
console.log(mensaje3.endsWith("poderoso"));  // false

//repeat = repite una cadena un número específico de veces
let mensajeFinal = "Angular ";
console.log(mensajeFinal.repeat(3)); // Output: "Angular Angular Angular "

//search = busca una cadena o expresión regular dentro de un texto y devuelve la posición de la primera coincidencia.
let miCadena = 'Trabajando con las cadenas de texto en JavaScript';
console.log(miCadena.search('JavaScript'));

//match() = busca coincidencias en una cadena usando una expresión regular y devuelve un array con los resultados.
console.log(miCadena.match('JavaScript'));