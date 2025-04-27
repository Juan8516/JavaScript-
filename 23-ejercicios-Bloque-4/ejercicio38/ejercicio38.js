/*
Ejercicio 38

Valida el formulario del ejercicio 37, con JS, usando el DOM, funciones y metodos.

El nombre y apellidos no deben estar vacios.

La edad debe NO ser menos que 0, y debe ser siempre un numero.
*/

const formulario = document.querySelector("#formulario");
const infoContacto = document.querySelector("#info_contacto");

let nombre =document.querySelector("#nombre");
let apellidos =document.querySelector("#apellidos");  
let edad =document.querySelector("#edad");

let infoNombre =document.querySelector("#info_nombre strong");
let infoApellidos =document.querySelector("#info_apellidos strong");  
let infoEdad =document.querySelector("#info_edad strong");

let errorNombre = document.querySelector("#error_nombre");
let errorApellidos = document.querySelector("#error_apellidos");
let errorEdad = document.querySelector("#error_edad");

formulario.addEventListener("submit", (e) => {

    e.preventDefault(); // Evita que el formulario se envíe y recargue la página

    // Validar nombre
    if(nombre.value.trim() == null || nombre.value.trim().length == 0) {

        let mensaje = "El nombre no puede estar vacío"; // Mensaje de error

        alert(mensaje); // Muestra el mensaje de error en una alerta
        errorNombre.textContent = mensaje; // Borra el mensaje de error

        return false; // Detiene la ejecución si el nombre está vacío
    }else {
        errorNombre.display = "none"; // Borra el mensaje de error
    }

    // Validar apellidos
    if(apellidos.value.trim() == null || apellidos.value.trim().length == 0) {

        let mensaje = "Los apellidos no pueden estar vacíos"; // Mensaje de error

        alert(mensaje); // Muestra el mensaje de error en una alerta
        errorApellidos.textContent = mensaje; // Borra el mensaje de error

        return false; // Detiene la ejecución si el apellido está vacío
    }else {
        errorApellidos.display = "none"; // Borra el mensaje de error
    }

    // Validar edad
    if(edad.value == null || edad.value <= 0 || isNaN(edad.value)) {

        let mensaje = "La edad no es valida"; // Mensaje de error

        alert(mensaje); // Muestra el mensaje de error en una alerta
        errorEdad.textContent = mensaje; // Borra el mensaje de error

        return false; // Detiene la ejecución si la edad está vacío
    }else {
        errorEdad.display = "none"; // Borra el mensaje de error
    }

    infoNombre.textContent = nombre.value;
    infoApellidos.textContent = apellidos.value;
    infoEdad.textContent = edad.value;

});