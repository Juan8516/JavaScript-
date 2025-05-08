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