/*
    ----Ejercicio 29----

    -Crea una funcion que reciba una palabra y devuelva cuantas vocales tiene.

*/

function contarVocales(palabra) {
    let contaddor = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === 'a' || palabra[i] === 'e' || palabra[i] === 'i' || palabra[i] === 'o' || palabra[i] === 'u') {
            contaddor++;
        }
    };
    return contaddor;
}

console.log(contarVocales("Hola Mundo")); // 4
console.log(contarVocales("Javascript")); // 3
console.log(contarVocales("Juan Manuel")); // 5