//Aula de desestruturação em OBJETOS
const pessoa = {
    nome : "luiz",
    sobrenome : "Guimarães",
    idade : 30,
    endereço : {
        rua: "Avenida Brasil",
        numero: 777
    }
}
//Atribuição por desestruturação
const {primeiroNome, idade, endereço: {rua}} = pessoa; //pega o valor de nome e idade no objeto pessoa
console.log(rua)