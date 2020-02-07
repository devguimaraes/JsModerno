//Números com Js

let num0 =  0.7; //inteiro
let num1 = 0.1; //real

num0 += num1; //0.8
num0 += num1; //0.9
num0 += num1; //1.0


num0 = Number(num0.toFixed(2));
console.log(typeof(num0))
console.log(Number.isInteger(num0));



//console.log(num0.toString() + num1.toString())//Converte numa string

//console.log(num0.toFixed(2))//Limita as cadas decimais do elemento

//console.log(Number.isInteger(num1));//Verifica se um número é inteiro, caso seja retorna TRUE;

//let temp = 1 * "olá";
//console.log(Number.isNaN(temp));//Verifica se a variavel NÃO É UM NÚMERO, CASO NÃO SEJA RETORNA TRUE. CASO SEJA UM NÚMERO RETORNA FALSE



