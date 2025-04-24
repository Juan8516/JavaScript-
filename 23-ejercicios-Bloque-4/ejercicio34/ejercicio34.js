/*
Ejercicio 34

Crea un programa que abra una nueva ventana con una web
pero con diferentes tamaños.

Hacer que el usuario pueda elegir tres tamaños diferentes de ventana: (pequeña, mediana y grande).
*/

let ventanaPequena = document.querySelector("#ventanaPequena");
let ventanaMediana = document.querySelector("#ventanaMediana");
let ventanaGrande = document.querySelector("#ventanaGrande");

let abrirVentana = (altura, anchura) => {

    window.open("https://developer.mozilla.org/es/",
                "_blank",
                `width=${altura}, height=${anchura}`);
    
    return true;
};

ventanaPequena.addEventListener('click', () => {

    abrirVentana(300, 400);

});

ventanaMediana.addEventListener('click', () => {

    abrirVentana(500, 600);

});

ventanaGrande.addEventListener('click', () => {

    abrirVentana(800, 800);

});
