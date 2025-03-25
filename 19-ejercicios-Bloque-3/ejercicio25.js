/*
    ----Ejercicio 24----

    -Crear un array conn una lista de ingredientes (hamburguesas, pizza, empanadas, etc)
    
   Mostrar la receta completa con una frase divertida ... 

    🧑‍🍳
*/

const ingredientes = [
    "Aceite canola o vegetal para freír",
    "1 + ¾ de taza de fécula de maíz",
    "¼ de taza de harina de yuca",
    "1 taza de queso costeño o feta rallado",
    "1 taza de queso fresco",
    "1 huevo",
    "½ de cucharadita de polvo de hornear",
    "2 cucharadas de azúcar",
    "Una pizca de sal",
    "5 cucharadas de leche o más si es necesario"
];

let recetaBuñuelos = 'Coloque todos los ingredientes ' + ingredientes.join(', ') + 'excepto el aceite en un tazón mediano y mezcle bien con las manos hasta obtener una masa suave y formar bolitas.\n' + 
'En una olla muy profunda, caliente el aceite vegetal a 300 ° F . Colocar con cuidado las bolas en el aceite caliente. Freír hasta que estén dorados, unos 3 a 4 minutos.\n' + 
'Retirar del aceite y escurrir en un plato cubierto con toallas de papel. Servir.'

document.write(recetaBuñuelos);