//Fetch: Es una API moderna de JavaScript para hacer peticiones HTTP (GET, POST, PUT, DELETE, etc.) y manejar 
// respuestas de forma asíncrona. Devuelve una Promesa que resuelve en la respuesta del servidor.


fetch("https://reqres.in/api/users?page=2") // URL de la API
    .then(response => response.json()) // Convierte la respuesta a JSON
    .then(usuario => {
        
        console.log(usuario.data); // Muestra el objeto de usuario en la consola
        mostrarUsuario(usuario.data[5]); // Llama a la función mostrarUsuario con el primer usuario

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