let frameworks = ['Angular', 'React', 'NodeJs', 'Astro', 'Vue', 'Ember'];

//Acceso manual - (Uso complejo poco mantenible)
/*
console.log(frameworks[0]);
console.log(frameworks[1]);
console.log(frameworks[2]);
console.log(frameworks[3]);
console.log(frameworks[4]);
console.log(frameworks[5]);
*/

//Acceso con bucles - por consola
for(let i = 0; i <= frameworks.length; i++) {

    console.log(frameworks[i]);

}

//Acceso con bucles - por pantalla
document.write("<h1>Listado de Frameworks para JavaScript</h1>");
document.write("<ul>");

for(let i = 0; i <= frameworks.length; i++) {
    
    document.write("<li>"+frameworks[i]+"</li>");
    
}

document.write("</ul>"); 