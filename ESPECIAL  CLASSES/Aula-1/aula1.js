//Aula sobre classes JS

//Classe 
class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome
    }

    falarNome(){
        return `${this.nome} ${this.sobrenome}`
    }

    comer(){
        return `Estou comendo`
    }
}


//função construtora
function Pessooa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

}

Pessooa.prototype.falar = function(){
    return `${this.nome} ${this.sobrenome}` 
}

const p1 = new Pessoa('Luiz', 'Otávio')
console.log(p1.comer())

const p2 = new Pessooa('Outro nome', 'Estranho')
console.log(p2.falar())
