//Aula sobre Object.property() e Object.define.Properties()

//funcao construtora
function Produto(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    Object.defineProperties(this, {
        nome: {
            enumerable: true, //monstra a chave 
            value: nome, //recebe o valor da variavel
            writable: true, //pode alterar o valor se estiver true
            configurable: false //pergunta se a variavel é configuravel 
        },
        preco: {
            enumerable: true, //monstra a chave 
            value: preco, //recebe o valor da variavel
            writable: false, //pode alterar o valor se estiver true
            configurable: false //pergunta se a variavel é configuravel 
        },
        quantidade: {
            enumerable: true, //monstra a chave 
            value: quantidade, //recebe o valor da variavel
            writable: true, //pode alterar o valor se estiver true
            configurable: false //pergunta se a variavel é configuravel 
        }
    })

    //Operador Property define que a varivael quantida só pode ser definida uma vez
    // Object.defineProperty(this, 'quantidade',{
    //     enumerable: true, //monstra a chave 
    //     value: quantidade, //recebe o valor da variavel
    //     writable: true, //pode alterar o valor se estiver true
    //     configurable: false //pergunta se a variavel é configuravel 

    // })

}
const agua = new Produto("Do imalaia", 0.59, 3000)

console.log(agua)
//Mostra as chaves publicas do objeto
// console.log(Object.keys(agua))