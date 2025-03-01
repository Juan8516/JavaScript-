/*
    ----Ejercicio 17----

    --Usuario ingresa dos numeros:
    -Se muestran los numeros impares que hay entre los numeros

*/

let numero1 = parseInt(prompt('Ingresa 1er numero: '));
let numero2 = parseInt(prompt('Ingresa 2do numero: '));

if(numero1 > numero2) {

    [numero1, numero2] = [numero2, numero1]

}

console.log(`Los numeros impares entre ${numero1} y ${numero2}`);

for(let contador = numero1 + 1; contador < numero2; contador++) {

    if(contador % 2 !== 0) {
        console.log(contador)
    }
}