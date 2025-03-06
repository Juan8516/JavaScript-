//Funciones: son bloques de código reutilizables que ejecutan una tarea específica. Pueden recibir parámetros y 
// devolver un resultado.

function saludo(sector, ruta) {
    console.log(`Atencion sector ${sector}!!!!!!`);
    console.warn('Peligroooo !!!!!!');
    console.error(`Explosion inminente tomar ${ruta}!!!!!!`);
    console.log('------------------------')

    //JavaScript se usa dentro de una función para devolver un valor y finalizar su ejecución.
    return 'Alerta enviada correctamente !!!!!'
}

let mensajeFinal = saludo(23, 'vias de evacuacion');
let mensajeFinal1 = saludo(16, 'ruta subterranea');
let mensajeFinal2 = saludo(85, 'ruta trasera');

alert(mensajeFinal);


/*
for(let i = 0; i < 20; i++) {

    saludo();
}
*/