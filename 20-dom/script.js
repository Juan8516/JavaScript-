//DOM - Document Object Model

//getElementById = es un método del DOM que permite seleccionar un elemento HTML específico utilizando el valor de su atributo id

const caja = document.getElementById("caja"); // Selecciona el elemento con id "caja"

caja.innerHTML = "<h2>Articulos deportivos</h2>"; // Cambia el contenido HTML del elemento seleccionado
caja.style.backgroundColor = "lightblue"; // Cambia el color de fondo del elemento seleccionado
caja.style.maxWidth = "50%"; // Cambia el ancho máximo del elemento seleccionado
caja.style.margin = "0, auto"; // Cambia el margen del elemento seleccionado
caja.style.padding = "35px"; // Cambia el relleno del elemento seleccionado
caja.style.border = "1px solid black"; // Cambia el borde del elemento seleccionado
caja.style.textAlign = "center"; // Cambia la alineación del texto del elemento seleccionado
caja.style.fontFamily = "Arial"; // Cambia la fuente del texto del elemento seleccionado

console.log(caja.innerText); // Imprime el elemento en la consola

