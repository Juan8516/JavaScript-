/*
    ----Ejercicio 27----

    -Crear un array de personajes de peliculas y 
    clasificalos en grupos (heroes, villanos, etc)
    
    muestra un mensaje para cada grupo.

    🎥
*/

function clasificarPersonajes(datos) {
    // Filtrar personajes con nombres válidos
    const personajesValidos = datos.filter(personaje => personaje.nombre.trim() !== "");

    // Clasificar personajes por tipo
    const heroes = personajesValidos.filter(elemento => elemento.tipo === "heroe");
    const villanos = personajesValidos.filter(elemento => elemento.tipo === "villano");
    const secundarios = personajesValidos.filter(elemento => elemento.tipo === "secundario");

    // Mostrar mensajes para cada grupo
    console.log("Héroes:");
    heroes.forEach(heroe => console.log(`- ${heroe.nombre.trim()}`));

    console.log("\nVillanos:");
    villanos.forEach(villano => console.log(`- ${villano.nombre.trim()}`));

    console.log("\nSecundarios:");
    secundarios.forEach(secundario => console.log(`- ${secundario.nombre.trim()}`));
}

const personajes = [

    { nombre: "Batman", tipo: "heroe" },
    { nombre: "Joker", tipo: "villano" },
    { nombre: "Superman", tipo: "heroe" },
    { nombre: "Harley Quinn", tipo: "villano" },
    { nombre: " Alfred", tipo: "secundario" },
    { nombre: "Robin", tipo: "secundario" },
    { nombre: "Lex Luthor", tipo: "villano" },

];

console.log(clasificarPersonajes(personajes));
