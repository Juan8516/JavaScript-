//Localstorage: Es una API de almacenamiento web que permite guardar datos persistentes (como strings) en el navegador del 
//usuario, incluso después de cerrar la pestaña o reiniciar el navegador.

//Comprobar disponibilidad de localStorage
if(typeof(Storage) != "undefined"){

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

//Guardar objetos en localStorage
let animal = {
    especie: "Elefante",
    edad: 10,
    nombre: "Dumbo",
    habitat: "Selva",
    alimentacion: "Herbivoro"
}

localStorage.setItem("animal", JSON.stringify(animal)); //convertir objeto a string

//Recuperar objeto de localStorage
let animalRecuperado = JSON.parse(localStorage.getItem("animal")); //convertir string a objetos
console.log(animalRecuperado); //Objeto recuqperado

//Eliminar un elemento de localStorage
localStorage.removeItem("animal"); //eliminar objeto//

//vaciar localStorage
document.querySelector("#vaciar").addEventListener("click", () => {

    localStorage.clear(); //vaciar localStorage
    
});