/*
Ejercicio 37

Crea un formulario que pida al usuario su nombre, apellidos y edad.
Añade un botón de enviar y usa el evento submit.
Muestra los datos por pantalla cuando se termine de enviar el formulario.
*/

const formulario = document.querySelector("#formulario");
const infoContacto = document.querySelector("#info_contacto");

let nombre =document.querySelector("#nombre");
let apellidos =document.querySelector("#apellidos");  
let edad =document.querySelector("#edad");

let infoNombre =document.querySelector("#info_nombre strong");
let infoApellidos =document.querySelector("#info_apellidos strong");  
let infoEdad =document.querySelector("#info_edad strong");

formulario.addEventListener("submit", (e) => {

    e.preventDefault(); // Evita que el formulario se envíe y recargue la página

    alert("Formulario enviado !!!!");
    infoNombre.textContent = nombre.value;
    infoApellidos.textContent = apellidos.value;
    infoEdad.textContent = edad.value;

});

