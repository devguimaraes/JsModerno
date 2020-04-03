//Aula sobre herança

//Camisa, Caneca, Lapis
//Camisa = cor, tamanho
//Caneca = Material
//Lapis = tamanho ponta

function Produto(nome, preco, quantidade){
    this.nome = nome;
    this.preco = preco
    this.quantidade = quantidade
}
Produto.prototype.aumento = function(quantia){
    this.preco += quantia 
}
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia
}
//herdando propriedades do Produto
function CamisaFlamengo(nome, preco, quantidade, cor){
    Produto.call(this, nome, preco, quantidade)
    this.cor = cor;
}

//herda os prototypes do Produto
CamisaFlamengo.prototype = Object.create(Produto.prototype);

CamisaFlamengo.prototype.nomeCamisa = function(primeiroNome, segundoNome){
    this.nomeCamisa = `${primeiroNome} ${segundoNome}`
    return this.nomeCamisa
}

CamisaFlamengo.prototype.apelido = function(apelido){
    this.apelido = apelido;
    return this.apelido
}

//Colocando o nome do construtor com mesmo nome da função construtora
//O nome só pode ser alterado após receber o prototype que foi feita acima.
CamisaFlamengo.prototype.constructor = CamisaFlamengo;


const lojaBarra = new CamisaFlamengo('Regata Basquete', 140, 500, 'Rubro-Negra')
lojaBarra.nomeCamisa('Arthur Antunes', 'Coimbra')
lojaBarra.apelido('ZICOO')

console.log(lojaBarra)





