/*
Escreva uma função min que recebe dois argumentos e retorna o menor deles.

 function min(num1, num2){
    return (num1 < num2 ? num1 : num2 )
 };

console.log(min(20, 10));

*/


/*
Nós vimos que o % (operador resto) pode ser usado para testar se um número é par ou ímpar, usando % 2 para verificar se ele é divisível por dois. Abaixo, está uma outra maneira de definir se um número inteiro positivo é par ou ímpar:

    Zero é par.
    Um é ímpar.
    Para todo outro número N, sua paridade é a mesma de N - 2.

Defina uma função recursiva isEven que satisfaça as condições descritas acima. A função deve aceitar um número como parâmetro e retornar um valor Booleano.

Teste-a com os valores 50 e 75. Observe como ela se comporta com o valor -1. Por quê? Você consegue pensar em uma maneira de arrumar isso?

*/

// function isEven(num1){
//    function find(num1, target){
//        if(num1 == 0){
//            return true;
//        }else if(num1 == 1){
//            return false;
//        }else {

//        }
//    }
// }

/*

Escreva uma função countBs que receba uma string como único argumento e retorna o número que indica quantos caracteres "B", em maiúsculo, estão presentes na string.

Em seguida, escreva uma função chamada countChar que se comporta de forma parecida com countBs, exceto que ela recebe um segundo argumento que indica o caractere que será contado (ao invés de contar somente o caractere "B" em maiúsculo). Reescreva countBs para fazer essa nova funcionalidade.

*/

// function countBs(valordastring){
//     let conta = 0;
//     for(let contador = 0; contador < valordastring.length; contador++){
//          if(valordastring.charAt(contador) == "B"){
//             conta += 1;  
//          } 
//     }
//     return conta;
// }

// console.log(countBs("BBBBBBBBBBruno Guimaraes"));


// function countChar(frase, parametro){
//     let somaParametro = 0;
//     for(let contador = 0; contador < frase.length; contador++){
//         if(frase.charAt(contador) == parametro){
//             somaParametro += 1;
//         }
//     }
//     return somaParametro;
// }


// console.log(countChar("O rato roeu a roupa do rei de roma", "r"))

// // let value = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9];
// // delete value[2];

// // for(let conta =0; conta < value.length; conta++ ){
// //     if(value[conta] == 0){
// //        value[conta] = 0 ;
// //     }else if (value[conta] == 1) {
// //         value[conta] = 1;
// //     }else if(value[conta] == null){
// //         value[conta] = conta + 1;
// //     }
// // }

// console.log(value.join(" "));

let meuDados = {
    nome: "Bruno Guimaraes",
    idade: 30,
    time: "flamengo",
}

console.log("idade" in meuDados); //o in verifica se o objeto possuio a propriedade declarada 