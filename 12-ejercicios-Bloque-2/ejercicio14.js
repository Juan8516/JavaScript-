/*
    ----Ejercicio 14----

    --El Dj no sabe que genero musical poner en la fiesta:
    -Preguntar al usuario que genero quiere (pop, rock o rap).
    -Segun lo que prefiera devuelve un mensaje diferente.

*/

let genero = prompt('Ingresa el genero que quieres escuchar: ')

switch(genero) {

    case 'pop':
        console.log(`El genero seleccionado es ${genero}`);
        break;
    
    case 'rock':
        console.log(`El genero seleccionado es ${genero}`);
        break;
    
    case 'rap':
        console.log(`El genero seleccionado es ${genero}`);
        break;

        default:
            console.error('Genero no encontrado !!!');
}