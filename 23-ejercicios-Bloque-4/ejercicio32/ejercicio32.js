/*
Ejercicio 32

Crea una lista de compras en la que el usuario pueda añadir, nuevos productos
para comprar con un campo de texto y un boton.

Cada vez que añade un producto, se debe mostrar un boton para eliminarlo de la lista.

El usuario podra agrergar tantos productos como quiera y eliminarlos cuando quiera.
*/

document.addEventListener("DOMContentLoaded", () => {

    //Todo el programa en JS
    let nuevoProducto = document.querySelector("#nuevoProducto");
    let btnAgregar = document.querySelector("#btnAgregar");
    let listaCompra = document.querySelector("#listaCompra");

    btnAgregar.addEventListener("click", () => {

        let productoParaAgregar = nuevoProducto.value.trim();

        if(productoParaAgregar) {

            // Crear un nuevo elemento de lista con el producto
            const productoFinal = document.createElement("li"); // Crear un nuevo elemento de lista
            productoFinal.textContent = productoParaAgregar; // Asignar el texto del producto

            // Crear un botón para eliminar el producto
            const btnEliminar = document.createElement("button"); // Crear un nuevo botón
            btnEliminar.textContent = "Eliminar"; // Asignar el texto del botón

            btnEliminar.addEventListener("click", () => {
                productoFinal.remove(); // Eliminar el producto de la lista
            }); // Agregar un evento al botón para eliminar el producto

            productoFinal.appendChild(btnEliminar); // Agregar el botón al elemento de lista
            productoFinal.classList.add("producto"); // Agregar una clase al elemento de lista

            listaCompra.appendChild(productoFinal); // Agregar el nuevo producto a la lista
            nuevoProducto.value = ""; // Limpiar el campo de texto

        }

    });
});
