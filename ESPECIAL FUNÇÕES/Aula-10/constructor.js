//Aula sobre funções construtoras


/*
funções construtoras retorna objetos

Funções construtoras sempre começam com letra Maiuscula (new) 

*/

function Pessoa(nome, sobrenome){
    //variaveis criadas internamente são privadas ao escopo da função construtora
    let identidade = Math.floor(Math.random() * (100 - 50)) + 50;
    console.log(identidade)

    //Usando a palavra this, são atributos e métodos públicos. Quem podem ser acessada externamente
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(`O nome do aluno é ${this.nome} ${this.sobrenome} O ID do aluno: ${identidade} `)
    }
}


const p1 = new Pessoa('Bruno', 'Guimaraes');
p1.metodo()

