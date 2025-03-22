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

//some = verifica si al MENOS un elemento de un array cumple con una condición y devuelve true o false
let letrasE = f1Teams.some(team => team.includes('F'));
console.log(`Verifica si al menos hay una coincidencia, letra(F) devuelve booleano: ${letrasE}`);
console.log('');

//every = verifica si TODOS los elementos de un array cumplen con una condición y devuelve true o false
let letrasA = f1Teams.every(team => team.includes('a'));
console.log(`Verifica si todos los elementos tienen la coincidencia, letra(A) devuelve booleano: ${letrasA}`);
console.log('');

//flat =  aplana un array, eliminando la estructura de sub-arrays y devolviendo un array plano
let anios = [
    [1900, 1992, 1993],
    [2000, 2005, 2006],
    [2010, 2012, 2014, [2020, 2021, [2025, 2026,2027]]]
];

let plana = anios.flat(Infinity);
console.log(`Array multidimencional aplanado: ${plana}`);
console.log('');

//copyWithin = copia una parte del array dentro del mismo array, sin cambiar su longitud
let numeros = [10, 20, 30, 40, 50];
numeros.copyWithin(0, 2, 4);
console.log(`copia de array conservando longitud: ${numeros}`); 
console.log('');

//Array.from = crea un nuevo array a partir de un objeto iterable (como strings, sets, nodelists, etc.) o un objeto 
//con la propiedad length.
let nombre = 'Juan Manuel';
let arrayString = Array.from(nombre)
console.log(`Conversion a array desde un string: ${arrayString}`); 
console.log('');

//Destructuring =  extraer valores de arrays u objetos y asignarlos a variables de forma sencilla
let [uno, dos, tres] = [1, 2, 3];
console.log('Primera forma de destructuracion:');
console.log(dos);
console.log('');

let [actor, ...restoDeActores] = ['Robert de Niro', 'Al Pacino', 'Bruce Willis', 'Macaulay Culkin'];
console.log('Segunda forma de destructuracion:');
console.log(actor);
console.log(restoDeActores);
console.log('');

//Expandir arrays = ...(spread) permite expandir elementos de arrays, objetos o argumentos en funciones
let array1 = [4, 5, 6];
let array2 = [1, 2, 3];

let arrayCompleto = [...array1, ...array2];

console.log('Expansion de array con spread:');
console.log(arrayCompleto);
console.log('');

//toString = convierte un array, número u objeto en una cadena de texto (string)
console.log('Convertir array a string con toString:');
console.log(f1Teams.toString());
console.log('');

//split = divide un string en un array de subcadenas, usando un separador especificado
let frase = 'La formula 1 es un deporte muy interesante';
let arrayFrase = frase.split(' ');
console.log('Convertir string a array:');
console.log(arrayFrase);
console.log('');

//join = convierte un array en un string, uniendo los elementos con un separador especificado
let slug = arrayFrase.join(' ').toLocaleLowerCase();
console.log('Convertir array a un string:');
console.log(slug);