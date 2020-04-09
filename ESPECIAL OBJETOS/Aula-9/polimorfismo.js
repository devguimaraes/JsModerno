//Aula sobre polimorfismo

//Conta é a super classe ou classe mãe
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;

}

Conta.prototype.sacar = function (valor) {
    if (this.saldo <= valor) {
        console.log('Você não pode sacar, seu saldo: ' + this.saldo)
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.despositar = function (valor) { 
    this.saldo += valor;
}

Conta.prototype.verSaldo = function () {
    return console.log(`Ag: ${this.agencia} C: ${this.conta}
    Seu saldo: R$${this.saldo.toFixed(2)}`)
 }



function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)

    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log('Você não pode sacar, seu saldo: ' + this.saldo + ' O seu limite: ' + this.limite)
        return
    }

    this.saldo -= valor
    this.verSaldo()
}


function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo)

}

ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca;


const cc = new ContaCorrente(021, 777, 0, 100)


const cp = new ContaPoupanca(022, 666, 0)

console.log(Object.is(ContaPoupanca, Conta))



