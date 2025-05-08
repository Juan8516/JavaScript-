//Promesas: son objetos que representan el resultado eventual (éxito o fracaso) de una operación asíncrona, evitando 
// el "callback hell" y permitiendo un manejo más estructurado.

// 🔹 Características clave:
// ✅ Estados: pending (pendiente), fulfilled (cumplida), rejected (rechazada).
// ✅ Métodos:

// .then() → Maneja el éxito.
// .catch() → Maneja errores.
// .finally() → Se ejecuta siempre.

//Promesa simple
let miPromesa = new Promise((resolve, reject) => {

    setTimeout(() => {

        let correcto = true; // Cambia a false para simular un error

        if(correcto) {
            let miObjeto = {
                nombre: "Saint Seiya awakening", 
                categoria: "RPG",
                precio: 0.99,
                anio: 2023,
                desarrollador: "Gumi Inc.",
            };

            resolve(miObjeto); // Resuelve la promesa con el objeto
        } else {
            reject("Error: La operación falló.");
        }
    }, 3500); // Simula un retraso de 3.5 segundos

});

miPromesa
    .then(resultado => {
        console.warn(resultado); // Se ejecuta si la promesa se cumple
    })
    .catch(error => {
        console.error("El error es: ", error); // Se ejecuta si la promesa es rechazada
    });

alert("Hola");
alert("Soy Juan Manuel");
alert("Salazar");

//Promesas encadenadas
function servirPizza() {

    return new Promise(resolve => {
        setTimeout(() => resolve("Pizza lista"), 15000); // Simula un retraso de 15 segundos
    });
}

function servirHamburguesa() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Hamburguesa lista"), 8000); // Simula un retraso de 8 segundos
    });
}

function servirPuntaDeAnca() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Punta de anca lista"), 20000); // Simula un retraso de 20 segundos
    });
}

servirPizza()
            .then(resultado1 => {
                console.log(resultado1); // Se ejecuta cuando la pizza está lista
                return servirHamburguesa(); // Devuelve la promesa de la hamburguesa
            })
            .then(resultado2 => {
                console.log(resultado2); // Se ejecuta cuando la hamburguesa está lista
                return servirPuntaDeAnca(); // Devuelve la promesa de la punta de anca
            })
            .then(resultado3 => {
                console.log(resultado3); // Se ejecuta cuando la punta de anca está lista
            })
            .catch(error => {
                console.error("Error en el pedido revisar:", error); // Maneja cualquier error en la cadena de promesas
            });