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
console.log('-Usando el bucle for IN - Muestra el indice de cada elemento en el array');

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


