/*
Ejercicio 36

Crea un programa de texto que cuente cuantas teclas ha pulsado el usuario,
dentro de una caja.

Muestra el numero de teclas pulsadas en tiempo real en la web.
*/

let contador = document.querySelector("#contador");
let cajaPulsaciones = document.querySelector("#pulsaciones");
let pulsacionesReales = 0;

contador.addEventListener("input", () => {

    pulsacionesReales++;
    cajaPulsaciones.textContent = `Teclas pulsadas: ${pulsacionesReales}`;

});
