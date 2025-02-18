/*
    ----Ejercicio 6----

    - En una tienda de videojuegos, hay una oferta.
    - Si compras un juego de 50000 o mas, se realizara un 20% de descuento

    Si un cliente compra Mortal Kombat X que cuesta 70000, Cual seria el precio final ?
*/

const descuento = 0.2
let precioJuego = 50000

let precioDescuento = (precioJuego * descuento) - precioJuego

console.warn(`El precio con descuento es de: ${precioDescuento}`)