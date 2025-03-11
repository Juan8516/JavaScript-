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