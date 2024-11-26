
// Desafio #6
/* Crear una función que reciba cuatro párametros, un nombre, una prenda, un color y una cantidad y retorne: ____ tiene __ ____ de color ____. Ej entrada: pepita, camisas, azul, 2 Ej salida: Pepita tiene 2 camisas de color azul.*/


function desafio6(nombre, prenda, color, cantidad) {
    return nombre + ' tiene ' + cantidad + ' ' + prenda + ' de color ' + color+'.';
}

let resultado = desafio6('Brayan', 'camisas', 'azul', 3);
let resultado2 = desafio6('Karen', 'vestidos', 'rosado', 2);
console.log(resultado)