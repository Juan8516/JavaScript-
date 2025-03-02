/*
    ----Ejercicio 21----

    --Calculadora
    -Pida al menos dos numeros por pantalla
    -Si metemos uno mal que los vuelva a pedir en una alerta.
    -Por la consola, el resultado de sumar, restar, multiplicar y dividir esa dos cifras. 

*/

let numero1;
let numero2;

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {

    numero1 = parseInt(prompt('Ingresa 1er numero: '));
    numero2 = parseInt(prompt('Ingresa 2do numero: '));

}

suma = numero1 + numero2
console.log(`La suma de ${numero1} + ${numero2} = ${suma}`);

resta = numero1 - numero2
console.log(`La resta de ${numero1} - ${numero2} = ${resta}`);

producto = numero1 * numero2
console.log(`La multiplicacion de ${numero1} * ${numero2} = ${producto}`);

division = numero1 / numero2
console.log(`La division de ${numero1} / ${numero2} = ${division}`);
