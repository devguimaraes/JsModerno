/*Mais sobre strings
Exercicio aula anterior

let varA = "A";
let varB = "B";
let varC = "C";

[varA, varB, varC] = [varC, varA, varB];

console.log(varA, varB, varC);




let umaString = "Um texto";

console.log(umaString[0]);//acessando uma letra do indice da variavel umaString;

console.log(umaString.charAt(1))//faz a mesma coisa que o de cima;
*/

let umaString = "Este é um texto experimental";

//let dois = umaString.split(" ", 2);//Divide a string em array usando parametrô 


//console.log(umaString.slice(10,15))//retorna uma cópia da parte da string ou array. No exemplo retorna 'texto'

// console.log(umaString.replace(/e/g, 4));//substitui uma expressão por outra

console.log(umaString.indexOf("texto"))//retornar o índice da string

console.log(umaString.lastIndexOf("x"))//faz a mesma coisa que o anterior só que do final pro inicio

//console.log(umaString.match(/[A-Z]/g))//Usado em empressões regulares ou REGEX*estudar