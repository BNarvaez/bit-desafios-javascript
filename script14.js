
// Desafio # 14

/* Crear una función que reciba 1 número, imprimir si es negativo o si es positivo o si es cero */

function comparar(a){
    if (a < 0){
        console.log(a + " es Negativo")
    }
    else if(a > 0){
        console.log(a + " es Positivo")
    }
    else{
        console.log('Es Cero')
    }
}

comparar(-2);
comparar(2);
comparar(0);

