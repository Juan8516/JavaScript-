//Función anónima = Es una función sin nombre que se asigna a una variable o 
//se usa directamente como argumento.

const saludo = function() {

    console.log('Hola Simon como estas !!!!');

}

saludo();

//Función callback = Es una función que se pasa como argumento a otra 
//función y se ejecuta dentro de ella.

/*
let veces = 0;

setInterval(function () {
    
    veces++;
    console.log(`Funcion ejecutada ${veces} veces`);

}, 1000);

setInterval(saludo, 2000);
*/

//Funciones Callbacks - avanzado
// function restame(n1, n2, mostrar, multiPorTres) {

//     let resta = n1 - n2;

//     mostrar(resta);
//     multiPorTres(resta);

//     return resta;
// }

// restame(100, 5, function(resultado) {

//     console.log(resultado);

// }, 
// function(resultado) {

//     console.log(resultado * 3);

// });

//Ambito de las variables

/*Global = Una variable declarada fuera de cualquier función o bloque tiene ámbito global y 
puede ser accedida desde cualquier parte del código.*/

// let rutaGit = ('https://github.com/Juan8516');

// function mostrarRuta() {

//     //Global - Llamado de la variable dentro de la funcion
//     console.warn(rutaGit);

//     //Local = Las variables declaradas dentro de una función solo pueden ser accedidas dentro de esa función. 
//     // No existen fuera de ella.
//     let nombre = ("Ruta Git Juan Manuel Salazar");

// }

// //Local - Llamado de la variable fuera de la funcion
// console.error(nombre); //❌ Error: mensaje is not defined
// mostrarRuta();

/*Bloque = Con let y const, las variables tienen ámbito de bloque {}. Solo existen dentro del bloque en 
el que fueron declaradas.*/

// if (true) {

//     let bloque = "Solo existo aquí";
//     console.log(bloque); // 👉 "Solo existo aquí"
    
// }

// console.log(bloque); // ❌ Error: bloque is not defined

//Hoisting o elevacion = El hoisting es un comportamiento de JavaScript donde las declaraciones de variables y funciones se 
//"mueven" al inicio de su contexto (global o función) antes de que el código se ejecute.

//let carro = 'Mercedes';
//console.log(carro);// ❌ Cannot access 'carro' before initialization

console.log(carro1); // 👉 undefined (hoisting ocurre)
var carro1 = 'Ferrari';