//Aula de Objetos com JS

// //Criando um objeto
// const dadosAlunos = {
//     nome:"Bruno",
//     cpf: 12814320750,
//     idade: 30,
//    profissão: "Programador Web"
// };


//Criando objetos a partir de funções
// function CriaPessoa(nome, sobrenome, idade){
//     return {nome, sobrenome, idade}
// }

// const humano = CriaPessoa("Bruno", "Cesar", 30);
// console.log(humano);

// const pessoa1 = CriaPessoa("Bruno", "Guimaraes", 30);
// const pessoa2 = CriaPessoa("Alessandra", "Fernandes", 30);
// const pessoa3 = CriaPessoa("Dilmar", "Fernandes", 30);
// const pessoa4 = CriaPessoa("Gieselly", "Fernandes", 30);
// const pessoa5 = CriaPessoa("Artur", "Fernandes", 30);


// console.log(pessoa1, pessoa5);


let dadosPessoais = {
    nome: "Bruno",
    sobrenome: "Cesar",
    idade: 30,
    nascimento(){
        let dataAtual = new Date();
        let year = dataAtual.getFullYear();
        return `O ano de nascimento é ${year - this.idade}`;
    }, 
    
};


console.log(dadosPessoais.nascimento());

