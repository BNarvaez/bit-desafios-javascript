
// Desafio #5
/*Crear una función que reciba dos párametros, un nombre y un apellido y retorne el nombre completo, primero el apellido y luego el nombre.*/

function desafio5(nombre, apellido) {
    return  apellido + " " + nombre;
}

let valorRetornado = desafio5('Brayan', 'Narvaez');
let valorRetornado1 = desafio5('Valentina', 'Restan');
console.log(valorRetornado , valorRetornado1)