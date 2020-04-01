//Aula sobre prototypes

/*
Todos os objetos tem uma referência interna para um protótipo (_proto_) que vem da propriedade prototype da função construtora que foi usada para criá-la. 
Quando tentamos acessar um membro do proprio objeto e depois a cadeia de protótipos é sauda até o topo (null) até encontrar (ou não) tal membro.

*/

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    
}

Pessoa.prototype.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`
}

Pessoa.prototype.numeroDeLetras = function(){
    let nomeInteiro = this.nome + this.sobrenome;
    return `Seu nome tem ${nomeInteiro.length} letras`
}
const outraPessoa = new Pessoa('Joao', 'Alberto')
console.log(outraPessoa.nomeCompleto())
console.log(outraPessoa.numeroDeLetras())
const bruno = new Pessoa("Bruno", 'Guimaraes')
console.log(bruno.nomeCompleto())
console.log(bruno.numeroDeLetras())

