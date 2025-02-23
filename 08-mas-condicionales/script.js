//Condicionales Switch
//switch: Evalúa una expresión y ejecuta un bloque según el caso coincidente.

let miDesayuno = 9;

switch(miDesayuno) {

    case 1:
        console.log('Huevos al gusto');
        break;
    
    case 2:
        console.log('Arroz atollado');
        break;
    
    case 3:
        console.log('Desayuno de la casa');
        break;
    
    default:
        console.error('Eleccion diferente');
}

//------Mismo ejemplo usando if (ademas la evaluacion se puede usar con strings)

let miAlmuerzo = 'mondongo'

if(miAlmuerzo == 'Bandeja') {

    console.log('Eleccion bandeja paisa');

} else if(miAlmuerzo == 'Ajiaco') {

    console.log('Eleccion Ajiaco Bogotano');
    
} else if(miAlmuerzo == 'Carne') {
    
    console.log('Eleccion Carne asada');

} else {

    console.error('Sin eleccion');

}


//Condicional ternario
//ternario: (condición ? expr1 : expr2): Forma simplificada de if-else.

let nombre = 'Juan Manuel Salazar';
let edad = 17;

let resultado = (edad >= 18) ? `${nombre} es mayor de edad` : `${nombre} es menor de edad`

console.log(resultado)



//Diferencias entre vas y let