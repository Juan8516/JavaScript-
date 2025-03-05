//Funciones: son bloques de código reutilizables que ejecutan una tarea específica. Pueden recibir parámetros y 
// devolver un resultado.

function saludo() {
    console.log("Atencion !!!!!!");
    console.warn("Peligroooo !!!!!!")
    console.error("Explosion inminente !!!!!!")

    //JavaScript se usa dentro de una función para devolver un valor y finalizar su ejecución.
    return 'Alerta enviada correctamente !!!!!'
}

let mensajeFinal = saludo();

alert(mensajeFinal);


/*
for(let i = 0; i < 20; i++) {

    saludo();
}
*/