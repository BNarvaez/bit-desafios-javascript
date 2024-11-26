
// Desafio #8
/* Crear 5 funciones, (sumar, restar, multiplicar, dividir, modulo), dede recibir 2 numeros e imprimir el resultado asi:
Ej: entrada: 8,4
Ej: salida: 8 + 4 = 12 */

function sumar(a, b){
    const resultado = a + b;
    console.log(`${a} + ${b} = ${resultado}`);
    
}

sumar(8, 4);
sumar(100,25);

function restar(a, b){
    const resultado = a - b;
    console.log(`${a} - ${b} = ${resultado}`);
    
}

restar(8, 4);
restar(100,25);

function multiplicar(a, b){
    const resultado = a * b;
    console.log(`${a} x ${b} = ${resultado}`);
    
}

multiplicar(8, 4);
multiplicar(100,25);

function dividir(a, b){
    const resultado = a / b;
    console.log(`${a} / ${b} = ${resultado}`);
    
}

dividir(8, 4);
dividir(100,25);

function modular(a, b){
    const resultado = a % b;
    console.log(`${a} % ${b} = ${resultado}`);
    
}

modular(8, 4);
modular(100,25);

function potenciar(a, b){
    const resultado = a ** b;
    console.log(`${a} ^${b} = ${resultado}`);
    
}

potenciar(8, 4);
potenciar(100,25);