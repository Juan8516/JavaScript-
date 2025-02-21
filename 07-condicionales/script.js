/*
    -----------Condicionales-----------
    Los condicionales en programación son estructuras de control que permiten ejecutar diferentes 
    bloques de código según una condición.

    En JavaScript, los principales condicionales son:
    if
    else
    else if
    Operador ternario (condición ? expr1 : expr2): Forma simplificada de if-else.
    switch
*/
   
//if:   Evalúa si una condición es verdadera y ejecuta el bloque de código correspondiente.
//else: Se ejecuta si la condición en if es falsa.

let estaLoviendo = false;

//Condicion
if(estaLoviendo == true){
    //Si se cumple la condicion se ejecuta:
    console.warn('Atencion esta lloviendo, llevar sombrilla')
}else {
    //Si la condicion es falsa entonces se ejecuta:
    console.log('Cielo despejado')
}