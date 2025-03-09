/*
    ----Ejercicio 12----

    --Programa que pida dos numeros, y diga:
    -Cual es mayor
    -Cual es menor
    -O sin son iguales

    *Si el dato ingresado no es un numero o son menores a 0, volver a pedir

*/

let numero1 = parseInt(prompt('Ingresar 1er numero: '));
let numero2 = parseInt(prompt('Ingresar 2do numero: '));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {

    numero1 = parseInt(prompt('Ingresar 1er numero: '));
    numero2 = parseInt(prompt('Ingresar 2do numero: '));
}

if(numero1 === numero2) {

    alert('Los numeros son iguales !!!!');

} else if (numero1 > numero2) {

    alert(`
        El primer numero es mayor !!!!
        El segundo numero es menor !!!!
    `);

} else if(numero1 < numero2) {

    alert(`
        El primer numero es menor !!!!
        El segundo numero es mayor !!!!
    `);

} else {

    alert('No has ingresado un numero');

}


