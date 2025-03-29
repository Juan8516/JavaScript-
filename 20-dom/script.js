//DOM - Document Object Model

//getElementById = es un método del DOM que permite seleccionar un elemento HTML específico utilizando el valor de su atributo id

const caja = document.getElementById("caja"); // Selecciona el elemento con id "caja"

caja.innerHTML = "<h2>Articulos deportivos</h2>"; // Cambia el contenido HTML del elemento seleccionado

console.log(caja.innerText); // Imprime el elemento en la consola

