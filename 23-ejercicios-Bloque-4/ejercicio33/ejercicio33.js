/*
Ejercicio 33

Crea un programa donde tengas un boton que cuente cuantas 
veces lo ha pulsado el usuario.

Cuando llegue a 17 clics, el boton se debe mostrar un mensaje de !Limite alzado!

Si se sobrepasa, contador se resetea y el contador comienza de nuevo.
*/

document.addEventListener("DOMContentLoaded", () => {

    const counterDiv = document.getElementById("counter");
    const incrementButton = document.getElementById("increment");
    const decrementButton = document.getElementById("decrement");

    let counter = 0;

    incrementButton.addEventListener("click", () => {
        counter++;
        if (counter === 18) {
            alert("¡Límite alcanzado!");
            counter = 0;
        }
        counterDiv.textContent = counter;
    });

    decrementButton.addEventListener("click", () => {
        if (counter > 0) {
            counter--;
        }
        counterDiv.textContent = counter;
    });

});
