//DOM - Document Object Model

//getElementById = es un método del DOM que permite seleccionar un elemento HTML específico utilizando el valor de su atributo id

const caja = document.getElementById("caja"); // Selecciona el elemento con id "caja"

// Configuración del contenido y estilo del elemento con id "caja"
caja.innerHTML = "<h2>Articulos deportivos</h2>"; // Cambia el contenido HTML del elemento seleccionado

/*
//Directo desde el script
caja.style.backgroundColor = "lightblue"; // Cambia el color de fondo del elemento seleccionado
caja.style.maxWidth = "50%"; // Cambia el ancho máximo del elemento seleccionado
caja.style.margin = "0, auto"; // Cambia el margen del elemento seleccionado
caja.style.padding = "35px"; // Cambia el relleno del elemento seleccionado
caja.style.border = "1px solid black"; // Cambia el borde del elemento seleccionado
caja.style.textAlign = "center"; // Cambia la alineación del texto del elemento seleccionado
caja.style.fontFamily = "Arial"; // Cambia la fuente del texto del elemento seleccionado
*/

//Desde el CSS
caja.classList.add("cajita"); // Agrega la clase "caja" al elemento seleccionado

//Crear clases desde JavaScript
//caja.className = "cajota"; // Cambia la clase del elemento seleccionado

//Uso de funcion
function cambiarColor(color, radius) {
  caja.style.backgroundColor = color; // Cambia el color de fondo del elemento seleccionado
  caja.style.borderRadius = radius; // Cambia el radio del borde del elemento seleccionado
}

console.log(caja.innerText); // Imprime el elemento en la consola

//Recomendables
//getElementsByClassName = Selecciona todos los elementos que tienen una clase específica
let articulos = document.getElementsByClassName("articulo"); // Selecciona todos los elementos con la clase "article"
console.log(articulos); // Imprime el elemento en la consola

for(let i = 0; i < articulos.length; i++) {

  articulos[i].classList.add("articuloBase"); // Agrega la clase "articuloBase" a cada elemento seleccionado
  articulos[i].innerHTML += "<a href = 'https://developer.mozilla.org/es/docs/Glossary/DOM'>Mas info ... DOM </a>"

  if(i === 0) {
    articulos[i].classList.add("articuloAmarillo"); // Agrega la clase "articuloAmarillo" al primer elemento seleccionado
  }

  if(i === (articulos.length - 1)) {
    articulos[i].classList.add("articuloUltimo"); // Agrega la clase "articuloUltimo" al ultimo elemento seleccionado
    articulos[i].innerHTML = `<h3>Para mas del DOM en: https://developer.mozilla.org/es/docs/Glossary/DOM </h3>`; // Cambia el contenido HTML de cada elemento seleccionado
  }

  //Añadir un nodo al DOM
  let enlace = document.createElement("a"); // Crea un nuevo elemento <a>
  enlace.setAttribute("href", "https://www.w3schools.com/js/js_htmldom.asp"); // Establece el atributo href del nuevo elemento <a>
  enlace.setAttribute("target", "_blank"); // Establece el atributo target del nuevo elemento <a>
  enlace.style.color = "green"; // Cambia el color del texto del nuevo elemento <a>

  let textoEnlace = document.createTextNode(" Mas info del ... DOM"); // Crea un nuevo nodo de texto

  enlace.append(textoEnlace) // Añade el nodo de texto al nuevo elemento <a>
  articulos[i].append(enlace); // Añade el nuevo elemento <a> al elemento seleccionado

}

//getElementsByTagName = Selecciona todos los elementos que tienen una etiqueta específica
let nuevosArticulos = document.getElementsByTagName("article"); // Selecciona todos los elementos con la etiqueta <article>
console.log(nuevosArticulos[3]); // Imprime el elemento en la consola

//querySelector = Selecciona el primer elemento que coincide con un selector CSS especificado
//querySelectorAll = Selecciona todos los elementos que coinciden con un selector CSS especificado

