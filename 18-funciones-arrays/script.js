//Crear un array vacio - primera forma, menos usada no recomendada
// let nombres = new Array(4);
// console.log(nombres);

//Crear un array vacio - segunda forma, recomendada
let articulos = ['PC', 'Audifonos', 'Teclado', 'Monitor', 'Telefono', 'Smartwatch'];
console.log(`Articulos por defecto: ${articulos}`);
console.log('');

//Mostrar la longitud
console.log(`La longitud del arreglo es: ${articulos.length}`);
console.log('');

//Agregar elementos
articulos.push('Base');
articulos.push('Control');
console.log(`Nuevo array con 2 articulos agregados: ${articulos}`);
console.log('');

//Eliminar el ultimo elemento
articulos.pop();
console.log(`Se elimina el ultimo elemento: ${articulos}`);
console.log('');

//Agregar elemento al inicio
articulos.unshift('ps5');
console.log(`Se agrega elemento al inicio: ${articulos}`);
console.log('');

//Eliminar el primer elemento
articulos.shift()
console.log(`Se elimina el primer elemento: ${articulos}`);
console.log('');

//Busqueda del indice de un elemento
let busqueda = articulos.indexOf('Monitor');
console.log(`Devolucion de elemento encontrado "Monitor": ${busqueda}`);

let busqueda1 = articulos.indexOf('Parlantes');
console.log(`Devolucion de elemento no encontrado "Parlantes": ${busqueda1}`);
console.log('');

//Verificar si un elemento existe o no
let existe = articulos.includes('PC');
console.log(`Devolucion "true" elemento encontrado 'PC': ${existe}`);

let noExiste = articulos.includes('Parlantes');
console.log(`Devolucion "false" elemento no encontrado 'Parlantes': ${noExiste}`);
console.log('');

//Filtrar arrays
//filter no modifica el array original - primera forma
// let articulosConO = articulos.filter(articulo => {

//     let resultado = false;

//     if(articulo.includes('o')) {

//         resultado = true;

//     }

//     return resultado;

// })

//filter no modifica el array original - segunda forma
let articulosConO2 = articulos.filter(articulo => articulo.includes('o'))

console.log(`Devolucion de los articulos con la letra "o": ${articulosConO2}`);
console.log('');