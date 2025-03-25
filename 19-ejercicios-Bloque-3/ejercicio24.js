/*
    ----Ejercicio 24----

    -Crear un array de 10 numeros, del 1 al 100.
    
    El usuario debe ingresar un numero:
    
    -Si acierta mensaje de celebracion.
    -Si erra mensaje de intentalo de nuevo
    
    🔮

*/

let listaNumeros = [14, 76, 93, 42, 5, 61, 28, 87, 33, 50];

let numeroUsuario = parseInt(prompt('Intenta adivinar un numero del 1 al 100: '));

if(listaNumeros.includes(numeroUsuario)) {

    console.log('Felicidades adivinaste el numero !!!!! 🪄🪄🪄');
    
} else {
    
    console.warn('Lo siento, numero no encontrado ... 🤯🤯🤯');
}