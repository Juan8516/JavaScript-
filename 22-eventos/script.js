//Eventos

/**
 * Selecciona todos los elementos con el ID "botocito" y les agrega un evento de click.
 * 
 * Cuando se hace clic en el botón, se muestra una alerta con el mensaje 
 * "Hola, has hecho click en el botón" y se registra el mismo mensaje en la consola.
 *
 */
let clickBoton = document.querySelector("#boton");

clickBoton.addEventListener("click", () => {

    alert("Hola, has hecho click en el botón");
    console.log("Hola, has hecho click en el botón");
    
});