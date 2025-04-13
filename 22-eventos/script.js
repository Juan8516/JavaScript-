//Eventos

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

/*
let keyPress = document.querySelector("#campoTexto"); // Selecciona el primer elemento con el ID "campoTexto"

keyPress.addEventListener("keypress", (event) => {

    console.error("Presionaste la tecla: " + event.key); // Registra un mensaje en la consola

}); // No se recomienda su uso, pero se incluye para completar el ejemplo 
*/

//Eventos de formulario

//submit
let subirInfo = document.querySelector("#superFormulario"); // Selecciona el primer elemento con el ID "formulario"

subirInfo.addEventListener("submit", () => {

    event.preventDefault(); // Evita el comportamiento por defecto del formulario (enviar datos y recargar la página)

    let nombre = document.querySelector("#nombre").value; // Obtiene el valor del campo de texto con el ID "nombre"
    let correo = document.querySelector("#email").value; // Obtiene el valor del campo de texto con el ID "email"
    let genero = document.querySelector("#genero").value; // Obtiene el valor del campo de texto con el ID "genero"

    alert("Hola " + nombre + ", has enviado el formulario"); // Muestra una alerta al usuario con el nombre ingresado
    alert("Tu correo es: " + correo); // Muestra una alerta al usuario con el correo ingresado
    alert("Tu genero es: " + genero); // Muestra una alerta al usuario con el género ingresado

});

//input
let entradaNombre = document.querySelector("#nombre"); // Selecciona el primer elemento con el ID "nombre"

entradaNombre.addEventListener("input", () => {

    console.log("Tu nombre es: " + entradaNombre.value); // Registra un mensaje en la consola con el valor ingresado en el campo de texto

}); // Agrega un evento de entrada al campo de texto "nombre"

//change
let changeGenero = document.querySelector("#genero"); // Selecciona el primer elemento con el ID "genero"

changeGenero.addEventListener("change", function() {

    console.log("Tu genero fue cambiado a: " + this.value); // Registra un mensaje en la consola con el valor seleccionado en el campo de texto

}); // Agrega un evento de cambio al campo de texto "genero"

//Focus
let focusEmail = document.querySelector("#email"); // Selecciona el primer elemento con el ID "email"

focusEmail.addEventListener("focus", () => {

    console.log("Estas en el campo de texto email"); // Registra un mensaje en la consola al enfocar el campo de texto

}); // Agrega un evento de enfoque al campo de texto "email"

//Blur
let blurEmail = document.querySelector("#email"); // Selecciona el primer elemento con el ID "email"

focusEmail.addEventListener("blur", () => {

    console.log("Has salido del campo de texto email"); // Registra un mensaje en la consola al desenfocar el campo de texto

}); // Agrega un evento de enfoque al campo de texto "email"

//Eventos del documento y la ventana

/*
    Observaciones:
    ⚡ Usa DOMContentLoaded para código que debe ejecutarse lo antes posible (sin esperar recursos).

    ⚡Usa load solo si necesitas trabajar con elementos que dependen de recursos externos (ej: medir el tamaño de una imagen).

    Tip moderno: Es mejor usar hoy defer en los <script> en lugar de DOMContentLoaded.
*/
document.addEventListener("DOMContentLoaded", () => {

    //Aqui se hace todo el codigo
    console.log("El DOM ha sido completamente cargado y analizado"); // Registra un mensaje en la consola cuando el DOM ha sido completamente cargado

}); // Se ejecuta cuando el DOM ha sido completamente cargado y analizado

window.addEventListener("load", () => {

    console.warn("La página y todos sus recursos han sido completamente cargados"); // Registra un mensaje de advertencia en la consola cuando la página y todos sus recursos han sido completamente cargados

}); // Se ejecuta cuando la página y todos sus recursos (imágenes, scripts, etc.) han sido completamente cargados

window.addEventListener("resize", () => {

    console.warn("La ventana ha sido redimensionada "+ window.innerWidth + " " +window.innerHeight); // Registra un mensaje de advertencia en la consola cuando la ventana ha sido redimensionada

}); // Se ejecuta cuando la ventana ha sido redimensionada (cambiada de tamaño)

window.addEventListener("scroll", () => {

    console.error("La página ha sido desplazada al pixel " + Math.round(window.scrollY)); // Registra un mensaje de error en la consola cuando la página ha sido desplazada

}); // Se ejecuta cuando la página se desplaza (scroll) y no hace nada en este caso

//Eventos de portapapeles

let portapapeles = document.querySelector("#portapapeles"); // Selecciona el primer elemento con el ID "portapapeles"

portapapeles.addEventListener("copy", () => {

    alert("Accion no permitida, no puedes copiar el texto"); // Muestra una alerta al usuario cuando se intenta copiar el texto

}); // Agrega un evento de copia al elemento "portapapeles"

portapapeles.addEventListener("paste", () => {

    alert("Has pegado un texto"); // Muestra una alerta al usuario cuando se pega un texto");

}); // Agrega un evento de pegado al elemento "portapapeles"

portapapeles.addEventListener("cut", () => { // Agrega un evento de corte al elemento "portapapeles" (no hace nada en este caso)

    alert("Has cortado un texto"); // Muestra una alerta al usuario cuando se corta un texto

}); // Agrega un evento de corte al elemento "portapapeles"