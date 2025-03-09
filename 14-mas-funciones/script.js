//Función anónima = Es una función sin nombre que se asigna a una variable o 
//se usa directamente como argumento.

const saludo = function() {

    console.log('Hola Simon como estas !!!!');

}

saludo();

//Función callback = Es una función que se pasa como argumento a otra 
//función y se ejecuta dentro de ella.

/*
let veces = 0;

setInterval(function () {
    
    veces++;
    console.log(`Funcion ejecutada ${veces} veces`);

}, 1000);

setInterval(saludo, 2000);
*/

//Funciones Callbacks - avanzado
function restame(n1, n2, mostrar, multiPorTres) {

    let resta = n1 - n2;

    mostrar(resta);
    multiPorTres(resta);

    return resta;
}

restame(100, 5, function(resultado) {

    console.log(resultado);

}, 
function(resultado) {

    console.log(resultado * 3);

});

