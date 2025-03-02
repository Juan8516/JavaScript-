/*
    ----Ejercicio 19----

    --Mostrar todos los numeros divisores de un numero que se introduce en un prompt

*/

let numero = parseInt(prompt('Ingresa numero para validar sus divisores: ',1));

for(let contador = 1; contador <= numero; contador++) {

    if(numero % contador == 0) {

        console.log(`El ${contador} es divisor de ${numero}`);
    }

}