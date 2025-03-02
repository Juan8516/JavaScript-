/*
    ----Ejercicio 1----

    -Calcula cuantas horas le llevaria llegar a la luna a una nave espacial.
    -La distancia desde la tierra hasta la luna es de 384.000 kilometros
    -La velocidad de la nave es de 1225 kilometros por hora
    -Guarda el resultado en una variable.
*/

let distancia = 384000;
let velocidadNave = 1225;

let tiempoRecorrido = distancia/velocidadNave;

console.warn(`El tiempo de recorrido es: ${tiempoRecorrido} horas`);