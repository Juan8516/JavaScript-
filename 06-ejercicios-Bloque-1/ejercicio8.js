/*
    ----Ejercicio 8----

    - En una heladeria cada bola de helado tiene un valor de 1800.

    Cuanto cuestan los cucuruchos de 1, 2 y 3 bolas ?

    * Considerar que cada barquillo cuesta 50 pesos.
*/

let precioBolaHelado = 1800;
let precioBarquillo = 50;

let cucuruchoUnaBola = (precioBolaHelado * 1) + precioBarquillo;
let cucuruchoDosBolas = (precioBolaHelado * 2) + precioBarquillo;
let cucuruchoTresBolas = (precioBolaHelado * 3) + precioBarquillo;

console.log(`
        El cucurucho de 1 bola cuesta: ${cucuruchoUnaBola} pesos
        El cucurucho de 2 bolas cuesta: ${cucuruchoDosBolas} pesos
        El cucurucho de 3 bolas cuesta: ${cucuruchoTresBolas} pesos
`);