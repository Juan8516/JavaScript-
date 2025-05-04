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