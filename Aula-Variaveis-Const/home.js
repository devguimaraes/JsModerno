//Variáveis CONST
//Constante não tem seu valor alterado
//Não pode-se user palavras reservadas
//Não pode começar com números, espaço ou traço
//É case sensitive
//Constante precisa ter o seu valor declarado desde o momento da sua criação


const fixa = "Meu valor não é alterado";
//fixa = "Valor alterado"; Valor não é alterado

const primeiroNumero = 5;
const segundoNumero = 10;
const result = (primeiroNumero + segundoNumero) * 2;
console.log(result);
console.log(fixa);

console.log(typeof(fixa), " - ", typeof(result));