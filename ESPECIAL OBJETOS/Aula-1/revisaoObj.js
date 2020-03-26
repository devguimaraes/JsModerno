//Aula de revisão de objetos

const objeto = {
    nome: 'Bruno',
    sobrenome: 'Guimaraes'

}
//Anotação de colchete para acessar propriedades do objeto
// console.log(objeto['nome'])
//Anotação de ponto para acessar propriedades do objeto
// console.log(objeto.sobrenome)


//Forma de declarar objeto
// const professor = new Object();
// professor.nome = 'Gustavo';
// professor.sobrenome = 'Guanabara';
// professor.falarNome = function(){
//     console.log(`Meu nome é ${this.nome} meu sobrenome é ${this.sobrenome} é eu dou aula de programação`)
// }

//para apagar alguma propriedade
// delete professor.nome

// professor.falarNome()


//Função construtora
function Livro(nome, ano){
    this.nome = nome;
    this.ano = ano;


   
}

const heranca = new Livro('Herança', 2020)
Object.freeze(heranca)//Esta função congela a variavel fazendo com que fique impossível alterar os valores do objeto nela contido.
heranca.ano = 2021
console.log(heranca)//retorna ano 2020