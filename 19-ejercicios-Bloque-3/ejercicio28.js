/*
    ----Ejercicio 28----

    -1.Pide 6 numeros por pantalla y metelos en un array
    -2.Mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola
    -3.Ordenarlo y mostrarlo
    -4.Invertir su orden y mostrarlo
    -5.Mostrar cuantos elementos tiene el array
    -6.Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
    -6.Refactirzar el código en funciones

*/

function pedirNumeros() {
    let numeros = [];
    for(let i = 0; i <= 5; i++) {
        numeros.push(parseInt(prompt('Ingresa un numero: ')));
    }
    return numeros;
};

function mostrarArray(array) {
    console.warn('Array completo: ');
    console.log(array);
    document.write('<h1>Array completo</h1>');
    document.write('<ul>');
    array.forEach(elemento => document.write(`<li>${elemento}</li>`));
    document.write('</ul>');
};

function ordenarArray(array) {
    console.warn('Array ordenado: ');  
    return array.sort((a, b) => a - b);
};

function invertirArray(array) {
    console.warn('Array invertido: ');
    return array.reverse();
};

function contarElementos(array) {
    console.warn('Cantidad elementos array: ');
    return array.length;
};

function buscarElemento(array, elemento) {
    console.warn('Index elemento: ');
    const indice = array.findIndex(valor => valor === elemento);
    return indice;
};

const numeros = pedirNumeros();
mostrarArray(numeros);  // 2
console.log(ordenarArray(numeros));  // 3
console.log(invertirArray(numeros));  // 4
console.log(contarElementos(numeros));  // 5        
const elemento = parseInt(prompt('Ingresa un número para buscar: '));   
console.log(buscarElemento(numeros, elemento));  // 6