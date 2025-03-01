/*
    ----Ejercicio 16----

    --Usuario ingresa un numero:
    -muestra la tabla de multiplicar de ese numero

*/

let numero = parseInt(prompt('Ingresar numero: '))
let limite = parseInt(prompt('Ingresar limite: '))

console.warn(`La tabla del ${numero}`)

for(let contador = 1; contador <= limite; contador++) {

    resultado = numero * contador
    console.log(`${numero} X ${contador} = ${resultado}`)

}