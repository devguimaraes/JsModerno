function ValidoCPF(cpfenviado){
    Object.defineProperty(this, 'limpaCPF',{
        enumerable: true,
        get: function(){
            return cpfenviado.replace(/\D+/g, '')
        }
    })
}


ValidoCPF.prototype.valida = function(){
    if(typeof this.limpaCPF === 'undefined') return false;
    if(this.limpaCPF.length !== 11) return false
    if(this.isSequencia()) return false

    const cpfParcial = this.limpaCPF.slice(0,-2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)

    const novoCpf = cpfParcial + digito1 + digito2
    
    return novoCpf === this.limpaCPF

}

ValidoCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial)
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val)=>{
        ac += (regressivo * Number(val))
        regressivo --;
        return ac
    },0)

    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito);
    
}

ValidoCPF.prototype.isSequencia = function(){
    let sequencia = this.limpaCPF[0].repeat(this.limpaCPF.length)  
    return sequencia == this.limpaCPF 
   
}

const cpf = new ValidoCPF('10');
if(cpf.valida()){
    console.log('Seu CPF é valido')
}else{
    console.log('Seu CPf não é valido')
}


