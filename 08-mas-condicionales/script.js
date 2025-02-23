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


//Diferencias entre vas y let