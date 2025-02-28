/*
    ----Ejercicio 13----

    --Un canguro salta 3 metros cada vez:
    -Hacer un programa que diga cuantos saltos ha dado el canguro.
    -Cual es la distancia recorrida en 17 saltos.

*/

const saltokangorou = 3;
let distancia = 17;

let distanciaRecorrida = 0;

for(let contador = 1; contador <= distancia; contador++) {

    distanciaRecorrida += saltokangorou;

    console.log(`El canguro ha saltado ${contador} saltos
                 Ha recorrido ${distanciaRecorrida} metros`)
}