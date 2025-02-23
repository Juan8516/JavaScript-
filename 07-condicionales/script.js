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

// let estaLoviendo = false;

// //Condicion
// if(estaLoviendo == true){
//     //Si se cumple la condicion se ejecuta:
//     console.warn('Atencion esta lloviendo, llevar sombrilla')
// }else {
//     //Si la condicion es falsa entonces se ejecuta:
//     console.log('Cielo despejado')
// }

//---Ejemplo 2
//Hamburguesa con o sin cebolla

// let llevaCebolla = true;

// //! (Negación lógica): Invierte el valor booleano; !true se convierte en false. (!llevaCebolla)
// //=== (Comparación estricta): Compara valores y tipos; 5 === "5" es false porque son de distinto tipo (llevaCebolla === true)
// if(llevaCebolla){
//     console.warn('!!!!!!!! La hamburguesa lleva cebolla !!!!!!!');
// }else{
//     console.log('La hamburguesa no lleva cebolla');
// }

//---Ejemplo 3
//Comprobar mayoria de edad

// let nombre = 'Simon Salazar';
// let edad = 4;

// if(edad >= 18){
//     console.log(`${nombre} tiene ${edad} años, es mayor de edad`);
// }else{
//     console.log(`${nombre} tiene ${edad} años, es menor de edad`);
// }

// //comprobar etapas de vejez

// let nombre = 'Simon Salazar';
// let edad = 4;


// if(edad >= 18){
//     console.log(`${nombre} tiene ${edad} años, es mayor de edad`);

//     if(edad <= 20){
//         console.log('Es un adolecente');
//     }else if(edad >= 70){
//         console.log('Es un anciano');
//     }else{
//         console.log('Es mayor de edad');
//     }

// }else{
//     console.log(`${nombre} tiene ${edad} años, es menor de edad`);
// }

//---Ejemplo 4
//Comprobacion de eras

let year = 2027;

if(year >= 2000 && year <= 2030){
    console.log('Era moderna');

}else if(year > 2030){

    console.log('Era post moderna');

}else{
    console.log('Era antigua')
}

//---Ejemplo 5
//Evaluar si un año termina en 7

if(year == 2007 || year == 2017 || year == 2027 || year == 2037){

    console.log('El año termina en 7')

}else {

    console.log('El año es desconocido')
    
}