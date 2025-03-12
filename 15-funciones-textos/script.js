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

//slice = Extre parte de un texto
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

//