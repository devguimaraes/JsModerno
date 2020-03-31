//Aula sobre metodos uteis para objetos

/*

Veremos nessa aula:
Obeject.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')... spread

*/

const produto = {
    nome: 'Caneca',
    preco: 1.80,

}

Object.defineProperties(produto, {
    'nome':{
        writable: false,
        configurable: false,
    }
})

//retorna array com as chaves e valores do objeto
console.log(Object.entries(produto))

//retorna o valor da propriedades do objeto
Object.values(produto)



//Retorna as configurações da propriedade
Object.getOwnPropertyDescriptor(produto, 'nome')

//Freeze congela a variavel fazendo com que fica impossivel alterar seus valores
Object.freeze(produto)

//Retorna as chaves do objeto
Object.keys(produto)

//copiando um objeto para outro usando assign
const prod2 = Object.assign({}, produto)

//Copiando um objeto para outro usando spread
const OutroProduto = {...produto} //spread operator
OutroProduto.preco = 25
OutroProduto.nome = "Maconha"
OutroProduto.tipo = 'Sativa'





