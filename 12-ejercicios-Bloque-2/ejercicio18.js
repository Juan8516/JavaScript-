/*
    ----Ejercicio 18----

    --Tenemos una coleccion de numeros desde 1 al 17:
    -El usuario tiene que adivinar cual es el elegido

    🔮🪄Un programa que pueda adivinar el numero

*/

const numAdivinar = 8;
let intento;

while(intento != numAdivinar) {

    intento = parseInt(prompt('Ingresar numero de 1 a 17'));

    if(numAdivinar === intento) {
        
        alert(`Correcto el numero era es el: ${intento}`);
        
    } else {
        
        alert('Sigue intentando !!!!!');
    }
}


