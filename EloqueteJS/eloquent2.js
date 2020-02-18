/*
Escreva uma função chamada range que recebe dois argumentos, start (início) e end (fim), e retorna um array contendo todos os números a partir do valor start até o valor end (incluindo-o). OK

Em seguida, escreva a função sum que recebe um array de números como argumento e retorna a soma desses números. Execute o programa anterior e veja se o resultado retornado é de fato 55.
*/


let numArray = [];
let somaArrays = function range(inicio, fim, passo = 1){
    while(inicio <= fim){
        numArray.push(inicio);
        (passo < 0 ? passo = 1 : passo = passo)
        inicio += passo;
    }
    return numArray.join(" ");

}

function somarArrayTudo(somaArrays){
     let somatorio = 0;
     for (let dados of somaArrays){
        somatorio += dados; 
     }
     return somatorio;

}

function aoContratrio(somaArrays){
    somaArrays.reverse();
    return somaArrays
}

console.log(somaArrays(1,10));








