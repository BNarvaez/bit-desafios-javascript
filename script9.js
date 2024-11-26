
// Desafio #9
/* - Crear seis funciones, (sumar, restar, multiplicar, dividir, modulo), cada función dede recibir 2 numeros y retornar un resultado según corresponda.*/

function sumar(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

function dividir(a, b){
    return a / b;
}

function modular(a, b){
    return a % b;
}

function potenciar(a, b){
    return a ** b; 
}

/* - Crear una función que reciba el nombre de la operación y 2 números, debe imprimir el resultado.*/


function operar(operacion, a, b){
    if(operacion === 'suma'){
        console.log(`${a} + ${b} = ${sumar(a, b)}`);
    }
    if(operacion === 'resta'){
        console.log(`${a} - ${b} = ${restar(a, b)}`);
    }
    if(operacion === 'multiplicacion'){
        console.log(`${a} * ${b} = ${multiplicar(a, b)}`);
    }
    if(operacion === 'division'){
        console.log(`${a} / ${b} = ${dividir(a, b)}`);
    }
    if(operacion === 'modulo'){
        console.log(`${a} % ${b} = ${modular(a, b)}`);
    }
    if(operacion === 'potencia'){
        console.log(`${a} ^${b} = ${potenciar(a, b)}`);
    }
    
}

operar('suma', 5, 5);
operar('resta', 5, 5);
operar('multiplicacion', 5, 5);
operar('dividir', 5, 5);
operar('modulo', 5, 5);
operar('potencia', 5, 5);