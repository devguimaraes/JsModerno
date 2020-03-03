//Aula de break e Contiue
/*
A palavra chave continue termina a atual iteração do laço em que ele se encontra ou de um laço rotulado, e continua a execução deste laço com a próxima iteração.

*/
const numeros = [1,2,3,4,5,6,7,8,9];

// for (let num of numeros){
//     if(num === 2 || num === 5 ){
//         continue;//A palavra continue pula um número
//     }
//     console.log(num)
// }


/*
O comando break encerra o loop atual, switch, ou o loop que foi informado no label e transfere o controle da execução do programa para o comando seguinte.
*/

for(let num of numeros){
    if(num === 8){
        console.log("Achei número oito, sai do jogo");
        break;//O break sai do bloco qunando encontra a condição
    }
    console.log(num)
}