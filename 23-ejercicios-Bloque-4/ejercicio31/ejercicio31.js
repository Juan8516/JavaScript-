/* 
 Ejercicio 31:

 Crea un semaforo con tres luces (rojo, amarillo y verde).
 Haz los circulos del semaforo con html y css.

 Cuando un peaton quiere cruzar la calle debe pulsar un boton.
 Crea un boton para cambiar el color de las luces del semaforo.
 Secuencialmente (de rojo a verdes, pasando por el amarillo).

 Entonces,
 El semaforo siempre empieza en rojo.
 Cuando el peaton pulsa el boton, el semaforo cambia a amarillo.
 Al hacer click otra vez, el semaforo cambia a verde.
*/

let boton = document.querySelector("#btnSemaforo");
let luces = document.querySelectorAll(".luz");
let indice = 0;

boton.addEventListener("click", () => {

    // Retirar las luces activas
    luces.forEach(luz => luz.classList.remove("activa"));

    // Encender una luz
    luces[indice].classList.add("activa");

    // Cambiar el indice de la luz activa
    indice++;

    // Si el indice es mayor que 2, reiniciar a 0
    if(indice > 2) {
        indice = 0;
    }

});