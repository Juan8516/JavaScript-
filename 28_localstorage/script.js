//Localstorage: Es una API de almacenamiento web que permite guardar datos persistentes (como strings) en el navegador del 
//usuario, incluso después de cerrar la pestaña o reiniciar el navegador.

//Comprobar disponibilidad de localStorage
if(typeof(Storage) != "indefined"){

    console.log("localStorage disponible");

}else {

    console.log("localStorage no disponible");
}
console.log("-----------------");

//Guardar datos en localStorage
localStorage.setItem("Lenguaje de programación", "JavaScript");
localStorage.setItem("Framework", "Angular");

//sacar datos de localStorage - en consola
console.log(localStorage.getItem("Lenguaje de programación")); //JavaScript
console.log(localStorage.getItem("Framework")); //Angular

//sacar datos de localStorage - en consola
document.querySelector("#lenguaje").textContent = localStorage.getItem("Lenguaje de programación"); //JavaScript
document.querySelector("#framework").textContent = localStorage.getItem("Framework"); //Angular