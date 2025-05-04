//Objeto date:Se utiliza para trabajar con fechas y horas, permitiendo crear, manipular y formatear valores temporales.

let fechaActual = new Date(); //fecha actual

// Uso de métodos para obtener información de la fecha actual
console.log(fechaActual); //muestra la fecha actual en formato UTC
console.log(fechaActual.getFullYear()); //muestra el año actual
console.log(fechaActual.getMonth()); //muestra el mes actual (0-11)
console.log(fechaActual.getDate()); //muestra el día del mes actual (1-31)
console.log(fechaActual.getDay()); //muestra el día de la semana actual (0-6, donde 0 es domingo)
console.log(fechaActual.getHours()); //muestra la hora actual (0-23)
console.log(fechaActual.getMinutes()); //muestra los minutos actuales (0-59)
console.log(fechaActual.getSeconds()); //muestra los segundos actuales (0-59)

console.log(`Fecha completa: ${fechaActual.getDate()}/ ${fechaActual.getMonth()}/ ${fechaActual.getFullYear()}`); //muestra la fecha completa en formato UTC
console.log("");

//Objeto Math: Se utiliza para realizar operaciones matemáticas y cálculos numéricos, proporcionando funciones y 
// constantes matemáticas.

//numero PI
console.log(Math.PI); //muestra el valor de PI

//numero euler
console.log(Math.E); //muestra el valor de euler

//redondeo
console.log(Math.round(5.4)); //redondea al número entero más cercano (hacia abajo)
console.log(Math.round(5.6)); //redondea al número entero más cercano (hacia arriba)
console.log(Math.floor(5.6)); //redondea hacia abajo (siempre hacia el entero menor)
console.log(Math.ceil(5.6)); //redondea hacia arriba (siempre hacia el entero mayor)

//numero aleatorio
console.log(Math.random()); //muestra un número aleatorio entre 0 y 1
console.log(Math.floor(Math.random() * 100)); //muestra un número aleatorio entre 0 y 100 (incluyendo 0 y excluyendo 100)

//numero absoluto
console.log(Math.abs(-5)); //muestra el valor absoluto de -5 (5)

//potencia
console.log(Math.pow(2, 3)); //muestra 2 elevado a la 3 (8)

//raiz cuadrada
console.log(Math.sqrt(16).toFixed(2)); //muestra la raíz cuadrada de 16 (4) y lo redondea a 2 decimales con toFixed(2)

//logaritmo
console.log(Math.log(10)); //muestra el logaritmo natural de 10 (2.302585092994046)

//Minimo y máximo
console.log(Math.min(5, 10, 15)); //muestra el valor mínimo entre 5, 10 y 15 (5)
console.log(Math.max(5, 10, 15)); //muestra el valor máximo entre 5, 10 y 15 (15)

