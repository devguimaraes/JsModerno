//Dados primitivos com JS

const nome = "Primeiro Nome" //STRING
const nome2 = "Segundo Nome" //STRING
const nome3 = "terceiro Nome" //STRING

const num1 = 10; //Number Inteiro
const num2 = 10.52 //Number reais



/*
 A diferença entre Nulo e Undefined é que Nulo (null), é usado quando vc precisa setar o valor de  uma variável.

 Undefined não é declarado, apenas a linguagem faz isso. 

*/

let nomeAluno; //Undefined ou indefinido - não aponta pra local na mémoria
let sobrenomeAluno = null; //NULO - não aponta pra local na mémoria

const boolean = true //Tipo boleanos são verdeiros ou falsos
const boolean2 = false //0 - (zero) é falso (false) e 1 (um) é verdadeiro (true)


const a = [1, 2, 3, 4, 5, 6];
const b = a;
a.push(19); 
//Valores passados por referência apontam para o mesmo local da mémoria, por isso quando valor é adicionado a varivael B, ele também adiciona a variavel A


console.log(a,b)



