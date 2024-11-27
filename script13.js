
// Desafio # 13

/* crear una función que reciba 2 números, imprimir si el primer número divisible por el segundo.*/

function esDivisible(a, b){
    if (a % b === 0){
        console.log(a + " es divisible por " + b)
    }
    else{
        console.log(a + " no es divisible por " + b)
    }
}

esDivisible(8,4);
esDivisible(7,5);
