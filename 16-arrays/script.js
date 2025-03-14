//Arrays = es una estructura de datos que permite almacenar múltiples valores en una sola variable.

//Declaracion
let nombres = ['Paula', 'Simon', 'Juan Manuel', 'Lucelly', 'William'];

//Llamado
console.log(nombres);
//Longitud del array
console.log(nombres.length);

//✅Otra manera - forma menos usada:
// new Array() es una forma antigua de crear arrays en JavaScript.
// Al pasarle los elementos, los agrega directamente al array.
// El resultado es un array con 3 elementos (strings).
let peliculas = new Array('El padrino', 'Rocky', 'La vida es bella');

console.log(peliculas);
console.log(peliculas.length);

//Acceder a los elementos
console.warn(peliculas[2]);
console.warn(peliculas[0]);

//Modificar nombres de un array
nombres[4] = 'Emilio';
console.log(nombres);