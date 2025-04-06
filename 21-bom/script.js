//BOM - Browser Object Model

//Alertas y dialogos
// alert("Hola Mundo desde un alert"); // Muestra un mensaje de alerta al usuario
// confirm("¿Quieres continuar?") //Devuelve true o false  
// prompt("¿Cuál es tu nombre?") //Devuelve el valor ingresado por el usuario

//Window
console.log(window); // Muestra el objeto window en la consola

console.log(window.innerWidth); // Muestra el ancho de la ventana del navegador
console.log(window.innerHeight); // Muestra la altura de la ventana del navegador

console.log(window.outerWidth, window.outerHeight); // Muestra el ancho de la ventana del navegador incluyendo la barra de 
                                                    // herramientas

console.log(window.closed); // Indica si la ventana actual del navegador está cerrada (solo funciona si la ventana fue abierta 
                            // por el script)

console.log(window.navigator, window.document); // Muestra información sobre el navegador y el documento actual

/*
window.setInterval(() => {
    console.log("Hola Mundo desde setInterval"); // Ejecuta una función cada 1000ms (1 segundo)
}, 1000); // Se puede usar clearInterval para detener la ejecución de la función
*/

console.log(window.screenX); // Muestra la posición horizontal de la ventana del navegador en la pantalla
console.log(window.screenY); // Muestra la posición vertical de la ventana del navegador en la pantalla

//Navigator
console.log(navigator); // Muestra información sobre el navegador

if(navigator.onLine) {

    console.log("Conectado a Internet"); // Indica si el navegador está conectado a Internet

}

/*Location - Objeto de ubicación
* El objeto `location` proporciona información sobre la URL actual del documento
* y permite manipularla. Incluye propiedades como `href`, `protocol`,
* `host`, `pathname`, y métodos como `reload()` para recargar la página actual.
*/
console.log(location.href); // Muestra la URL actual del documento
console.log(location.protocol); // Muestra el protocolo de la URL actual (http: o https:)
console.log(location.host); // Muestra el host de la URL actual (ejemplo.com)
console.log(location.pathname); // Muestra la ruta de la URL actual (/ruta/ejemplo.html)
//console.log(location.reload()); // Recarga la página actual
