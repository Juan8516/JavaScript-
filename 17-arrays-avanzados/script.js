let frameworks = ['Angular', 'React', 'NodeJs', 'Astro', 'Vue', 'Ember'];

//Acceso manual - (Uso complejo poco mantenible)
/*
console.log(frameworks[0]);
console.log(frameworks[1]);
console.log(frameworks[2]);
console.log(frameworks[3]);
console.log(frameworks[4]);
console.log(frameworks[5]);
*/

//Acceso con bucles - por consola
for(let i = 0; i <= frameworks.length; i++) {

    console.log(frameworks[i]);

}

//Acceso con bucles - por pantalla
document.write("<h1>Listado de Frameworks para JavaScript</h1>");
document.write("<ul>");

for(let i = 0; i <= frameworks.length; i++) {
    
    document.write("<li>"+frameworks[i]+"</li>");
    
}

document.write("</ul>"); 

//Bucles para recorrer arrays
console.log('---------------------');
console.log(' ');

let actores = ['Arnold Swayeneger', 'Silvestre Stallone', 'Al Pacino', 'Robert De Niro', 'Leonadro Di Caprio', 'Adam Sandler'];

console.log('!!!!!!!!!!Listado de actores!!!!!!!!!!');
console.log(' ');

//Bucle for 
console.log('-Usando el bucle for-');

for(contador = 0; contador < actores.length; contador++) {
    
    console.log(actores[contador]);
    
}
console.log(' ');

//Bucle for OF - mas limpio que el for
console.log('-Usando el bucle for OF-mas limpio que el for');

for(let actor of actores) {

    console.log(actor);

}
console.log(' ');

//Bucle for IN - Muestra el indice de cada elemento en el array
console.log('-Usando el bucle for IN-Muestra el indice de cada elemento en el array');

for(let indice in actores) {

    console.log(indice, actores[indice]);

}
console.log(' ');

//Bucle foreach - Recorre el array por medio de una funcion
console.log('-Usando el bucle foreach-Recorre el array por medio de una funcion');

actores.forEach((indice, actor) => {

    console.log(indice, actor);

})
console.log(' ');

//Bucle map - Recorre el array y devuelve un nuevo array no modifica el original
console.log('-Usando el bucle map-devuelve un nuevo array no modifica el original');

let nuevosActores = actores.map(actor => {

    console.log(actor);

    return actor + ' Es un actor '

})
console.log(nuevosActores);
console.log(' ');

//Arrays multidimencionales - Los arrays multidimensionales son arrays que contienen otros arrays como elementos, 
// permitiendo organizar datos de manera más compleja, como en el caso de una tabla o matriz.
console.log('-Arrays multidimencionales');

let categorias = ['Lucha', 'Carreras', 'Deportes', 'Accion', 'Sandbox'];
let titulos = ['Dragon Ball', 'F1', 'Fifa 2025', 'God of War', 'GTA 6'];

let videojuegos = [categorias, titulos];

console.log(videojuegos);

console.log(videojuegos[0][2]);
console.log(videojuegos[1][2]);
console.log(' ');

//Arrays bidimencionales - Los arrays bidimensionales son un tipo de array multidimensional que organiza datos en filas y columnas, 
// similar a una tabla.
console.log('-Arrays bidimencionales');

let tabla = [
    
    ['Producto', 'Cantidad', 'Precio C/U'],
    ['PC',                5,      1600000],
    ['Telefono',          4,      1200000],
    ['Impresora',         2,       700000]

];

console.table(tabla);

console.log(tabla[1][0], tabla[1][2]);
console.log(tabla[3][0], tabla[3][2]);
console.log(tabla[2][0], tabla[2][2]);
console.warn(tabla[1][1] * tabla[1][2]);

document.write('<table border=1>');

tabla.forEach((fila, indexFila) => {
    
    document.write('<tr>');
    
    fila.forEach(elemento => {

        if(indexFila === 0) {

            document.write('<th>' + elemento + '</th>');

        } else {

            document.write('<td>' + elemento + '</td>');
        }
        
    });

    document.write('</tr>');
    
});

document.write('</table>');