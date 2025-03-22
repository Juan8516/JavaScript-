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

//reduce = permite recorrer un array y acumular un resultado en una sola variable.
let reducir = articulos.reduce((total, actual) => total + ",  " + actual);

console.log(`Concatena el array "articulos" separados por ", ": ${reducir}`);
console.log('');

//Sort = ordena los elementos de un array alfabética o numéricamente
articulos.sort();
console.warn(`Ordena los elementos alfabeticamente o numericamente: ${articulos}`);
console.log('');

//reverse = invierte el orden de los elementos de un array
let f1Teams = ['Mercedes', 'Ferrari', 'Aston Martin', 'Red Bull', 'Maclaren', 'Williams'];
f1Teams.reverse();
console.log(`Ordena descendentemente los elementos del array: ${f1Teams}`);
console.log('');

//concat = combina varios arrays en uno solo
let unionArrays = articulos.concat(f1Teams);
console.log(`Union de dos arrays devolviendo un array: ${unionArrays}`);
console.log('');

//join = convierte un array en un string, separando los elementos con un separador definido
let usoJoin = unionArrays.join(', ')
console.log(`Union de dos arrays separados por ', ' devolviendo un string: ${usoJoin}`);
console.log('');

//slice = devuelve una copia de una parte del array, sin modificar el original
let miSeleccion = articulos.slice(2, 4);
console.log(`Seleccionando una parte del array: ${miSeleccion}`);
console.log('');

//find = devuelve el primer elemento de un array que cumple con una condición dada
let buscar = f1Teams.find(team => team.length > 8);
console.log(`Buscar un elemento dado (primera coincidencia con las de 8 letras): ${buscar}`);
console.log('');

//findIndex = devuelve el índice del primer elemento que cumple una condición.
let buscar1 = f1Teams.findIndex(team => team.length > 8);
console.log(`Buscar el indice del elemento (primera coincidencia con las de 8 letras): ${buscar1}`);
console.log('');