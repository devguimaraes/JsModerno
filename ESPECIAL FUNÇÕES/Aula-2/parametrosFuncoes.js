//Aula sobre parametros de função

/*
Todos os argumentos passados numa função ficam armazenados numa variavel chamada ARGUMENTS

Se por acaso, for declarado algum parametrô é ele não for preenchido a engine do JS alimenta o valor como UNDEFINED

Nos parametros, se não for passado nenhuma valor automaticamente ele vai receber zero ou qualquer outro valor passado no lugar do zero
*/

let total = 0;
function chamaFuncao(a = 0, b = 0, c = 0, d = 0, e = 0){
    // console.log(arguments) vai aparecer todos os argumentos
    for (let argumentos of arguments){
        total += argumentos
    }
    console.log(total)
}

chamaFuncao(10, 9)


//Funções com parametros de desestruturação
function funcao2({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade)
}
const obj = {nome: "Bruno", sobrenome: "Guimaraes", idade: 50}

funcao2(obj) 

//usando rest operator para receber os números, se precisar de um array 

/*

Para usar o arguments como resto operator, usa-se dessa forma: ..args

*/

const calcular = function conta(...args){
   console.log(args)
}

calcular('+', 0, 20, 30, 40, 50, 60, 70)