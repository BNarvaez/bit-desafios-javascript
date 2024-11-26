
// Desafio #7
/* Crear una función para saludar, si la función recibe un nombre, imprimir por consola: Hola, ____! Si la función no recibe un nombre, imprimir: Hola, desconocido!*/


function desafio7(nombre = 'desconocido'){
    console.log(`Hola, ${nombre}!`)
}

desafio7('Brayan');
desafio7()