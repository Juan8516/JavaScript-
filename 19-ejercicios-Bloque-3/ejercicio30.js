/*
    ----Ejercicio 30----

    -Crea una funcion que reciba un numero y devuelva su factorial.

*/

function factorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log(factorial(prompt('Ingresa un numero y devolvere su factorial: ')));