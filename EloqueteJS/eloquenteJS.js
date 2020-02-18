//Exercicios Eloquente

/*
Escreva uma função chamada range que recebe dois argumentos, start (início) e end (fim), e retorna um array contendo todos os números a partir do valor start até o valor end (incluindo-o).

Em seguida, escreva a função sum que recebe um array de números como argumento e retorna a soma desses números. Execute o programa anterior e veja se o resultado retornado é de fato 55.
*/

let numeroArray = function range(inicio, fim, passo = 1){
    let numArray = [];
     while(inicio <= fim){
         numArray.push(inicio);
         inicio +=  passo;
     }
     return numArray;
}//Precisa ainda modificar a função pra receber número negativos

function somaArray(numeroArray){
    let somar = 0;
    for(let i = 0; i < numeroArray.length; i++){
      somar += numeroArray[i];
    }
    return ` O valor da somar dos elementos do array é ${somar}`;
}

let valorArray = numeroArray(20, 30);
console.log(somaArray(valorArray));




 





