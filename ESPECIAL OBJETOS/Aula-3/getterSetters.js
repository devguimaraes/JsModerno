//Aula sobre Getter e Setters


//Get pega o valor
//Set seta o valor

// function Produto(nome, preco, estoque) {
//     this.nome = nome;
//     this.preco = preco;
//     let quantidade = estoque;
//     Object.defineProperties(this, {
//         nome: {
//             enumerable: true, 
//             configurable: false 
//         },
//         preco: {
//             enumerable: true, 
//             configurable: false 
//         },
//         quantidade: {
//             enumerable: true, 
//             configurable: false,
//             set: function(valor){
//                 if(typeof valor !== "Number"){
//                     console.log('O valor deve ser um número')
//                     return
//                 }
//                 quantidade = valor;
//             },

//             get: function(){
//                 return quantidade
//             },


//         }
//     })

// }

// const p1 = new Produto('Agua', 10)
// p1.quantidade = true
// console.log(p1)

// function Clientes(nome, cpf, endereco){
//     const nomeCompleto = nome;
//     const cpfAi = cpf;
//     const enderecoAi = endereco;

//     Object.defineProperties(this, {
//         nomeCompleto:{
//             enumerable: true,
//             configurable: true,
//             set:function(nomeCompleto){
//                 if(typeof nomeCompleto !== "string"){
//                     console.log('A variavel precisa ser uma string')
//                     return
//                 }

//                 nomeCompleto = nomeCompleto;
//             },

//             get: function(){
//                 return nomeCompleto
//             }
//         },
//         cpfAi:{
//             enumerable: true,
//             configurable: true,
//             set:function(cpfAi){
//                 if(typeof cpfAi !== "number"){
//                     console.log('A variavel precisa ser um número')
//                     return
//                 }

//                 cpfAi = cpfAi;
//             },

//             get: function(){
//                 return cpfAi
//             }
//         }, 
//         enderecoAi:{
//             enumerable: true,
//             configurable: true,
//             set:function(enderecoAi){
//                 if(typeof enderecoAi !== "string"){
//                     console.log('A variavel precisa ser uma string')
//                     return
//                 }

//                 enderecoAi = enderecoAi;
//             },

//             get: function(){
//                 return enderecoAi
//             }
//         }
//     })
// }


// const barDoAdao = new Clientes('Roland', 12814320750, 'Rua Cintra Dolly')

// console.log(barDoAdao.enderecoAi)

function Corona(nome) {
    Object.defineProperty(this, 'nome', {
        enumerable: true,
        configurable: true,
        set: function (valor) {
            try {
                if (typeof valor !== "string") {
                    throw new Error('O VALOR PASSADO PRECISA SER UMA STRING')
                }
                nome = valor;
            } catch (error) {
                console.log(error)
            }
        },
        get: function () {
            return nome;
        }
    })


}

const pessoa = new Corona()
pessoa.nome = 986;
console.log(pessoa.nome)



