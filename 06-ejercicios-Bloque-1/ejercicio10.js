/*
    ----Ejercicio 10----

    - 3 amigos fueron a un restaurante.

    Amigo1 = se comio 2
    Amigo2 = se comio 3
    Amigo3 = se comio 6

    Cuantos hamburguesas nos comimos en total ?
    Es cierto que yo comi menos hamburguesas que el Amigo1 ?

    Devolver respuestas en la consola.

*/

let hamburguesasAmigo1 = 2
let hamburguesasAmigo2 = 3
let hamburguesasAmigo3 = 6

let totalHamburguesas = hamburguesasAmigo1 + hamburguesasAmigo2 + hamburguesasAmigo3
let comprobacion = hamburguesasAmigo1 < hamburguesasAmigo2

console.warn(`En total se comieron ${totalHamburguesas} hamburguesas entre los 3 amigos`)
console.warn(`Es ${comprobacion} que amigo 2 comio mas hamburguesas que el amigo 1`)