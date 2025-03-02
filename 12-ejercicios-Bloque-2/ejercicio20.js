/*
    ----Ejercicio 20----

    --En base a un numero que nos de el usuario:
    *Decir si es par o impar

*/

let numero;

while(isNaN(numero)) {
    
    numero = parseInt(prompt('Ingresar numero para evaluar si es par o impar: '));

}

if(numero % 2 === 0) {

    alert(`El numero ${numero} es par`);

} else {

    alert(`El numero ${numero} es impar`);
}