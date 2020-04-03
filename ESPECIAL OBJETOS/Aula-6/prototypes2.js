// //Manipulando prototypes
// const objetoA = {
//     ChaveA: 'A'
// }

// const objetoB = {
//     ChaveB: 'B'
// }

// const objetoC = {
//     ChaveC: 'C'
// }

// Object.setPrototypeOf(objetoC, objetoB)

// //Colocando a variavel objetoA como prototype da variavel objetoB
// Object.setPrototypeOf(objetoB, objetoA)

// //Acessando a CHAVE A pela variavel B
// console.log(objetoC.ChaveC)


function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(valor){
    this.preco = (this.preco - ((this.preco * valor) / 100))
}

Produto.prototype.aumento = function(valor){
    this.preco = (this.preco + ((this.preco * valor) / 100))
}
const agua = new Produto('Agua', 500)
agua.aumento(10)

//Usando o prototype de Produto num novo objeto
const camiseta = {
    tecido: 'Algodão',
    tamanho: 'M',
    preco: 20
}
//Setando o prototype de Produto em camiseta
Object.setPrototypeOf(camiseta, Produto.prototype)
camiseta.desconto(60)


//Criando objeto e passando prototype do Produto 
const p3 = Object.create(Produto.prototype, {
    quantidade: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 700,
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 10,
    }
})
console.log(p3)