/*
Ejercicio 35

Crea un programa que permita mover la ventana a diferentes posiciones de la pantalla.

Usar botones para mover la ventana a la esquina superior izquierda,
superior derecha, inferior izquierda e inferior derecha.
*/

// 
/**
 * Obtiene el ancho de la pantalla del dispositivo en píxeles.
 * @constant {number} anchura - Representa el ancho de la pantalla del dispositivo.
 */
const anchura = window.screen.width;
const altura = window.screen.height;

/**
 * Selecciona el elemento HTML con el ID "arribaIZQ".
 * Se espera que este elemento se utilice para manipulaciones o interacciones específicas del DOM.
 * Asegúrate de que exista un elemento con este ID en el DOM antes de usar esta referencia.
 */
const arribaIZQ = document.querySelector("#arribaIZQ");
const arribaDER = document.querySelector("#arribaDER");
const abajoIZQ = document.querySelector("#abajoIZQ");
const abajoDER = document.querySelector("#abajoDER");
const ventana = document.querySelector("#ventana");

let miVentana = null;

ventana.addEventListener("click", () => {

    miVentana = window.open("https://developer.mozilla.org/es/", "Nueva Ventana", "width=400, height=400");

});

// Abre una nueva ventana con las dimensiones especificadas y la centra en la pantalla.
arribaIZQ.addEventListener("click", () => {

    if(miVentana) {
        
        miVentana.moveTo(0, 0);
    }

});

arribaDER.addEventListener("click", () => {

    if(miVentana) {
        
        miVentana.moveTo(anchura - miVentana.outerWidth, 0);
    }
    
});

abajoIZQ.addEventListener("click", () => {

    if(miVentana) {
        
        miVentana.moveTo(0, altura - miVentana.outerHeight);
    }

});

abajoDER.addEventListener("click", () => {

    if(miVentana) {
        
        miVentana.moveTo(anchura - miVentana.outerWidth, altura - miVentana.outerHeight);
    }

});
