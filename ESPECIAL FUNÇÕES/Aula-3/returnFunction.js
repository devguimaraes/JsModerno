//Aula sobre retorno de funções (return)

/*
    Sempre que tiver um retorno dentro de uma função, ele imediatamente quebra o ciclo e sai da função

*/

// function soma(a, b){
//     return a + b;
// }

// function criaPessoa(nome, sobrenome){
//     return {
//         nome, sobrenome
//     }
// }

// const pessoa = criaPessoa("Bruno", "Guimaraes")
// console.log(pessoa)

// function falaFrase(comeco){
//     function falaResto(resto){
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }

// const fala = falaFrase('primeiro parametro')
// const final = fala('segundo parametro');

// console.log(final)

function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    }   
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(10))
console.log(triplica(20))
console.log(quadriplica(30))

