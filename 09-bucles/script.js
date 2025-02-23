//For: estructura de control que permite repetir un bloque de código un número determinado de veces. 
// Su sintaxis incluye tres partes: inicialización, condición y incremento/decremento.

/*
    Estructura del bucle for

    for (inicializador, condicion, incremento/decremento) {
        
        codigo que se ejecura repetidamente
    
    }
*/

//-----Ejemplo
var limite = 177;

for(let contador = 0; contador <= limite; contador++) {
    //Bloque que se ejecutara
    console.log(`Contador en: ${contador}`);
}