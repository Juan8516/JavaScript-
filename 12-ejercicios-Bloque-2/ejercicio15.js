/*
    ----Ejercicio 15----

    --Muestra la suma y la media:
    -De numeros ingresados por el usuario
    *Hasta introducir un numero negativo.

*/

let suma = 0;
let media = 0;
let contador = 0;

do {

    numero = parseInt(prompt('Ingresar numero: ', 0));
    
    if(isNaN(numero)) {

        numero = 0;

    } else if(numero >= 0) {

        suma += numero;
        contador++;
    }
    
}while(numero > 0)

console.log(`La suma de los valores ingresados: ${suma}`);
console.log(`La media de los valores ingresados: ${suma / contador}`);