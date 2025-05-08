//Fetch: Es una API moderna de JavaScript para hacer peticiones HTTP (GET, POST, PUT, DELETE, etc.) y manejar 
// respuestas de forma asíncrona. Devuelve una Promesa que resuelve en la respuesta del servidor.

//Sacar datos de un backend (API) y mostrarlos en el frontend (HTML).
fetch("https://reqres.in/api/users?page=2") // URL de la API
    .then(response => response.json()) // Convierte la respuesta a JSON
    .then(usuario => {
        
        console.log(usuario.data); // Muestra el objeto de usuario en la consola
        mostrarUsuario(usuario.data[4]); // Llama a la función mostrarUsuario con el primer usuario

    })
    .catch(error => {
        console.error("Error:", error); // Manejo de errores
    });

function mostrarUsuario(user) {
    let caja = document.querySelector("#user"); // Selecciona el elemento con id "caja"

    caja.innerHTML = `
        <h2>${user.first_name} ${user.last_name}</h2>
        <img src="${user.avatar}" />
    `;
}

//Guardar datos en un backend (API) y mostrarlos en el frontend (HTML).
const guardarDatos =  {

    "name": "Juan Manuel Salazar",
    "job": "Desarrollador web"
};

// fetch("https://reqres.in/api/users", {
//     method: "POST", // Método de la petición
//     headers: {
//         "Content-Type": "application/json" // Tipo de contenido
//     },
//     body: JSON.stringify(guardarDatos) // Convierte el objeto a JSON

// })
// .then(response => response.json()) // Convierte la respuesta a JSON
// .then(data => {
//     console.log(data); // Muestra la respuesta en la consola
// })
// .catch(error => {
//     console.error("Error:", error); // Manejo de errores
// });

//Sintaxis con promesas async/await:Es una forma moderna de trabajar con promesas en JavaScript, permitiendo escribir 
// código asíncrono de manera más clara y secuencial (como si fuera síncrono)
async function sacarUsuarios() {

    try {
        let response = await fetch("https://reqres.in/api/users?page=2"); // Espera la respuesta de la API
        let data = await response.json(); // Convierte la respuesta a JSON

        data.data.forEach(user => {
            console.log(user); // Muestra cada usuario en la consola
        });
    }catch(error) {
        console.error("El error atrapado es:", error); // Manejo de errores
    }
}

sacarUsuarios(); // Llama a la función sacarUsuarios
