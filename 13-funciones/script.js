//Funciones: son bloques de código reutilizables que ejecutan una tarea específica. Pueden recibir parámetros y 
// devolver un resultado.

// function saludo(sector, ruta = 'Punto de encuentro') {
//     console.log(`Atencion sector ${sector}!!!!!!`);
//     console.warn('Peligroooo !!!!!!');
//     console.error(`Explosion inminente tomar ${ruta}!!!!!!`);
//     console.log('------------------------')

//     //JavaScript se usa dentro de una función para devolver un valor y finalizar su ejecución.
//     return 'Alerta enviada correctamente !!!!!'
// }

// let mensajeFinal = saludo(23, 'vias de evacuacion');
// let mensajeFinal1 = saludo(16, 'ruta subterranea');
// let mensajeFinal2 = saludo(85, 'ruta trasera');

// alert(mensajeFinal);

// saludo(93);


/*
for(let i = 0; i < 20; i++) {

    saludo();
}
*/

//Funciones dentro de funciones

function operaciones(numero1, numero2) {

    let resultados = {

        'suma': (numero1 + numero2),
        'resta': (numero1 - numero2),
        'multiplicacion': (numero1 * numero2),
        'division': (numero1 / numero2)
    }
    
    return resultados;
}

function porConsola(numero1, numero2) {

    let resultados = operaciones(numero1, numero2);
    
    console.log(`Suma: ${resultados.suma}`);
    console.log(`Resta: ${resultados.resta}`);
    console.log(`Multiplicacion: ${resultados.multiplicacion}`);
    console.log(`Division: ${resultados.division}`);
    
    return true;
}

function porPantalla(numero1, numero2) {

    let resultados = operaciones(numero1, numero2);
    
    document.write('<h1>Calculadora</h1>')
    document.write(`<h2>Suma: ${resultados.suma}</h2>`);
    document.write(`<h2>Resta: ${resultados.resta}</h2>`);
    document.write(`<h2>Multiplicacion: ${resultados.multiplicacion}</h2>`);
    document.write(`<h2>Division: ${resultados.division}</h2>`);
    document.write('<hr>')
    
    return true;
}

function calculadora(numero1, numero2, mostrar = false) {

    if(mostrar == false) {

         porConsola(numero1, numero2);

    } else {

        porPantalla(numero1, numero2);

    }
}

porConsola(16, 4);
porPantalla(50, 5);