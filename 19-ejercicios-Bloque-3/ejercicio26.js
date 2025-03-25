/*
    ----Ejercicio 26----

    -Dado un array de palabras, contar cuantas letras tiene una palabra
    y crear un nuevo array que contenga las cantidades en numeros.

    🔠
*/

function contarLetras(datos) {

    let datoNuevo = datos.map(elemento => elemento.length);
    
    return datoNuevo;

}

const palabras = [
    "libro", "sol", "correr", "feliz", "montaña",
    "sorpresa", "computadora", "jugar", "rápido", "cielo",
    "espejo", "cantar", "brillante", "océano", "llave",
    "dormir", "tranquilo", "bicicleta", "pintar", "sabio"
];

console.log(contarLetras(palabras));