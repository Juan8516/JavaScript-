/*
!!!Ejericicio de javaScript!!!

Crea una aplicacion web en la que puedas añadir, mostrar y eliminar tus peliculas favoritas

cada pelicula que guardes debe tener:

-Titulo
-fecha de guardado
-puntuacion de popularidad (valor aleatorio entre 1 y 100)

Las peliculas debe mantenerse guardadas aunque se recargue la pagina
y se debe eliminar cualquiera de ellas de la lista de peliculas guardadas

Tareas:
-Ejercicio 39: Crear el formulario necesario para añadir una pelicula
-Ejercicio 40: Funcion para guardar la pelicula con los datos necesarios
-Ejercicio 41: Funcion para mostrar peliculas extraidas del localStorage
-Ejercicio 42: Haz que las peliculas carguen automaticamente al abrir la web
-Ejercicio 43: Funcion para eliminar peliculas.
*/

function eliminar(indice) {

    //Sacar las peliculas del localStorage
    let peliculasGuardadas = JSON.parse(localStorage.getItem("peliculas")); // Intenta obtener el array de objetos del localStorage, si no existe, crea un array vacio
    
    //Eliminar la pelicula del array de objetos
    peliculasGuardadas.splice(indice, 1); // Elimina la pelicula del array de objetos en la posicion indicada por el indice

    //Actualizar el localStorage
    localStorage.setItem("peliculas", JSON.stringify(peliculasGuardadas)); // Guarda el array de objetos en el localStorage como una cadena de texto

    //Mostrar las peliculas en la pantalla
    mostrarPeliculas(); // Llama a la funcion mostrarPeliculas para mostrar las peliculas guardadas

} // Funcion para eliminar peliculas

function mostrarPeliculas() {

    //Seleccionar la etiqueta del listado
    let listado = document.querySelector("#listado"); // Selecciona la etiqueta del listado por su id
    listado.innerHTML = ""; // Limpia el contenido del listado

    //Sacar las peliculas del localStorage
    let peliculasGuardadas = JSON.parse(localStorage.getItem("peliculas")); // Intenta obtener el array de objetos del localStorage, si no existe, crea un array vacio
    
    //Si no hay peliculas, mostrar mensaje
    if(peliculasGuardadas.length === 0) {

        listado.innerHTML = "<p>No hay peliculas guardadas</p>"; // Muestra un mensaje si no hay peliculas guardadas
        
        return false; // Sale de la funcion

    }

    //Recorrer el array de objetos y mostrar las peliculas
    peliculasGuardadas.forEach((pelicula, indice) => {

        const peliArticle = document.createElement("article"); // Crea un nuevo elemento article

        peliArticle.innerHTML = `

            <h3>${pelicula.titulo}</h3> <!-- Muestra el titulo de la pelicula -->
            <p>Fecha de guardado: ${pelicula.fecha}</p> <!-- Muestra la fecha de guardado de la pelicula -->
            <p>Popularidad: ${pelicula.popularidad}</p> <!-- Muestra la puntuacion de popularidad de la pelicula -->
        `;

        //Crear boton de eliminar
        const btnEliminar = document.createElement("button"); // Crea un nuevo elemento button
        btnEliminar.textContent = "Eliminar"; // Asigna el texto al boton
        btnEliminar.addEventListener("click", () => eliminar(indice)); // Añade un evento al boton

        peliArticle.appendChild(btnEliminar); // Añade el boton al elemento article
        peliArticle.appendChild(document.createElement("hr")); // Añade una linea horizontal al elemento article
        
        listado.appendChild(peliArticle); // Añade el nuevo elemento article al listado
        
    });

    return false; // Sale de la funcion


} // Funcion para mostrar las peliculas guardadas

function guardarPelicula() {

    //seleccionar la caja de text y sacar el valor
    let campoTitulo = document.querySelector("#titulo"); // Selecciona el campo de texto por su id
    let titulo = campoTitulo.value; // Obtiene el valor del campo de texto


    //Validacion de que el campo no este vacio
    if(titulo.trim() === "") { // Si el campo de texto esta vacio

        alert("El campo no puede estar vacio"); // Muestra un mensaje de alerta

        return false; // Sale de la funcion

    }

    //Conseguir fecha actual
    const fecha = new Date(); // Crea un nuevo objeto de fecha con la fecha y hora actuales
    const fechaGuardado = fecha.toLocaleDateString(); // Convierte la fecha a una cadena de texto en el formato local (dd/mm/aaaa)

    console.log(fechaGuardado); // Muestra la fecha en la consola
    
    //Generar puntuacion aleatoria entre 1 y 100
    let popularidad = Math.floor(Math.random() * 100) + 1; // Genera un numero aleatorio entre 1 y 100

    console.log(popularidad); // Muestra la puntuacion en la consola

    //Crear objeto pelicula con los datos necesarios
    let pelicula = { // Crea un objeto pelicula con los datos necesarios
        titulo, // Asigna el valor del campo de texto al objeto
        fecha: fechaGuardado, // Asigna la fecha guardada al objeto
        popularidad // Asigna la puntuacion aleatoria al objeto
    }

    console.log(pelicula); // Muestra el objeto pelicula en la consola

    //Sacar todos las peliculas (array de objetos) del localStorage
    let peliculasGuardadas = JSON.parse(localStorage.getItem("peliculas")) || []; // Intenta obtener el array de objetos del localStorage, si no existe, crea un array vacio
    
    if(!peliculasGuardadas) { // Si no hay peliculas guardadas
        
        peliculasGuardadas = []; // Crea un array vacio

    }

    //Añadir la nueva pelicula al array de objetos
    peliculasGuardadas.push(pelicula); // Añade la nueva pelicula al array de objetos

    //Guardar todo en el localStorage
    localStorage.setItem("peliculas", JSON.stringify(peliculasGuardadas)); // Guarda el array de objetos en el localStorage como una cadena de texto

    //Limpiar el campo de texto
    campoTitulo.value = ""; // Limpia el campo de texto

    //Mostrar las peliculas en la pantalla
    mostrarPeliculas(); // Llama a la funcion mostrarPeliculas
    
    
    return true; // Devuelve verdadero para indicar que la funcion se ha ejecutado correctamente
}// Funcion para guardar la pelicula

//Carga automatica de peliculas al abrir la web
window.addEventListener("load", () => { // Cuando se carga la pagina

    //Cargar las peliculas guardadas
    mostrarPeliculas(); // Llama a la funcion mostrarPeliculas para mostrar las peliculas guardadas

    //Aplicar la funcion para mostrar las peliculas
    let formulario = document.querySelector("#formulario"); // Selecciona el formulario por su id

    formulario.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita que se recargue la pagina al enviar el formulario
    
        guardarPelicula(); // Llama a la funcion guardarPelicula

    })//Funcion para eliminar peliculas


}) //Funcion para eliminar peliculas


