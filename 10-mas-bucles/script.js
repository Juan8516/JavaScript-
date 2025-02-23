//While: Ejecuta un bloque de código mientras una condición sea verdadera. A diferencia de for, 
// no tiene una inicialización ni un incremento dentro de la sintaxis, por lo que debe manejarse manualmente 
// dentro del bucle.

/*
    Estructura del bucle while

    let contador
    while (condicion) {
        
        si se cumple el codigo se ejecuta indefinidamente

        contador ++
    
    }
*/

//-----Ejemplo
let year = 1999;
let objetivo = 2177;
let interferencia = 2038

while(year <= objetivo) {

    console.warn(`Vamos en el año: ${year}`);

    if(year === interferencia) {
        console.error(`Simon ya tiene 18 años`);
        break;
    }

    year++;

}