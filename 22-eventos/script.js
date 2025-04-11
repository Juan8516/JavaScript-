//Eventos

/**
 * Selecciona todos los elementos con el ID "botocito" y les agrega un evento de click.
 * 
 * Cuando se hace clic en el botón, se muestra una alerta con el mensaje 
 * "Hola, has hecho click en el botón" y se registra el mismo mensaje en la consola.
 *
 */
let clickBoton = document.querySelector("#boton"); // Selecciona el primer elemento con el ID "boton"

clickBoton.addEventListener("click", (event) => {

    alert("Hola, has hecho click en el botón"); // Muestra una alerta al usuario
    console.log("Hola, has hecho click en el botón");// Registra un mensaje en la consola
    console.log(event); // Muestra el evento en la consola
    console.log(event.target); // Muestra el elemento que disparó el evento en la consola
    console.log(event.type); // Muestra el tipo de evento en la consola
    
});

//Doble click
let clickDoble = document.querySelector("#botonDoble"); // Selecciona el primer elemento con el ID "botonDoble"

clickDoble.addEventListener("dblclick", () => {

    alert("Hola, has hecho doble click en el botón"); // Muestra una alerta al usuario

});

//Mouse Over
let mouseOver = document.querySelector("#pasarEncima"); // Selecciona el primer elemento con el ID "pasarEncima"

mouseOver.addEventListener("mouseover", () => {

    console.log("Hola, has pasado el mouse por encima del botón"); // Registra un mensaje en la consola
});

//Mouse Out
let mouseOut = document.querySelector("#pasarEncima"); // Selecciona el primer elemento con el ID "pasarEncima"

mouseOut.addEventListener("mouseout", () => {

    console.log("Hola, has sacado el mouse del botón"); // Registra un mensaje en la consola    
});

//Mouse Move
let mouseMove = document.querySelector("#pasarEncima"); // Selecciona el primer elemento con el ID "pasarEncima"

mouseMove.addEventListener("mousemove", () => {

    console.warn("Te estas moviendo por el textarea"); // Registra un mensaje de advertencia en la consola

});

//keydown
let keyDown = document.querySelector("#campoTexto"); // Selecciona el primer elemento con el ID "campoTexto"

keyDown.addEventListener("keydown", (event) => {

    console.log("Presionaste la tecla: " + event.key); // Registra un mensaje en la consola

}); 

//keyup
let keyup = document.querySelector("#campoTexto"); // Selecciona el primer elemento con el ID "campoTexto"

keyup.addEventListener("keyup", (event) => {

    console.warn("Soltaste la tecla: " + event.key); // Registra un mensaje en la consola

});

//keypress - (Obsoleto / Poco Útil)
// ❌ No detecta teclas como Shift, Ctrl, Alt, F1-F12, Esc, Arrow Keys.
// ❌ Obsoleto (ya no se recomienda su uso en código moderno).
// ❌ No distingue entre mayúsculas y minúsculas en algunos navegadores.

let keyPress = document.querySelector("#campoTexto"); // Selecciona el primer elemento con el ID "campoTexto"

keyPress.addEventListener("keypress", (event) => {

    console.error("Presionaste la tecla: " + event.key); // Registra un mensaje en la consola

}); // No se recomienda su uso, pero se incluye para completar el ejemplo 