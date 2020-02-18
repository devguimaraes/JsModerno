// /*
// Escreva uma função chamada range que recebe dois argumentos, start (início) e end (fim), e retorna um array contendo todos os números a partir do valor start até o valor end (incluindo-o). OK

// Em seguida, escreva a função sum que recebe um array de números como argumento e retorna a soma desses números. Execute o programa anterior e veja se o resultado retornado é de fato 55.
// */

// let numArray = [];

// function range(inicio, fim, passo = 1){ 
//     while(inicio <= fim){
//         numArray.push(inicio);
//         (passo < 0 ? passo = 1 : passo = passo)
//         inicio += passo;
//     }
//     return numArray

// };

// // console.log(range(1,10))//1 2 3 4 5 6 7 8 9 10

// function arraySoma(numArray){
//      let somatorio = 0;
//      for (let dados of numArray){
//         somatorio += dados; 
//      }
//      return somatorio;

// }
// // console.log(arraySoma(range(1,10))) //55

// function arrayReverso(somaArrays){
//     let newArray = [];
//     newArray.push(somaArrays.reverse());
//     return somaArrays
// }

// function indiceArrayReverso(variavelArray){
//     let seila = [];
//     for(valor of variavelArray){
//     //seila.unshift(valor) //saida com valor normal do array 
//     seila.push(valor)//valor inverso do array
    
     
       
//     }
//     return seila.join(" ")
// };

// console.log(`O array é ${range(90, 100).join(" ")}`);
// console.log(`O array ao contrário é ${arrayReverso(numArray).join(" ")}`);
// console.log(indiceArrayReverso(numArray));

let newArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let valor = [];
for(dados of newArray){
  valor.unshift(dados);
  console.log(valor)
   
}





