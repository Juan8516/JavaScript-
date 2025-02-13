//Operador typeof

let frase = 'Juan Manuel Salazar DEV'
let id
let heroe = {nombre: 'Superman', edad: 40}

//Typeof - muestra el tipo de dato de la variable
console.log(`El tipo de dato de la frase es: ${typeof(frase)}`)
console.log(`El tipo de dato del ID es: ${typeof(id)}`)
console.log(`El tipo de dato de heroe es: ${typeof(heroe)}`)

//-------Operadores matematicos (matematicas)------//
let numero1 = 43
let numero2 = 12

//----Operaciones basicas
//Suma
let suma = numero1 + numero2
//Resta
let resta = numero1 - numero2
//Multiplicacion
let producto = numero1 * numero2
//Division
let division = numero1 / numero2
//Resto
let resto = numero1 % numero2
//Potencia
let potencia = numero1 ** numero2

console.log('Suma: ' + suma)
console.log('Resta: ' + resta)
console.log('Producto: ' + producto)
console.log('Division: ' + division)
console.log('Resto: ' + resto)
console.log('Potencia: ' + potencia)

//----Asigancion
let elNumero = 17

//Primera forma - Asignación de un número con una operación de suma
elNumero = 17 + 3 // elNumero ahora vale 20

//Segunda forma - Operaciones de asignación compuesta
elNumero += 3 // Suma 3 al valor actual (20 + 3 = 23)
elNumero -= 3 // Resta 3 al valor actual (23 - 3 = 20)
elNumero *= 3 // Multiplica por 3 (20 * 3 = 60)
elNumero /= 3 // Divide por 3 (60 / 3 = 20)

//Distintas maneras de mostrar en consola
console.log(elNumero)    //Muestra el valor en la consola de manera normal
console.error(elNumero) //Muestra el valor como un error en la consola
console.warn(elNumero) //Muestra el valor como una advertencia en la consola

//----Comparacion - Compara valores y devuelve un booleano
let numeroComparacion = 33

//Comparacion de valores (no estricto, resultado true)
console.log(numeroComparacion == '33')

//Comparacion de valores (estricto, resultado false)
console.warn(numeroComparacion === '33') //Evalua dato mas tipo de dato

//Comparacion de desigualdad
console.log(numeroComparacion != 31)

//Comparacion de desigualdad (estricto)
console.log(numeroComparacion !== '33')

//Mayor que, menor que
console.log(numeroComparacion > 31)
console.error(numeroComparacion < 31)
console.warn(numeroComparacion >= 31)
console.warn(numeroComparacion <= 31)

//----Logicos - Valida si dos condiciones son verdaderas o falsas, o si una es falsa, o si una es verdadera
let esMayorDeEdad = true 
let tieneEntrada = true

//El operador && verifica si las dos condiciones son verdaderas (devuelve true)
console.log(esMayorDeEdad && tieneEntrada)

//El operador || verifica si una de las dos condiciones es verdadera (devuelve true)
console.log(esMayorDeEdad || tieneEntrada)

//El operador ! invierte la condicion de la variable, segun la inicializacion
console.log(!esMayorDeEdad)

//---Operaciones con cadena
let mensaje1 = 'Hola'
let mensaje2 = 'que tal'

//Concatenacion de las variables tipo string
let mensaje_total = mensaje1 + ', '+mensaje2

//Se suma nueva cadena con operador de asigancion +=
mensaje_total += ' soy Juan Manuel Salazar DEV'

console.log("Mensaje concatenado: " + mensaje_total)

//Incremento y decremento